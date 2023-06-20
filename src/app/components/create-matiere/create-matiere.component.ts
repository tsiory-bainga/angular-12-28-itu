import { Component } from '@angular/core';
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

  constructor( private matiereService : MatiereService) { }

  ngOnInit() : void {
  }

  addMatiere(){
    let matiere : Matiere ={
      nom : this.nom,
      nomProf : this.nomProf,
      photo : this.photo,
      photoProf : this.photoProf,
    }
    this.matiereService.addMatiere(matiere).subscribe();
  }

}
