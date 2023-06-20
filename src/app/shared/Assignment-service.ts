import { Injectable } from '@angular/core';
import { Assignment } from '../models/Assignement-model';
import { Observable, catchError, forkJoin, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { bdInitialAssignments } from './data';

@Injectable({
    providedIn: 'root'
})
export class AssignmentService {
    constructor(
        private http:HttpClient
    ) { }
    uri_api = 'https://backend-12-28-madagascar.onrender.com/api';
    // uri_api = 'https://mbds-madagascar-2022-2023-back-end.onrender.com/api/assignments';

    getAssignments(page:number,limit:number) : Observable<any> {
        return this.http.get<Assignment[]>(this.uri_api + '/assignments' + "?page=" + page + "&limit=" + limit);
    }
    getRenduAssignments(page:number,limit:number) : Observable<any> {
        // let allAssignments = bdInitialAssignments;
        // return allAssignments.filter(a => a.rendu == true);
        return this.http.get<Assignment[]>(this.uri_api + '/assignmentsRendu' + "?page=" + page + "&limit=" + limit);
    }
    getNotRenduAssignments(page:number,limit:number) : Observable<any> {
        return this.http.get<Assignment[]>(this.uri_api + '/assignmentsNonRendu' + "?page=" + page + "&limit=" + limit);
    }
    
    getAssignment(id : string) : Observable<any> {
        return this.http.get<Assignment>(this.uri_api + '/assignments/' + id);
    } 

    addAssignment(assignment:Assignment):Observable<any> {
        return this.http.post<Assignment>(this.uri_api+ '/assignments', assignment);
    }

    updateAssignment(id: any, assignment : Object):Observable<any> {
        return this.http.put(this.uri_api + "/assignments/" + id, assignment);
    }

    deleteAssignment(id : any):Observable<any> {
        return this.http.delete(this.uri_api + "/assignments/" + id)
    }
}