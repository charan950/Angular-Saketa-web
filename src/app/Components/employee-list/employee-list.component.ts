import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/Model/employee';
import { EmployeeListService } from 'src/app/Service/employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  stroredListSubscription:Subscription;
  searchInputSubscription:Subscription;
  alphabet: string;
  newlist: Employee[] = [];
  filterBy: string;
  searchValue: string;
  filterlist: Employee[] = [];
  filteredEmployees: Employee[];
  
  constructor(
    private employeelistservice: EmployeeListService,
  ) { }

  ngOnInit(): void {
    this.filterlist = JSON.parse(localStorage.getItem('employeelist'))
    this.employeelistservice.populateCount(this.filterlist);
    this.stroredListSubscription=this.employeelistservice.storedEmployeeList.subscribe((res) => {
      this.filterlist = res;
      this.filteredEmployees = res;
      this.employeelistservice.populateCount(this.filterlist);
    });
    this.filteredEmployees = this.filterlist;
    this.searchInputSubscription=this.employeelistservice.searchInput.subscribe(text => {
        this.filteredEmployees = [];
        let filteby='PreferredName';
        if(this.employeelistservice.filterbyDropDown==undefined){
          filteby='PreferredName';
        }
        else{
          filteby = this.employeelistservice.filterbyDropDown;
        }
        for (let emp of this.filterlist) {
          if (text == '') {
            this.filterlist;
          }
          if (emp[filteby].toLocaleLowerCase().includes(text.toLocaleLowerCase())) {
            this.filteredEmployees.push(emp);
          } 
        };
      });
      this.employeelistservice.alphabet.subscribe(alpha => {
        this.filteredEmployees = [];
        let filteby='PreferredName';
        if(this.employeelistservice.filterbyDropDown==undefined){
          filteby='PreferredName';
        }
        else{
          filteby = this.employeelistservice.filterbyDropDown;
        }
        for(let emp of this.filterlist){
          if (emp[filteby].toLocaleLowerCase().startsWith(alpha.toLocaleLowerCase())) {
            this.filteredEmployees.push(emp);
          }
        }
      });
    }
      
  details(employee: Employee){
    this.employeelistservice.updateEmployeeDetails(employee);
    this.employeelistservice.detailsPopUp(employee);
  }

  ngOnDestroy(){
    this.stroredListSubscription.unsubscribe();
    this.searchInputSubscription.unsubscribe();
  }
}

