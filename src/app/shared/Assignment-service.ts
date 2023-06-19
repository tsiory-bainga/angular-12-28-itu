import { Injectable } from '@angular/core';
import { Assignment } from '../models/Assignement-model';
import { Observable, catchError, forkJoin, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { bdInitialAssignments } from './data';

@Injectable({
    providedIn: 'root'
})
export class AssignmentService {
    getAssignments() : Assignment[] {
        return bdInitialAssignments;
    }
    getRenduAssignments() : Assignment[] {
        let allAssignments = bdInitialAssignments;
        return allAssignments.filter(a => a.rendu == true);
    }
    getNotRenduAssignments() : Assignment[] {
        let allAssignments = bdInitialAssignments;
        return allAssignments.filter(a => a.rendu == false);
    } 
}