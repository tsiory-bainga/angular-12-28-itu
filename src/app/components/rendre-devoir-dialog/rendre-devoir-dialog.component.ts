import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Assignment } from 'src/app/models/Assignement-model';

@Component({
  selector: 'app-rendre-devoir-dialog',
  templateUrl: './rendre-devoir-dialog.component.html',
  styleUrls: ['./rendre-devoir-dialog.component.scss']
})
export class RendreDevoirDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<RendreDevoirDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : Assignment,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
