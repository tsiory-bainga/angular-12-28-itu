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
  page: number=1;
  limit: number=5;
  totalDocs: number = 0;
  totalPages: number = 0;
  hasPrevPage: boolean = false;
  prevPage: number = 0;
  hasNextPage: boolean = false;
  nextPage: number = 0;

  constructor(private assignmentService : AssignmentService, private matiereService : MatiereService) { }
  ngOnInit() : void {
    this.getAssignments();
  }
  getAssignments() {
    this.assignmentService.getAssignments(this.page, this.limit)
    .subscribe(data => {
      this.listeAssignments = data.docs;
      this.page = data.page;
      this.limit = data.limit;
      this.totalDocs = data.totalDocs;
      this.totalPages = data.totalPages;
      this.hasPrevPage = data.hasPrevPage;
      this.prevPage = data.prevPage;
      this.hasNextPage = data.hasNextPage;
      this.nextPage = data.nextPage;
    });
  }
  getRenduAssignments() {
    this.assignmentService.getRenduAssignments(this.page, this.limit)
    .subscribe(data => {
      this.listeAssignments = data.docs;
      this.page = data.page;
      this.limit = data.limit;
      this.totalDocs = data.totalDocs;
      this.totalPages = data.totalPages;
      this.hasPrevPage = data.hasPrevPage;
      this.prevPage = data.prevPage;
      this.hasNextPage = data.hasNextPage;
      this.nextPage = data.nextPage;
    });
  }
  getNotRenduAssignments() {
    this.assignmentService.getNotRenduAssignments(this.page, this.limit)
    .subscribe(data => {
      this.listeAssignments = data.docs;
      this.page = data.page;
      this.limit = data.limit;
      this.totalDocs = data.totalDocs;
      this.totalPages = data.totalPages;
      this.hasPrevPage = data.hasPrevPage;
      this.prevPage = data.prevPage;
      this.hasNextPage = data.hasNextPage;
      this.nextPage = data.nextPage;
    });
  }

  premierePage() {
    this.page = 1;
    this.getAssignments();
  }

  pageSuivante() {
    this.page = this.nextPage;
    this.getAssignments();
  }

  pagePrecedente() {
    this.page = this.prevPage;
    this.getAssignments();
  }
  dernierePage() {
    this.page = this.totalPages;
    this.getAssignments();
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
