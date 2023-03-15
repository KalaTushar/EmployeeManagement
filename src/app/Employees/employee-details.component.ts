import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEmployee } from './Employee';
import { EmployeeDetailService } from './employee-detail.service';
import { EmployeeService } from './employeeService';
@Component({
  templateUrl: './employee-details.component.html',
  providers: [EmployeeDetailsComponent]
})
export class EmployeeDetailsComponent implements OnInit {
  errorMessage: string = '';
  employeedetail! : IEmployee;
  constructor(private route: ActivatedRoute, private empService: EmployeeDetailService,private emp: EmployeeService) {
    
   }
  pageTitle = 'Employee Details';
  idd: number = 0;
  showForm: Boolean = false;
  deleteform: boolean = false;
  gendertype = ['Male','Female','Others'];
  emptype = ['Internal','External'];
  sub!: Subscription;
  show(){
    if(this.showForm==false)
      this.showForm=true;
    else
      this.showForm=false;
  }
  show1(){
    if(this.deleteform==false)
      this.deleteform=true;
    else
      this.deleteform=false;
  }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.idd=id;
    this.pageTitle += `:  ${id}`;
    this.empService.getEmployee(id).subscribe({
      next: employee => {
        this.employeedetail = employee;
      },
      error: err=> this.errorMessage = err,
    });
  }
  employeeupdate(){
    this.empService.updateEmployee(this.idd,this.employeedetail).subscribe(()=>{
          this.show();
      });
    }
  deleteemployee(){
    this.empService.deleteEmployee(this.idd).subscribe(()=>{
    });
  }
  series(){
    this.deleteemployee();
    this.emp.updateemplist;
    }
}
