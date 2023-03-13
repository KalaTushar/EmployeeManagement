import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div class="card-header" style="text-align: center; font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; font-size: xx-large;">
    {{pageTitle}}
  </div>
    <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/employees'>Employee List</a></li>
        </ul>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Employee Managment';
}
