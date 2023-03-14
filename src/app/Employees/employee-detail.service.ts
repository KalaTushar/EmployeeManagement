import {Injectable} from '@angular/core';
import { ICreateEmployee, IEmployee } from './Employee';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { EmployeeDetailsComponent } from './employee-details.component';
import { ActivatedRoute } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class EmployeeDetailService{
    constructor(private httpreq: HttpClient){
        
    }
    getEmployee(idd: number): Observable<IEmployee>{
        return this.httpreq.get<IEmployee>(`http://localhost:5000/api/employee/${idd}`).pipe(
            tap(data=>console.log('All',JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
    updateEmployee(id: number, employee: ICreateEmployee){
      return this.httpreq.put<ICreateEmployee>(`http://localhost:5000/api/employee/${id}`,employee).pipe(
        tap(data=>console.log('Updated Succesfully',JSON.stringify(data))),
            catchError(this.handleError)
      );
    }
    deleteEmployee(id: number){
      return this.httpreq.delete(`http://localhost:5000/api/employee/${id}`).pipe(
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