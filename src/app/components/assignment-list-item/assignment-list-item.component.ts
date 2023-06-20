import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Assignment } from 'src/app/models/Assignement-model';
import { RendreDevoirDialogComponent } from '../rendre-devoir-dialog/rendre-devoir-dialog.component';
import { AssignmentService } from 'src/app/shared/Assignment-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-list-item',
  templateUrl: './assignment-list-item.component.html',
  styleUrls: ['./assignment-list-item.component.scss']
})
export class AssignmentListItemComponent {
  @Input() assignment! : Assignment;
  constructor(public dialog: MatDialog, private assignmentsService: AssignmentService, private router: Router) {}

  openDialog(): void {
    
    console.log(this.assignment._id);
    const dialogRef = this.dialog.open(RendreDevoirDialogComponent, {
      width: '500px',
      panelClass : 'rounded-border',
      data: {
          "_id" : this.assignment._id,
          "photoAuteur" : this.assignment.photoAuteur,
          "nomAuteur" : this.assignment.nomAuteur,
          "titre" : this.assignment.titre,
          "matiere" : this.assignment.matiere,
          "dateRendu" : this.assignment.dateRendu,
          "rendu" : this.assignment.rendu,
          "note" : 0,
          "remarque" : ''
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  deleteAssignment(){
    this.assignmentsService.deleteAssignment(this.assignment._id).subscribe();
  }
}
