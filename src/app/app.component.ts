import { IfStmt } from '@angular/compiler';
import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { EmployeeListService } from './Service/employee-list.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { Employee } from './Model/employee';
import { Observable, of } from 'rxjs';
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
  // searchbyArray:any=[];
  // s:any;
  // fillterby:any=[];
  a:string;
  employelistArray:any=[];
  // searchvalue:any[];
  // employelist:EmployeeListComponent[];
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
  
    this.router.navigate(['employees'])
   
    this.list=this.employeelistservice.Allemployees
    if (this.filterby == "preferredname") {
      this.filteredemployee=[];
      for (var i = 0; i < this.list.length; i++) {
        if(bool && this.list[i].PreferredName.toLowerCase().startsWith(value.toLowerCase())){
          this.filteredemployee[i]=(this.list[i])
        }
       
        if(bool==false && this.list[i].PreferredName.toLowerCase().includes(value.toLowerCase())){
          this.filteredemployee[i]=(this.list[i])
        }
        
      }
    }
    else if (this.filterby == "Firstname") {
      this.filteredemployee=[];
      for (var i = 0; i < this.list.length; i++) {
        if(bool && this.list[i].FirstName.toLowerCase().startsWith(value.toLowerCase())){
          this.filteredemployee[i]=(this.list[i])
        }
        else if(bool==false && this.list[i].FirstName.toLowerCase().includes(value.toLowerCase())){
          this.filteredemployee[i]=(this.list[i])
        }
        
      }
    }
    else if (this.filterby == "LastName") {
      this.filteredemployee=[];
      for (var i = 0; i < this.list.length; i++) {
        if(bool && this.list[i].LastName.toLowerCase().startsWith(value.toLowerCase())){
          this.filteredemployee[i]=(this.list[i])
        }
        else if(bool==false && this.list[i].LastName.toLowerCase().includes(value.toLowerCase())){
          this.filteredemployee[i]=(this.list[i])
        }
      }
    }
    else if (this.filterby == "Job") {
      this.filteredemployee=[];
      for (var i = 0; i < this.list.length; i++) {
        if(bool && this.list[i].Job.toLowerCase().startsWith(value.toLowerCase())){
          this.filteredemployee[i]=(this.list[i])
        }
        else if(bool==false && this.list[i].Job.toLowerCase().includes(value.toLowerCase())){
          this.filteredemployee[i]=(this.list[i])
        }
      }
    }
    else if (this.filterby == "Office") {
      this.filteredemployee=[];
      for (var i = 0; i < this.list.length; i++) {
        if(bool && this.list[i].office.toLowerCase().startsWith(value.toLowerCase())){
          this.filteredemployee[i]=(this.list[i])
        }
        else if(bool==false && this.list[i].office.toLowerCase().includes(value.toLowerCase())){
          this.filteredemployee[i]=(this.list[i])
        }
      }
    }
    
    else if (this.filterby == "Department") {
      this.filteredemployee=[];
      for (var i = 0; i < this.list.length; i++) {
        if(bool && this.list[i].Department.toLowerCase().startsWith(value.toLowerCase())){
          this.filteredemployee[i]=(this.list[i])
        }
        else if(bool==false && this.list[i].Department.toLowerCase().includes(value.toLowerCase())){
          this.filteredemployee[i]=(this.list[i])
        }
      }
    }
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
  // geti(){
  //   return this.filterby;
  // }
  // f(){

  // }

 

  // searchtexts(value:string){
  //   this.searchtext=value;
  //  console.log(this.searchtext)
  //    return this.searchtext
  // }
  // assignValue() {
  //   const SubscribeObservable = new Observable((observer) => {
  //     observer.next(this.searchtext);
  //   });
  //   return SubscribeObservable;
  // }

  
  // displayList(){
  //   this.employeelistservice.filterby(this.searchtext).subscribe(res=>{
  //     this.employelistArray=res
  //     console.log(res)
  //   });
  // }
}

  