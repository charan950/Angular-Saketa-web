import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './Components/header/header.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
// import { BodyComponent } from './Components/body/body.component';
// import { DepartmentComponent } from './Components/department/department.component';
// import { JobComponent } from './Components/job/job.component';
// import { OfficeComponent } from './Components/office/office.component';
import { DepartmentDetailsComponent } from './Components/department-details/department-details.component';
import { AlphabetsComponent } from './Components/alphabets/alphabets.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { AlphabetsService } from './Service/alphabets.service';
import { EmployeeListService } from './Service/employee-list.service';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import { SearchFilterComponent } from './Components/search-filter/search-filter.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import{MatDialogModule} from '@angular/material/dialog'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UpdateDetailsComponent } from './Components/update-details/update-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DepartmentDetailsComponent,
    AlphabetsComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    FilterPipe,
    EmployeeListComponent,
    SearchFilterComponent,
    UpdateDetailsComponent,
    
  
  ],
  providers:[
    AlphabetsService,
    EmployeeListService,
   
    
  ],
  entryComponents:[AddEmployeeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
   MatDialogModule,
    BrowserAnimationsModule,
     MatDialogModule,
    
   MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule,
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
