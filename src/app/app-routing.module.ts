import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { DepartmentDetailsComponent } from './Components/sideBar-filter/sideBar-filter';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';

const routes: Routes = [
  {path:'sidebar/',component:SidebarComponent},
  {path:'sidebar/:id',component:DepartmentDetailsComponent},
  {path:'addemployee',component:AddEmployeeComponent},
  { path: '**', component: EmployeeListComponent },
  {path:'employeedetails',component:EmployeeDetailsComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
