import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Employee } from 'src/app/Model/employee';
import { EmployeeListService } from 'src/app/Service/employee-list.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  employee=new Subject<Employee>()
  list:Employee;
  employeeProfile:string;
  firstName:string;
  lastName:string;
  preferredName:string;
  job:string;
  department:string;
  office:string;
  email:string;
  phoneNumber:Number;
  skypeId:string;
  updateForm: FormGroup;
  submitted = false;
  rawStoredEmployeeList: string;
  
 
  constructor(
    private employeelistservice: EmployeeListService,
    private router: Router,
    private dialog: MatDialog,
    private formbulider: FormBuilder
  ) {}
  ngOnInit(): void {
    console.log(this.employeelistservice.employeeDetail)
    this.list=this.employeelistservice.employeeDetail
    
    this.employee.next(this.employeelistservice.employeeDetail);

    this.employee.subscribe(employee=>{
     this.list=employee
     console.log(this.employeelistservice.employeeDetail)
    })
    console.log(this.employeelistservice.employeeDetail)
    this.employeeProfile=this.list.employeeProfile
    this.firstName=this.list.FirstName;
      this.lastName=this.list.LastName;
      this.preferredName=this.list.PreferredName;
      this.email=this.list.Email;
      this.phoneNumber=this.list.PhoneNumber;
      this.office=this.list.office;
      this.department=this.list.Department;
      this.skypeId=this.list.SkypeId;
      this.job=this.list.Job;
  console.log(this.firstName)
  }
  //   this.updateForm = new FormGroup({
  //     firstname: new FormControl(null, Validators.required),
  //     lastname: new FormControl(null, Validators.required),
  //     preferredname: new FormControl(null, Validators.required),
     
  //     email: new FormControl(null, [
  //       Validators.required,
  //       Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
  //     ]),
     
  //     phonenumber: new FormControl(null, [
  //       Validators.required,
  //       Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
  //     ]),
  //     skypeid: new FormControl(null, Validators.required),
  //   });
   
  //   this.updatedetails()
  // }
  // updatedetails() {

  //       this.employee = this.employeelistservice.employeeDetail;
  //       this.employeeId = this.employee.employeeId;
  //       this.firstName = this.employee.FirstName;
  //       this.lastName = this.employee.LastName;
  //       this.job = this.employee.Job;
  //       this.email = this.employee.Email;
  //       this.skypeId = this.employee.SkypeId;
  //       this.department = this.employee.Department;
  //       this.phoneNumber = this.employee.PhoneNumber;
  //       this.office = this.employee.office;
  //       this.preferredName = this.employee.PreferredName;
    
  //     }
  // onUpdateClick() {

  //   if (this.updateForm.valid) {

  //     this.employee.FirstName = this.updateForm.controls['firstname'].value,
  //         this.employee.LastName =  this.updateForm.controls['lastname'].value,
  //         this.employee.PreferredName =  this.updateForm.controls['preferredname'].value,
  //         this.employee.Job =  this.job
  //         this.employee.office = this.office
  //         this.employee.Department =  this.department
  //         console.log(this.employee.Department)
  //         this.employee.SkypeId =  this.updateForm.controls['skypeid'].value
  //         this.employee.PhoneNumber =  this.updateForm.controls['phonenumber'].value,
  //         this.employee.Email =  this.updateForm.controls['email'].value,
  //         this.closeDialog();
  //         localStorage.setItem(
  //           'employeelist',
  //           JSON.stringify(this.employeelistservice.allEmployees)
  //         );
  //         this.employeelistservice.populateCount(
  //           this.employeelistservice.allEmployees
  //         );
         
  //         }
  // }

  // closeDialog() {

   
  //   this.dialog.closeAll();

    
  // }
  // getJob(job: string) {
  //   this.job = job;
  // }

  // getDepartment(department: string) {
  //   this.department = department;
  // }

  // getOffice(office: string) {
  //   this.office = office;
  // }
  // autoPopulated(){
  //   this.preferredName= this.updateForm.controls['firstname'].value+' '+this.updateForm.controls['lastname'].value,
  //   console.log(this.preferredName)
  // }
  // deleteEmployee(){
  //   let id=this.employeelistservice.employeeDetail.employeeId;
  //   console.log(this.employeelistservice.employeeDetail)
  //   this.employeelistservice.deleteEmployee(id)
  //   console.log(this.employeelistservice.deleteEmployee(id))
  // }
  editDetails(){
  
      this.dialog.open(AddEmployeeComponent, {
        width: '600px',
        height: '700px',
        data: {}
      })
      this.employeelistservice.openAddForm=false
      this.employeelistservice.openUpdateForm=true
     
     
    }
    closeDialog() {
  
      this.dialog.closeAll()
       
     }
  
}

