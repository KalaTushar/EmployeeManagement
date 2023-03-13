import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from './Employee';
import { EmployeeDetailService } from './employee-detail.service';
@Component({
  templateUrl: './employee-details.component.html',
  providers: [EmployeeDetailsComponent]
})
export class EmployeeDetailsComponent implements OnInit {
  errorMessage: string = '';
  employeedetail : IEmployee | undefined;
  constructor(private route: ActivatedRoute, private empService: EmployeeDetailService) { }
  pageTitle = 'Employee Details';
  idd: number = 0;
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
}
