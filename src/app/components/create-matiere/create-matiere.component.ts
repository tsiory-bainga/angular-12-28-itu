import { Component } from '@angular/core';

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
}
