import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
// import { BodyComponent } from './Components/body/body.component';
// import { DepartmentComponent } from './Components/department/department.component';
// import { JobComponent } from './Components/job/job.component';
// import { OfficeComponent } from './Components/office/office.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { DepartmentDetailsComponent } from './Components/department-details/department-details.component';
import { AlphabetsComponent } from './Components/alphabets/alphabets.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { SearchBoxComponent } from './Components/search-box/search-box.component';
import { AlphabetsService } from './Service/alphabets.service';
import { EmployeeListService } from './Service/employee-list.service';
import { SearchBoxService } from './Service/search-box.service';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';



@NgModule({
  declarations: [
    AppComponent,
   
    SidebarComponent,
  
    EmployeeListComponent,
    DepartmentDetailsComponent,
    AlphabetsComponent,
    AddEmployeeComponent,
    SearchBoxComponent,
    EmployeeDetailsComponent,
   
  ],
  providers:[
    AlphabetsService,
    EmployeeListService,
    SearchBoxService,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
