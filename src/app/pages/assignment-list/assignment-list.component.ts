import { Component } from '@angular/core';
import { Assignment } from 'src/app/models/Assignement-model';
import { AssignmentService } from 'src/app/shared/Assignment-service';
import { MatiereService } from 'src/app/shared/Matiere-service';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.scss']
})
export class AssignmentListComponent {
  listeAssignments : Assignment[] = [];

  constructor(private assignmentService : AssignmentService, private matiereService : MatiereService) { }
  ngOnInit() : void {
    this.getAssignments();
  }
  getAssignments() {
    this.listeAssignments = this.assignmentService.getAssignments();
  }
  getRenduAssignments() {
    this.listeAssignments = this.assignmentService.getRenduAssignments();
  }
  getNotRenduAssignments() {
    this.listeAssignments = this.assignmentService.getNotRenduAssignments();
  }



  onTabChange(event: any) {
    const selectedIndex = event.index;
    if (selectedIndex === 0) {
      this.getAssignments();
    } else if (selectedIndex === 1) {
      this.getRenduAssignments();
    } else if (selectedIndex === 2) {
      this.getNotRenduAssignments();
    }
  }
}
