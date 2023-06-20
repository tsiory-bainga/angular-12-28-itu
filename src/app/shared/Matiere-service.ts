import { Injectable } from '@angular/core';
import { Matiere } from '../models/Matiere-model';
import { Observable, catchError, forkJoin, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { bdInitialMatieres } from './data';

@Injectable({
    providedIn: 'root'
})
export class MatiereService {
    constructor(
        private http:HttpClient
    ) { }

    uri_api = 'http://localhost:8010/api/matieres';

    getMatieres() : Observable<any> {
        //return bdInitialMatieres;
        return this.http.get<Matiere[]>(this.uri_api);
    }

    getMatiereById(id : number) : Observable<any> {
        //return bdInitialMatieres;
        return this.http.get<Matiere>(this.uri_api + "/" + id);
    }

    addMatiere(Matiere:Matiere) : Observable<any> {
        return this.http.post<Matiere>(this.uri_api, Matiere);
    }

    updateMatiere(id : any, matiere : any):Observable<any> {
        return this.http.put<Matiere>(this.uri_api + "/" + id, matiere);
    }

    deleteMatiere(id : any):Observable<any> {
        return this.http.delete(this.uri_api + "/" + id)
    }
}