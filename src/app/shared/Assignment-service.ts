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
    uri_api = 'http://localhost:8010/api/assignments';
    // uri_api = 'https://mbds-madagascar-2022-2023-back-end.onrender.com/api/assignments';

    getAssignments() : Observable<any> {
        // return bdInitialAssignments;
        return this.http.get<Assignment[]>(this.uri_api);
    }
    getRenduAssignments() : Assignment[] {
        let allAssignments = bdInitialAssignments;
        return allAssignments.filter(a => a.rendu == true);
    }
    getNotRenduAssignments() : Assignment[] {
        let allAssignments = bdInitialAssignments;
        return allAssignments.filter(a => a.rendu == false);
    }
    getAssignment(id : string) : Assignment {
        let allAssignments = bdInitialAssignments;
        return allAssignments.filter(a => a._id == id)[0];
    } 

    addAssignment(assignment:Assignment):Observable<any> {
        return this.http.post<Assignment>(this.uri_api, assignment);
    }

    updateAssignment(assignment:Assignment):Observable<any> {
        return this.http.put<Assignment>(this.uri_api, assignment);
    }

    deleteAssignment(assignment:Assignment):Observable<any> {
        return this.http.delete(this.uri_api + "/" + assignment._id)
    }
}