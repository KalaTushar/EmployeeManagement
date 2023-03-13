import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { IEmployee } from './Employees/Employee';
import { EmployeeModule } from './Employees/employee.module';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '' , redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome',pathMatch: 'full'} 
    ]),
    EmployeeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
