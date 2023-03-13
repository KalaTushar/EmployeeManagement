import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details.component';
import { EmployeeComponent } from './EmployeeList';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeDetailsComponent,
    CreateEmployeeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'employees', component: EmployeeComponent},
      {path: 'employees/:id', component: EmployeeDetailsComponent},
    ])
  ]
})
export class EmployeeModule { }
