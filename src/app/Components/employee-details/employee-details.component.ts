import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Employee } from 'src/app/Model/employee';
import { EmployeeListService } from 'src/app/Service/employee-list.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
 
  [x: string]: any;
  @ViewChild('closebutton') closebutton: {
    nativeElement: { click: () => void };
  };
f:string;
  employeeId: number = 1;
  employee: Employee;
  firstaName:string;
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
  officeListArray = ['Seatle', 'India'];
  departmentListArray = [
    'IT Department',
    'Human Resources',
    'MD Department',
    'Sales',
  ];
  constructor(
    private employeelistservice: EmployeeListService,
    private router: Router,
    private dialog: MatDialog,
    private formbulider: FormBuilder
  ) {}
  ngOnInit(): void {
    this.updateForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      preferredname: new FormControl(null, Validators.required),
     
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
     
      phonenumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      skypeid: new FormControl(null, Validators.required),
    });
    this.f=this.updateForm.controls['firstname'].value
    this.updatedetails()
  }
  updatedetails() {

        this.employee = this.employeelistservice.employeeDetail;
        this.employeeId = this.employee.employeeId;
        this.firstName = this.employee.FirstName;
        this.lastName = this.employee.LastName;
        this.job = this.employee.Job;
        this.email = this.employee.Email;
        this.skypeId = this.employee.SkypeId;
        this.department = this.employee.Department;
        this.phoneNumber = this.employee.PhoneNumber;
        this.office = this.employee.office;
        this.preferredName = this.employee.PreferredName;
    
      }
  onUpdateClick() {

    if(this.employeelistservice.allEmployees===null){
      this.employeeId=1
    }
    else{
      this.employeeId = this.employeelistservice.allEmployees.length + 1;
    }
   
    this.submitted = true;

    if (this.updateForm.valid) {
console.log('sai')
      this.employee.FirstName = this.updateForm.controls['firstname'].value,
          this.employee.LastName =  this.updateForm.controls['lastname'].value,
          this.employee.PreferredName =  this.updateForm.controls['preferredname'].value,
          this.employee.Job =  this.job
          this.employee.office = this.office
          this.employee.Department =  this.department
          console.log(this.employee.Department)
          this.employee.SkypeId =  this.updateForm.controls['skypeid'].value
          this.employee.PhoneNumber =  this.updateForm.controls['phonenumber'].value,
          this.employee.Email =  this.updateForm.controls['email'].value,
          this.closeDialog();
          localStorage.setItem(
            'employeelist',
            JSON.stringify(this.employeelistservice.allEmployees)
          );
          this.employeelistservice.populateCount(
            this.employeelistservice.allEmployees
          );
         
          }
  }

  closeDialog() {

   
    this.dialog.closeAll();

    
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
  autoPopulated(){
    this.preferredName= this.updateForm.controls['firstname'].value+' '+this.updateForm.controls['lastname'].value,
    console.log(this.preferredName)
  }
 
}


//   constructor(
//     private route: Router,
//     private employeelistservice: EmployeeListService,
//     private router: Router,
//     private dialog: MatDialog
//   ) {}

//   ngOnInit(): void {
//     this.updateForm = new FormGroup({
//       firstname: new FormControl(null, Validators.required),
//       lastname: new FormControl(null, Validators.required),
//       preferredname: new FormControl(null, Validators.required),
//       job: new FormControl(null, Validators.required),
//       email: new FormControl(null, [
//         Validators.required,
//         Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
//       ]),
//       office: new FormControl(null, Validators.required),
//       department: new FormControl(null, Validators.required),
//       phonenumber: new FormControl(null, [
//         Validators.required,
//         Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
//       ]),
//       skypeid: new FormControl(null, Validators.required),
//     });
//     this.updatedetails();
//   }
   
//   updatedetails() {

//     // this.employee = this.employeelistservice.employeeDetail;
//     // this.employeeId = this.employee.employeeId;
//     // this.firstName = this.employee.FirstName;
//     // this.lastName = this.employee.LastName;
//     // this.job = this.employee.Job;
//     // this.email = this.employee.Email;
//     // this.skypeid = this.employee.SkypeId;
//     // this.department = this.employee.Department;
//     // this.phonenumber = this.employee.PhoneNumber;
//     // this.office = this.employee.office;
//     // this.preferredName = this.employee.PreferredName;

//   }

//   onUpdateClick() {
//     console.log('sai')
//   this.submitted=true;
//     if(this.updateForm.valid){
//       console.log('i')
//     this.employee.FirstName = this.updateForm.controls['firstname'].value,
//     this.employee.LastName =  this.updateForm.controls['lastname'].value,
//     this.employee.PreferredName =  this.updateForm.controls['preferredname'].value,
//     this.employee.Job =  this.job
//     this.employee.office = this.office
//     this.employee.Department =  this.department
//     this.employee.SkypeId =  this.updateForm.controls['skypeid'].value
//     this.employee.PhoneNumber =  this.updateForm.controls['phonenumber'].value,
//     this.employee.Email =  this.updateForm.controls['email'].value,
//     this.closeDialog();
//     localStorage.setItem(
//       'employeelist',
//       JSON.stringify(this.employeelistservice.allEmployees)
//     );
//     this.employeelistservice.populateCount(
//       this.employeelistservice.allEmployees
//     );
//     this.route.navigate(['']);
//     }
//   }

 
// }
