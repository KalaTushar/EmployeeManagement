import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { IEmployee } from "./Employee";
import { EmployeeService } from "./employeeService";
@Component({
  selector: 'employee-list',
  templateUrl: './EmployeeList.html',
  styleUrls: ['./EmployeeList.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent {
  constructor(private empService: EmployeeService){

  }
  errorMessage: string = '';
  private _listFilter = '';
  employees : IEmployee[] = [];
  sub!: Subscription;
  showForm: Boolean =false;
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter=value;
    this.filteredEmployees=this.performFilter(value);
  }
  show(){
    if(this.showForm==true){
      this.showForm=false;
    }
    else
    this.showForm=true;
  }
  filteredEmployees : IEmployee[] =[];
  
  performFilter(value : string): IEmployee[]{

    value = value.toLocaleLowerCase();
    return this.employees.filter((employee:IEmployee)=>
      employee.employeeName.toLowerCase().includes(value));
  }
  ngOnInit(): void{
    this.sub = this.empService.getEmployee().subscribe({
      next: employee => {
        this.employees = employee;
        this.filteredEmployees=this.employees;
      },
      error: err=> this.errorMessage = err,
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
