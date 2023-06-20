import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Assignment } from 'src/app/models/Assignement-model';
import { Matiere } from 'src/app/models/Matiere-model';
import { AssignmentService } from 'src/app/shared/Assignment-service';
import { MatiereService } from 'src/app/shared/Matiere-service';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.scss']
})
export class CreateAssignmentComponent {
  photoAuteur : string = '../assets/img/avatars/1.png';
  nomAuteur : string = '';
  titre : string = '';
  matiere :any;
  dateRendu! : Date;

  listeMatieres : Matiere[] = [];
  message: any;

  constructor(private assignmentService : AssignmentService, private matiereService : MatiereService, private router: Router) { }
  ngOnInit() : void {
    this.getMatieres();
  }
  getMatieres() {
    this.matiereService.getMatieres()
    .subscribe(data => {
      this.listeMatieres = data;
    });
  }
  onFileSelected(files: FileList): void {
    console.log(files[0]);
    this.convertToBase64(files[0]);
  }
  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber)
    })
    observable.subscribe((d) => {
      console.log(d);
      this.photoAuteur = d;
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      subscriber.next(fileReader.result)
      subscriber.complete()
    }
    fileReader.onerror = (error) => {
      subscriber.error(error)
      subscriber.complete()
    }
  }
  addAssigment(){
  
    if(this.matiere && this.titre && this.nomAuteur && this.dateRendu){
      this.message = null;
      let matiere : Matiere ={
        _id: this.matiere._id,
        nom : this.matiere.nom,
        nomProf : this.matiere.nomProf,
        photo : this.matiere.photo,
        photoProf : this.matiere.photoProf,
      }
      let assignment : Assignment = {
        photoAuteur : this.photoAuteur,
        titre : this.titre,
        nomAuteur : this.nomAuteur,
        matiere : matiere,
        dateRendu : new Date(this.dateRendu),
        rendu : false
      }
      this.assignmentService.addAssignment(assignment).subscribe(
        (data : any)=> {
          this.router.navigate(['/assignments']);
        }, err => { console.log(err) }
      );
    }
    else{
      this.message = 'Veuillez remplir tous les champs';
    }
  }
}
