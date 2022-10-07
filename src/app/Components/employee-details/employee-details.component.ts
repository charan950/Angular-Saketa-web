import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { empty } from 'rxjs';
import { Employee } from 'src/app/Model/employee';
import { EmployeeListService } from 'src/app/Service/employee-list.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobsList } from 'src/app/Model/jobs-list';
import { EmployeeDepartment } from 'src/app/Model/employee-department';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
 
  employee: Employee;
  employeeId: number;
  firstname: string;
  lastname: string;
  preferredname: string;
  job: string;
  office: string;
  department: string;
  phonenumber: Number;
  email: string;
  skypeid: string;
 
 

  jobsListArray = [
    'SharePoint Practice Head',
    '.Net Development Lead',
    'Recruiting Expert',
    'BI Developer',
    'Business Analyst',
    'Operations Manger',
    'Product Manger',
    'Software Engineer',
  ];
  officeList = ['Seatle', 'India'];
  departmentListArray = [
    'IT Department',
    'Human Resources',
    'MD Department',
    'Sales',
  ];

  constructor(
    private route: Router,
    private employeelistservice: EmployeeListService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.updatedetails();
  }
  updatedetails() {
    this.employee = this.employeelistservice.employeeDetail;
   
    this.employeeId = this.employee.employeeId;
    this.firstname = this.employee.FirstName;
    this.lastname = this.employee.LastName;
    this.job = this.employee.Job;
    this.email = this.employee.Email;
    this.skypeid = this.employee.SkypeId;
    this.department = this.employee.Department;
    this.phonenumber = this.employee.PhoneNumber;
    this.office = this.employee.office;
    this.preferredname = this.employee.PreferredName;
  }

  onUpdateClick() {
    this.employee.FirstName = this.firstname;
    this.employee.LastName = this.lastname;
    this.employee.PreferredName = this.preferredname;
    this.employee.Job = this.job;
    this.employee.office = this.office;
    this.employee.Department = this.department;
    this.employee.SkypeId = this.skypeid;
    this.employee.PhoneNumber = this.phonenumber;
    this.employee.Email = this.email;
    this.closeDialog();
    localStorage.setItem(
      'employeelist',
      JSON.stringify(this.employeelistservice.allEmployees)
    );
    this.employeelistservice.populateCount(
      this.employeelistservice.allEmployees
    );
    this.route.navigate(['']);
  }

  getJob(job: string) {
    this.job = job;
  }

  getDepartment(department: string) {
    this.department = department;
  }

  getOffice(office: string) {
    this.office = office;
  }

  closeDialog() {
    this.dialog.closeAll();
  }
}
