import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Employee } from 'src/app/Model/employee';
import { EmployeeListService } from 'src/app/Service/employee-list.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Subject } from 'rxjs';
import { coerceStringArray } from '@angular/cdk/coercion';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
// Emp:Employee[]=[]
  alphabet: string;
  newlist: Employee[] = [];
  filterBy: string;
  searchValue: string
  emplist = new Subject<Employee[]>();
  filterlist: Employee[] = []
  filteredEmployees: Employee[]
  
  constructor(
  
    private employeelistservice: EmployeeListService,
   
  ) { }

  ngOnInit(): void {
  
  
    this.filterlist = JSON.parse(localStorage.getItem('employeelist'))
    this.employeelistservice.populateCount(this.filterlist);
    this.employeelistservice.rawStoredEmployeeList.subscribe((res) => {
      this.filterlist = res;
      this.filteredEmployees = res;
      this.employeelistservice.populateCount(this.filterlist);
      
    });
    
    this.filteredEmployees = this.filterlist;
    this.employeelistservice.searchText.subscribe(text => {
        this.filteredEmployees = [];
        let field='PreferredName'
        if(this.employeelistservice.filterby==undefined){
         field='PreferredName'
         
        }
        else{
          field = this.employeelistservice.filterby;
        }
        
        for (let emp of this.filterlist) {
          if (text == '') {
            this.filterlist;
          }
          
          if (emp[field].toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
            this.filteredEmployees.push(emp);
          } 
        };
      });
      this.employeelistservice.alphabet.subscribe(alpha => {
        this.filteredEmployees = [];
        let field='PreferredName'
        if(this.employeelistservice.filterby==undefined){
         field='PreferredName'
         
        }
        else{
          field = this.employeelistservice.filterby;
        }
        for(let emp of this.filterlist){
         
        
          if (emp[field].toLocaleLowerCase().startsWith(alpha.toLocaleLowerCase())) {
           console.log(emp[field].toLocaleLowerCase() +' '+alpha.toLocaleLowerCase())
            this.filteredEmployees.push(emp);
          }
        }
      });
    }
      
  details(employee: Employee){
    this.employeelistservice.updateEmployeeDetails(employee)
    this.employeelistservice.detailssPopUp(employee)
   
  }



}

