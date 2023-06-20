import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Assignment } from 'src/app/models/Assignement-model';
import { AssignmentService } from 'src/app/shared/Assignment-service';

@Component({
  selector: 'app-rendre-devoir-dialog',
  templateUrl: './rendre-devoir-dialog.component.html',
  styleUrls: ['./rendre-devoir-dialog.component.scss']
})
export class RendreDevoirDialogComponent {
  note: string = '';
  remarque: string = '';
  constructor(
    public dialogRef: MatDialogRef<RendreDevoirDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : Assignment,
    private assignmentService : AssignmentService,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  rendreDevoir(){
    let note = parseInt(this.note);
    if(note && note<20 && note>=0){
      let assignment = {
        note: this.note,
        remarque: this.remarque,
        rendu: true
      }
      this.assignmentService.updateAssignment(this.data._id, assignment).subscribe();
      this.dialogRef.close();
      this.router.navigate(['/assignments']);
    }
    else{
      
    }
  }
}
