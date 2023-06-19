import { Component } from '@angular/core';
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
  matiere : string = '';
  dateRendu! : Date;

  listeMatieres : Matiere[] = [];

  constructor(private assignmentService : AssignmentService, private matiereService : MatiereService) { }
  ngOnInit() : void {
    this.getMatieres();
  }
  getMatieres() {
    this.listeMatieres = this.matiereService.getMatieres();
  }
}
