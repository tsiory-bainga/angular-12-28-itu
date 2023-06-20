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
  matiere : string = '';
  dateRendu! : Date;

  assignment! : Assignment | undefined;

  listeMatieres : Matiere[] = [];
  
  
  constructor(
    private assignmentsService: AssignmentService,
    private matiereService : MatiereService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() : void {
    this.listeMatieres = this.matiereService.getMatieres();
    this.getAssignment();
  }
  getAssignment() {
    const id = this.route.snapshot.params['id'];
    this.assignment = this.assignmentsService.getAssignment(id);
    if (!this.assignment) return;
    
    this.photoAuteur = this.assignment.photoAuteur;
    this.nomAuteur = this.assignment.nomAuteur;
    this.titre = this.assignment.titre;
    this.matiere = this.assignment.matiere._id;
    this.dateRendu = this.assignment.dateRendu;
  };
}
 
