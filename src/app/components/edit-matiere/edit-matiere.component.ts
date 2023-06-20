import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Matiere } from 'src/app/models/Matiere-model';
import { MatiereService } from 'src/app/shared/Matiere-service';

@Component({
  selector: 'app-edit-matiere',
  templateUrl: './edit-matiere.component.html',
  styleUrls: ['./edit-matiere.component.scss']
})
export class EditMatiereComponent {
  nom : string = '';
  nomProf : string = '';
  photoProf : string = '../assets/img/avatars/1.png';
  photo : string = '../assets/img/avatars/2.png';

  matiere! : Matiere | undefined;
  message: any;

  constructor(
    private matiereService : MatiereService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() : void {
    this.getMatiere();
  }

  getMatiere() {
    const id = this.route.snapshot.params['id'];
    this.matiereService.getMatiereById(id)
    .subscribe(data =>{
        this.matiere = data;
        this.nom = data.nom;
        this.photo = data.photo;
        this.photoProf = data.photoProf;
        this.nomProf = data.nomProf;
    });
    if (!this.matiere) return;
    
  };

  updateMatiere(){
    const id = this.route.snapshot.params['id'];
    if(this.nom && this.nomProf){
      this.message = null;
      let matiere: any = {
        nom : this.nom,
        nomProf : this.nomProf,
        photo : this.photo,
        photoProf : this.photoProf
      } 
      
      this.matiereService.updateMatiere(id, matiere).subscribe();
      this.router.navigate(['/matieres']);
    }
    else{
      this.message = 'Veuillez remplir tous les champs';
    }
  }
}
