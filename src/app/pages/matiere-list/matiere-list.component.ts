import { Component } from '@angular/core';
import { Matiere } from 'src/app/models/Matiere-model';
import { MatiereService } from 'src/app/shared/Matiere-service';

@Component({
  selector: 'app-matiere-list',
  templateUrl: './matiere-list.component.html',
  styleUrls: ['./matiere-list.component.scss']
})
export class MatiereListComponent {
  listeMatieres : Matiere[] = [];

  constructor(private matiereService : MatiereService) { }
  ngOnInit() : void {
    this.getAssignments();
  }
  getAssignments() {
    this.listeMatieres = this.matiereService.getMatieres();
  }
}
