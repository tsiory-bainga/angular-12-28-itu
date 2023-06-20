import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Matiere } from 'src/app/models/Matiere-model';
import { MatiereService } from 'src/app/shared/Matiere-service';

@Component({
  selector: 'app-matiere-list',
  templateUrl: './matiere-list.component.html',
  styleUrls: ['./matiere-list.component.scss']
})
export class MatiereListComponent {
  listeMatieres : Matiere[] = [];

  constructor(  
    private matiereService : MatiereService,
    private router: Router
  ) { }

  ngOnInit() : void {
    this.getMatieres();
  }
  getMatieres() {
    this.matiereService.getMatieres()
    .subscribe(data => {
      this.listeMatieres = data;
    });
  }
  deleteMatiere(matiere : any){
    this.matiereService.deleteMatiere(matiere._id)
    .subscribe(
      ()=>{
        this.getMatieres();
      }
    );
  }
}
