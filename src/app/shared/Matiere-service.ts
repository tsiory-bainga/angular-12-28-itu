import { Injectable } from '@angular/core';
import { Matiere } from '../models/Matiere-model';
import { Observable, catchError, forkJoin, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { bdInitialMatieres } from './data';

@Injectable({
    providedIn: 'root'
})
export class MatiereService {
    getMatieres() : Matiere[] {
        return bdInitialMatieres;
    }
    getMatiere(id : string) : Matiere{
        let allMatieres = bdInitialMatieres;
        return allMatieres.filter(a => a._id == id)[0];
    }
}