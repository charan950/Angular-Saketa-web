import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from 'src/app/Model/employee';
import { EmployeeListService } from 'src/app/Service/employee-list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  itCount=0
  hrCount = 0;
  mdCount = 0;
  salesCount = 0;
  seatleCount = 0;
  indiaCount = 0;
  sharepointCount = 0;
  netCount = 0;
  biCount = 0;
  baCount = 0;
  reCount = 0;
  omCount = 0;
  pmCount = 0;
  seCount = 0;
  more: boolean;
  less: boolean;
  filterList: Employee[] = [];

  constructor(private employeelistservice: EmployeeListService) {}

  ngOnInit(): void {
   
    this.more = true;

    this.employeelistservice.itCount.subscribe((res) => {
      this.itCount = res;
    });
    this.employeelistservice.hrCount.subscribe((res) => {
      this.hrCount = res;
    });
    this.employeelistservice.mdCount.subscribe((res) => {
      this.mdCount = res;
    });
    this.employeelistservice.salesCount.subscribe((res) => {
      this.salesCount = res;
    });
    this.employeelistservice.seatleCount.subscribe((res) => {
      this.seatleCount = res;
    });
    this.employeelistservice.indiaCount.subscribe((res) => {
      this.indiaCount = res;
    });
    this.employeelistservice.sharepointCount.subscribe((res) => {
      this.sharepointCount = res;
    });
    this.employeelistservice.netCount.subscribe((res) => {
      this.netCount = res;
    });
    this.employeelistservice.reCount.subscribe((res) => {
      this.reCount = res;
    });
    this.employeelistservice.biCount.subscribe((res) => {
      this.biCount = res;
    });
    this.employeelistservice.baCount.subscribe((res) => {
      this.baCount = res;
    });
    this.employeelistservice.omCount.subscribe((res) => {
      this.omCount = res;
    });
    this.employeelistservice.pmCount.subscribe((res) => {
      this.pmCount = res;
    });
    this.employeelistservice.seCount.subscribe((res) => {
      this.seCount = res;
    });
  }

  viewMore() {
    this.more = false;
    this.less = true;
  }
  viewLess() {
    this.less = false;
    this.more = true;
  }
}
