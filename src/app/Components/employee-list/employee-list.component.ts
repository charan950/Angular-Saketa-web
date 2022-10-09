import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Employee } from 'src/app/Model/employee';
import { EmployeeListService } from 'src/app/Service/employee-list.service';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  filterlist: Employee[] = [];
  alphabet: string;
  newlist: Employee[] = [];
  constructor(
    private employeelistservice: EmployeeListService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
   
    this.employeelistservice.rawStoredEmployeeList.subscribe((res) => {
      this.filterlist = res;
      this.employeelistservice.filterby.subscribe((res) => {
        if (res == 'preferredname') {
          console.log('pnmae');
          for (let emp of this.filterlist) {
            this.employeelistservice.searchText.subscribe((text) => {
              if (text == '') {
                console.log('emt');
                this.filterlist;
              }
              if (emp.PreferredName.includes(text)) {
                console.log('emst');
                if (!this.newlist.includes(emp)) {
                  this.newlist.push(emp);
                  this.filterlist = this.newlist;
                }
              } else {
                this.newlist = [];
                this.filterlist = [];
              }
            });
            this.employeelistservice.alphabet.subscribe((alpha) => {
              if (emp.PreferredName.startsWith(alpha.toLocaleLowerCase())) {
                if (!this.newlist.includes(emp)) {
                  this.newlist.push(emp);
                  this.filterlist = this.newlist;
                }
              } else {
                this.newlist = [];
                this.filterlist = [];
              }
            });
          }
        } else if (res == 'Firstname') {
          for (let emp of this.filterlist) {
            this.employeelistservice.searchText.subscribe((text) => {
              if (text == '') {
                this.filterlist;
              }
              if (emp.FirstName.includes(text)) {
                console.log('fnames');
                if (!this.newlist.includes(emp)) {
                  this.newlist.push(emp);
                  this.filterlist = this.newlist;
                }
              } else {
                this.newlist = [];
                this.filterlist = [];
              }
            });
            this.employeelistservice.alphabet.subscribe((alpha) => {
              if (emp.FirstName.startsWith(alpha.toLocaleLowerCase())) {
                if (!this.newlist.includes(emp)) {
                  this.newlist.push(emp);
                  this.filterlist = this.newlist;
                }
              } else {
                this.newlist = [];
                this.filterlist = [];
              }
            });
          }
        } else if (res == 'LastName') {
          for (let emp of this.filterlist) {
            this.employeelistservice.searchText.subscribe((text) => {
              if (text == '') {
                this.filterlist;
              }
              if (
                emp.LastName.toLocaleLowerCase().includes(
                  text.toLocaleLowerCase()
                )
              ) {
                if (!this.newlist.includes(emp)) {
                  this.newlist.push(emp);
                  this.filterlist = this.newlist;
                }
              } else {
                this.newlist = [];
                this.filterlist = [];
              }
            });
            this.employeelistservice.alphabet.subscribe((alpha) => {
              if (
                emp.LastName.toLocaleLowerCase().startsWith(
                  alpha.toLocaleLowerCase()
                )
              ) {
                if (!this.newlist.includes(emp)) {
                  this.newlist.push(emp);
                  this.filterlist = this.newlist;
                }
              } else {
                this.newlist = [];
                this.filterlist = [];
              }
            });
          }
        } else if (res == 'Job') {
          for (let emp of this.filterlist) {
            this.employeelistservice.searchText.subscribe((text) => {
              if (text == '') {
                this.filterlist;
              }
              if (
                emp.Job.toLocaleLowerCase().includes(text.toLocaleLowerCase())
              ) {
                if (!this.newlist.includes(emp)) {
                  this.newlist.push(emp);
                  this.filterlist = this.newlist;
                }
              } else {
                this.newlist = [];
                this.filterlist = [];
              }
            });
            this.employeelistservice.alphabet.subscribe((alpha) => {
              if (
                emp.Job.toLocaleLowerCase().startsWith(
                  alpha.toLocaleLowerCase()
                )
              ) {
                if (!this.newlist.includes(emp)) {
                  this.newlist.push(emp);
                  this.filterlist = this.newlist;
                }
              } else {
                this.newlist = [];
                this.filterlist = [];
              }
            });
          }
        } else if (res == 'Office') {
          for (let emp of this.filterlist) {
            this.employeelistservice.searchText.subscribe((text) => {
              if (text == '') {
                this.filterlist;
              }
              if (
                emp.office
                  .toLocaleLowerCase()
                  .includes(text.toLocaleLowerCase())
              ) {
                if (!this.newlist.includes(emp)) {
                  this.newlist.push(emp);
                  this.filterlist = this.newlist;
                }
              } else {
                this.newlist = [];
                this.filterlist = [];
              }
            });
            this.employeelistservice.alphabet.subscribe((alpha) => {
              if (
                emp.office
                  .toLocaleLowerCase()
                  .startsWith(alpha.toLocaleLowerCase())
              ) {
                if (!this.newlist.includes(emp)) {
                  this.newlist.push(emp);
                  this.filterlist = this.newlist;
                }
              } else {
                this.newlist = [];
                this.filterlist = [];
              }
            });
          }
        } else if (res == 'Department') {
          for (let emp of this.filterlist) {
            this.employeelistservice.searchText.subscribe((text) => {
              if (text == '') {
                this.filterlist;
              }
              if (
                emp.Department.toLocaleLowerCase().includes(
                  text.toLocaleLowerCase()
                )
              ) {
                if (!this.newlist.includes(emp)) {
                  this.newlist.push(emp);
                  this.filterlist = this.newlist;
                }
              } else {
                this.newlist = [];
                this.filterlist = [];
              }
            });
            this.employeelistservice.alphabet.subscribe((alpha) => {
              if (
                emp.Department.toLocaleLowerCase().startsWith(
                  alpha.toLocaleLowerCase()
                )
              ) {
                if (!this.newlist.includes(emp)) {
                  this.newlist.push(emp);
                  this.filterlist = this.newlist;
                }
              } else {
                this.newlist = [];
                this.filterlist = [];
              }
            });
          }
        }
      });
    });
    this.filterlist=JSON.parse(localStorage.getItem('employeelist'));
    this.employeelistservice.populateCount(this.filterlist);
  }

  getDetails(employee:Employee) {
    this.dialog.open(EmployeeDetailsComponent,{
      width: '600px',
      height:'700px',
      data: {}
    })
  this.employeelistservice.updateEmployeeDetails(employee)
  }
}
