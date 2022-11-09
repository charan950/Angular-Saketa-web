import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { AlphabetsComponent } from './Components/alphabets/alphabets.component';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { AlphabetsService } from './Service/alphabets.service';
import { EmployeeListService } from './Service/employee-list.service';
import { EmployeeDetailsComponent } from './Components/employee-details/employee-details.component';
import { EmployeeListComponent } from './Components/employee-list/employee-list.component';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import{MatDialogModule} from '@angular/material/dialog'
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { SideBarFilterComponent } from './Components/side-bar-filter/side-bar-filter.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
   SideBarFilterComponent,
    AlphabetsComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    HeaderComponent,
   

  ],
  
  providers:[
    AlphabetsService,
    EmployeeListService,
   
    
  ],
  entryComponents:[
    AddEmployeeComponent,
    EmployeeDetailsComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
   
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule,
    BrowserAnimationsModule,
     MatDialogModule,
    ReactiveFormsModule,
   
   MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule,
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
