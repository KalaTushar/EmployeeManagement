import { Component, OnInit } from '@angular/core';
import { EmployeeCreateService } from './create-employee.service';
import { IEmployee } from './Employee';
import { ICreateEmployee } from './Employee';
import { EmployeeComponent } from './EmployeeList';
import { EmployeeService } from './employeeService';
@Component({
  selector: 'pm-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent{

  constructor(private create: EmployeeCreateService, private emp: EmployeeService) { }
  errorMessage: string = '';
  employee: ICreateEmployee = {
    "employeeName" : "Sample Name",
    "employeeType" : "Internal",
    "gender" : "Male",
    "skills" : "Sample Skills",
    "division" : "Sample Division",
    "role" : "Sample Role"
  };
  letsee: string = "Whooa";
  gendertype = ['Male','Female','Others'];
  emptype = ['Internal','External'];
  close(){
  this.emp.getEmployee();
  }
  employeeregister(){
  this.create.createEmployee(this.employee).subscribe({
      next: this.close,
      error: err=> this.errorMessage = err,
    });
  }
}
