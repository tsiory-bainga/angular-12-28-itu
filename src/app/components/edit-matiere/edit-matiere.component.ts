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
    });
    if (!this.matiere) return;
    
    this.nom = this.matiere.nom;
    this.photo = this.matiere.photo;
    this.photoProf = this.matiere.photoProf;
    this.nomProf = this.matiere.nomProf;
  };
}
