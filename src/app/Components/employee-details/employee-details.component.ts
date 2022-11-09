import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Employee } from 'src/app/Model/employee';
import { EmployeeListService } from 'src/app/Service/employee-list.service';
import { MatDialog } from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  @ViewChild('closebutton') closebutton: {
    nativeElement: { click: () => void };
  };

  employeeId: number = 1;
  employee = new Subject<Employee>();
  list: Employee;
  employeeProfile: string;
  firstName: string;
  lastName: string;
  preferredName: string;
  job: string;
  department: string;
  office: string;
  email: string;
  phoneNumber: Number;
  skypeId: string;
  updateForm: FormGroup;
  submitted = false;
  rawStoredEmployeeList: string;

  constructor(
    private employeelistservice: EmployeeListService,
    private dialog: MatDialog,
   
  ) {}

  ngOnInit(): void {
    this.list = this.employeelistservice.employeeDetail;
    this.employee.next(this.employeelistservice.employeeDetail);
    this.employee.subscribe((employee) => {
      this.list = employee;
    });
    this.employeeProfile = this.list.employeeProfile;
    this.firstName = this.list.FirstName;
    this.lastName = this.list.LastName;
    this.preferredName = this.list.PreferredName;
    this.email = this.list.Email;
    this.phoneNumber = this.list.PhoneNumber;
    this.office = this.list.office;
    this.department = this.list.Department;
    this.skypeId = this.list.SkypeId;
    this.job = this.list.Job;
  }

  editDetails() {
    this.dialog.open(AddEmployeeComponent, {
      width: '600px',
      height: '700px',
      data: {},
    });
    this.employeelistservice.openAddForm = false;
    this.employeelistservice.openUpdateForm = true;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  deleteEmployee() {
    alert('Employee Details Deleted succesfully!!!');
    let id = this.employeelistservice.employeeDetail.employeeId;
    this.employeelistservice.deleteEmployee(id);
    this.employeelistservice.openUpdateForm = false;
    this.closeDialog();
  }
  
}
