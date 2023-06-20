import { Component } from '@angular/core';
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

  constructor(private assignmentService : AssignmentService, private matiereService : MatiereService) { }
  ngOnInit() : void {
    this.getMatieres();
  }
  getMatieres() {
    this.matiereService.getMatieres()
    .subscribe(data => {
      this.listeMatieres = data;
    });
  }
  addAssigment(){
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
      dateRendu : this.dateRendu,
      rendu : false
    }
    this.assignmentService.addAssignment(assignment).subscribe();
  }
}
