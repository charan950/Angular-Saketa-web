import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Employee } from 'src/app/Model/employee';
import { EmployeeListService } from 'src/app/Service/employee-list.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  allemployees:Employee[];
  filterlist:Employee[]=[];
  alphabet:string
  newlist:Employee[]=[];
  index =0;
  employee:Employee;
  constructor(private employeelistservice:EmployeeListService,private router:Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.allemployees = this.employeelistservice.getEmployeeList();
    this.filterlist=this.allemployees;
    console.log(this.filterlist.length)
   
    this.employeelistservice.filterby.subscribe(res=>{
      if(res=='preferredname'){
        for(let emp of this.allemployees){
          this.employeelistservice.searchText.subscribe(text=>{
            if(text==''){
              this.filterlist=this.allemployees
            }
            if(emp.PreferredName.includes(text)){
              if(!this.newlist.includes(emp)){
                this.newlist.push(emp);
                this.filterlist=this.newlist;
              }
            }
            else{
              console.log('done')
              this.newlist=[];
              this.filterlist=[];
            }
          })
          this.employeelistservice.alphabet.subscribe(alpha=>{
            if(emp.PreferredName.startsWith(alpha.toLocaleLowerCase())){
              if(!this.newlist.includes(emp)){
                this.newlist.push(emp);
                this.filterlist=this.newlist;
              }
            } 
            else{
              this.newlist=[];
              this.filterlist=[];
            }        
          })
        }
      }
      if(res=='Firstname'){
        for(let emp of this.allemployees){
          this.employeelistservice.searchText.subscribe(text=>{
            if(text==''){
              this.filterlist=this.allemployees
            }
            if(emp.FirstName.includes(text)){
              if(!this.newlist.includes(emp)){
                this.newlist.push(emp);
                this.filterlist=this.newlist;
              }
            }
            else{
             
              this.newlist=[];
              this.filterlist=[];
            }
          })
          this.employeelistservice.alphabet.subscribe(alpha=>{
            if(emp.FirstName.startsWith(alpha.toLocaleLowerCase())){
              if(!this.newlist.includes(emp)){
                this.newlist.push(emp);
                this.filterlist=this.newlist;
              }
            } 
            else{
              this.newlist=[];
              this.filterlist=[];
            }        
          })
        }
      }
      if(res=='LastName'){
        for(let emp of this.allemployees){
          this.employeelistservice.searchText.subscribe(text=>{
            if(text==''){
              this.filterlist=this.allemployees
            }
            if(emp.LastName.toLocaleLowerCase().includes(text.toLocaleLowerCase())){
              if(!this.newlist.includes(emp)){
                this.newlist.push(emp);
                this.filterlist=this.newlist;
              }
            }
            else{
             
              this.newlist=[];
              this.filterlist=[];
            }
          })
          this.employeelistservice.alphabet.subscribe(alpha=>{
            if(emp.LastName.toLocaleLowerCase().startsWith(alpha.toLocaleLowerCase())){
              if(!this.newlist.includes(emp)){
                this.newlist.push(emp);
                this.filterlist=this.newlist;
              }
            } 
            else{
              this.newlist=[];
              this.filterlist=[];
            }        
          })
        }
      }
      if(res=='Job'){
        for(let emp of this.allemployees){
          this.employeelistservice.searchText.subscribe(text=>{
            if(text==''){
              this.filterlist=this.allemployees
            }
            if(emp.Job.toLocaleLowerCase().includes(text.toLocaleLowerCase())){
              if(!this.newlist.includes(emp)){
                this.newlist.push(emp);
                this.filterlist=this.newlist;
              }
            }
            else{
             
              this.newlist=[];
              this.filterlist=[];
            }
          })
          this.employeelistservice.alphabet.subscribe(alpha=>{
            if(emp.Job.toLocaleLowerCase().startsWith(alpha.toLocaleLowerCase())){
              if(!this.newlist.includes(emp)){
                this.newlist.push(emp);
                this.filterlist=this.newlist;
              }
            } 
            else{
              this.newlist=[];
              this.filterlist=[];
            }        
          })
        }
      }
      if(res=='Office'){
        for(let emp of this.allemployees){
          this.employeelistservice.searchText.subscribe(text=>{
            if(text==''){
              this.filterlist=this.allemployees
            }
            if(emp.office.toLocaleLowerCase().includes(text.toLocaleLowerCase())){
              if(!this.newlist.includes(emp)){
                this.newlist.push(emp);
                this.filterlist=this.newlist;
              }
            }
            else{
            
              this.newlist=[];
              this.filterlist=[];
            }
          })
          this.employeelistservice.alphabet.subscribe(alpha=>{
            if(emp.office.toLocaleLowerCase().startsWith(alpha.toLocaleLowerCase())){
              if(!this.newlist.includes(emp)){
                this.newlist.push(emp);
                this.filterlist=this.newlist;
              }
            } 
            else{
              this.newlist=[];
              this.filterlist=[];
            }        
          })
        }
      }
      if(res=='Department'){
        for(let emp of this.allemployees){
          this.employeelistservice.searchText.subscribe(text=>{
            if(text==''){
              this.filterlist=this.allemployees
            }
            if(emp.Department.toLocaleLowerCase().includes(text.toLocaleLowerCase())){
              if(!this.newlist.includes(emp)){
                this.newlist.push(emp);
                this.filterlist=this.newlist;
              }
            }
            else{
            
              this.newlist=[];
              this.filterlist=[];
            }
          })
          this.employeelistservice.alphabet.subscribe(alpha=>{
            if(emp.Department.toLocaleLowerCase().startsWith(alpha.toLocaleLowerCase())){
              if(!this.newlist.includes(emp)){
                this.newlist.push(emp);
                this.filterlist=this.newlist;
              }
            } 
            else{
              this.newlist=[];
              this.filterlist=[];
            }        
          })
        }
      }
    })
  }

  openUpdateForm(){
    
  }
 getDetails(employee:Employee){
  
  this.dialog.open(EmployeeDetailsComponent)
  this.employeelistservice.employeeDetails(employee)
  
  }
}