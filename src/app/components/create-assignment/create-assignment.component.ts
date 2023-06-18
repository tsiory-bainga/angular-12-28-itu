import { Component } from '@angular/core';

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
}
