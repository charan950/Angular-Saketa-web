
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
 
  fillterbyarray=['preferredname','Firstname','LastName','Job','Department','Office']
  
  constructor(private employeelistservice:EmployeeListService,private router:Router,private alphabetsservice:AlphabetsService,private  dialog:  MatDialog) {
   
   
   }

   ngOnInit(){
    this.getalphaArray();
  
   }
   openpop(){
    this.dialog.open(AddEmployeeComponent)
  }

  onKeyUp(value:string,bool:boolean){
    if(bool){
      this.employeelistservice.setAlpha(value);
    }
    else{
      this.employeelistservice.setSearchText(value);
    }
  
    this.router.navigate([''])
  }

  onSelected(value:string) {
    this.employeelistservice.setFilteredBy(value);  
	}
  getalphaArray(){
    let index=0;
    for (let i = 65; i < 91; i++) {
      var al = String.fromCharCode(i);
      this.alphaArray[index]=al;
      index++;
    }
  }
}