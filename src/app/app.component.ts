
import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { EmployeeListService } from './Service/employee-list.service';
import { Employee } from './Model/employee';
import { AlphabetsService } from './Service/alphabets.service';
import { AddEmployeeComponent } from './Components/add-employee/add-employee.component';
import { MatDialog } from '@angular/material/dialog';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list:Employee[];
  alphaArray:string[]=[];
  filteredemployee:Employee[]=[];
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 
  searchtext:string;
  alphabet:string
  filterby:string;
  alpha:string;
 filterValue='PreferredNam'
  fillterbyarray=['PreferredName','FirstName','LastName','Job','Department','office']
  
  constructor(private employeelistservice:EmployeeListService,private router:Router,private alphabetsservice:AlphabetsService,private  dialog:  MatDialog) {
   
   
   }

   ngOnInit(){
   
  
   }
   openpop(){
    this.dialog.open(AddEmployeeComponent,{
      width: '600px',
      height:'700px',
      data: {}
    })
  }

  onKeyUp(value:string,isTrue:boolean){
    if(isTrue){
      this.employeelistservice.setAlpha(value);
     
    }
    
    else{
      this.employeelistservice.setSearchText(value);
      // this.employeelistservice.getDetails()
    }
  
    this.router.navigate([''])
  }

  onSelected(value:string) {
    this.employeelistservice.setFilteredBy(value);  
	}
 
  clearButton(){
   
    this.router.navigate(['/'])
  }
}