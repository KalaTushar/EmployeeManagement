import {Injectable} from '@angular/core';
import { IEmployee } from './Employee';
import { ICreateEmployee } from './Employee';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class EmployeeCreateService{
    constructor(private httpreq: HttpClient){
        
    }
    createEmployee(idd: ICreateEmployee){
        return this.httpreq.post<ICreateEmployee>('http://localhost:5000/api/employee/',idd).pipe(
            tap(data=>console.log('Employee Registered Successfully',JSON.stringify(data))),
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