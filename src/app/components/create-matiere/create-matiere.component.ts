import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
