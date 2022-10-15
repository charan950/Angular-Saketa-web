
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
  filterby:string='PreferredName'
  alpha:string;
 filterValue='PreferredNam'
  fillterbyarray=['PreferredName','FirstName','LastName','Job','Department','office']
  
  constructor(private employeelistservice:EmployeeListService,
    private router:Router,
   
    private  dialog:  MatDialog,
  
    ) {
   }

   ngOnInit(){
 
  

  }

   openpop(){
    this.dialog.open(AddEmployeeComponent,{
      width: '600px',
      height:'700px',
      data: {}
    })
    this.employeelistservice.openAddForm=true
    this.employeelistservice.openUpdateForm=false
   
  }

  onKeyUp(isTrue:boolean){
    if(isTrue){
      this.employeelistservice.setAlpha(this.searchtext);
     
    }
    
    else{
      this.employeelistservice.setSearchText(this.searchtext);
      
    }
  
    this.router.navigate([''])
  }

  onSelected(value:string) {
    this.employeelistservice.setFilteredBy(value);  
	}
 
  clearButton(){
   this.searchtext=''
   this.filterby='PreferredName'
   this.employeelistservice.setSearchText(this.searchtext);
    this.router.navigate(['/'])
  }
}