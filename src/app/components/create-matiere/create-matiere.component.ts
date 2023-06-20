import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { Matiere } from 'src/app/models/Matiere-model';
import { MatiereService } from 'src/app/shared/Matiere-service';

@Component({
  selector: 'app-create-matiere',
  templateUrl: './create-matiere.component.html',
  styleUrls: ['./create-matiere.component.scss']
})
export class CreateMatiereComponent {
  nom : string = '';
  nomProf : string = '';
  photoProf : string = '../assets/img/avatars/1.png';
  photo : string = '../assets/img/avatars/2.png';
  message: any;

  constructor( private matiereService : MatiereService, private router : Router) { }

  ngOnInit() : void {
  }
  
  onFileChangePhotoMatiere(files: FileList): void {
    console.log("photo matiere");
    this.convertToBase64PhotoMatiere(files[0]);
  }
  onFileChangePhotoProf(files: FileList): void {
    console.log("Pooo");
    this.convertToBase64PhotoProf(files[0]);
  }
  convertToBase64PhotoMatiere(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber)
    })
    observable.subscribe((d) => {
      console.log(d);
      this.photo = d;
    })
  }
  convertToBase64PhotoProf(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber)
    })
    observable.subscribe((d) => {
      console.log(d);
      this.photoProf = d;
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
  addMatiere(){
    if(this.nom && this.nomProf){
      this.message=null;
      let matiere : Matiere ={
        nom : this.nom,
        nomProf : this.nomProf,
        photo : this.photo,
        photoProf : this.photoProf,
      }
      this.matiereService.addMatiere(matiere).subscribe();
      this.router.navigate(['/matieres']);
    }
    else{
      this.message = 'Veuillez remplir tous les champs';
    }
  }

}
