import {Injectable} from '@angular/core';
import { IEmployee } from './Employee';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class EmployeeService{
    private employeeUrl ='http://localhost:5000/api/employee'
    constructor(private httpreq: HttpClient){
        
    }
    getEmployee(): Observable<IEmployee[]>{
        return this.httpreq.get<IEmployee[]>(this.employeeUrl).pipe(
            tap(data=>console.log('All',JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    private handleError(err: HttpErrorResponse): Observable<never> {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
      }
}