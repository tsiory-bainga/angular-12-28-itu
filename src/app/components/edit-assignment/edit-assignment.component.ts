import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from 'src/app/models/Assignement-model';
import { Matiere } from 'src/app/models/Matiere-model';
import { AssignmentService } from 'src/app/shared/Assignment-service';
import { MatiereService } from 'src/app/shared/Matiere-service';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.scss']
})
export class EditAssignmentComponent {
  photoAuteur : string = '../assets/img/avatars/1.png';
  nomAuteur : string = '';
  titre : string = '';
  matiere : any;
  ancienMatiere : any;
  dateRendu! : Date;
  assignment! : Assignment | undefined;

  listeMatieres : Matiere[] = [];
  message: any;
  
  
  constructor(
    private assignmentsService: AssignmentService,
    private matiereService : MatiereService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() : void {
    this.matiereService.getMatieres()
    .subscribe(data => {
      this.listeMatieres = data;
    });
    this.getAssignment();
    if(localStorage.getItem('isAdmin') == 'false'){
      this.router.navigate(['/assignments']);
    }
  }
  getAssignment() {
    const id = this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id)
    .subscribe(data => {
      if(data.rendu){
        this.router.navigate(['/assignments']);
      }
      else{
        this.assignment = data;  
        this.photoAuteur = data.photoAuteur;
        this.nomAuteur = data.nomAuteur;
        this.titre = data.titre;
        this.ancienMatiere = data.matiere;
        this.matiere = data.matiere._id;
        this.dateRendu = data.dateRendu;
      }
    });
    if (!this.assignment) return;
  };

  updateAssigment(){
    const id = this.route.snapshot.params['id'];
    if(this.matiere && this.titre && this.nomAuteur && this.dateRendu){
      this.message = null;
      let assignment : any;
      let matiere: any;
      console.log(this.matiere);
      
      if (this.ancienMatiere._id !== this.matiere) { 
        this.matiereService.getMatiereById(this.matiere)
        .subscribe(data => {
          console.log(data);
          
          matiere ={
            _id: data._id,
            nom : data.nom,
            nomProf : data.nomProf,
            photo : data.photo,
            photoProf : data.photoProf
          } 
          assignment = {
            photoAuteur : this.photoAuteur,
            titre : this.titre,
            nomAuteur : this.nomAuteur,
            matiere : matiere,
            dateRendu : new Date(this.dateRendu)
          }
          this.assignmentsService.updateAssignment(id, assignment).subscribe();
          this.router.navigate(['/assignments']);
        });
      }
      else{
        assignment = {
          photoAuteur : this.photoAuteur,
          titre : this.titre,
          nomAuteur : this.nomAuteur,
          dateRendu : new Date(this.dateRendu)
        }
        this.assignmentsService.updateAssignment(id, assignment).subscribe();
        this.router.navigate(['/assignments']);
      }
    }
    else{
      this.message = 'Veuillez remplir tous les champs';
    }
  }
}
 
