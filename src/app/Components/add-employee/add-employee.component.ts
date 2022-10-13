import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeeListService } from 'src/app/Service/employee-list.service';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { JobsList } from 'src/app/Model/jobs-list';
import { EmployeeDepartment } from 'src/app/Model/employee-department';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  [x: string]: any;
  @ViewChild('closebutton') closebutton: {
    nativeElement: { click: () => void };
  };
 
  firstName:string='';
  lastName:string='';
  preferredName:string='';
  job:string;
  department:string;
  office:string
  email:string;
  phoneNumber:Number;
  skypeId:string;
  employeeId: number = 1;
  employee: Employee;
  addform: FormGroup;
  submitted = false;
  openAddform:boolean;
  addButton:boolean=true
  updateButton:boolean=false
  deleteButton:boolean=false;
  rawStoredEmployeeList: string;
  jobsList = [
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
  departmentList = [
    'IT Department',
    'Human Resources',
    'MD Department',
    'Sales',
  ];
  constructor(
    private employeelistservice: EmployeeListService,
    private router: Router,
    private dialog: MatDialog,
   
  ) {}
  ngOnInit(): void {
    this.addform = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      preferredname: new FormControl(null),
      job: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      office: new FormControl(null, Validators.required),
      department: new FormControl(null, Validators.required),
      phonenumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      skypeid: new FormControl(null),
    });
    if(this.employeelistservice.openUpdateForm){
      this.updatedetails()
      this.addButton=false;
      this.updateButton=true;
      this.deleteButton=true;
    }
    
  }

  addEmployee() {
    
   
    if(this.employeelistservice.openAddForm){
     
      if(this.employeelistservice.allEmployees===null){
        this.employeeId=1
      }
      else{
        this.employeeId = this.employeelistservice.allEmployees.length + 1;
      }
     
      this.submitted = true;

      
  
      if (this.addform.valid) {
        alert('Employee Details Added succesfully!!!');
        this.employee = new Employee(
          this.employeeId,
          this.addform.controls['firstname'].value,
          this.addform.controls['lastname'].value,
          this.addform.controls['preferredname'].value,
          this.addform.controls['job'].value,
          this.addform.controls['office'].value,
          this.addform.controls['email'].value,
          this.addform.controls['department'].value,
          this.addform.controls['phonenumber'].value,
          this.addform.controls['skypeid'].value
        );
        this.employeelistservice.addEmployee(this.employee);
        this.dialog.closeAll();
        this.router.navigate(['']);
      }
    }
    if(this.employeelistservice.openUpdateForm){
     
      if (this.addform.valid) {
       
        this.employee.FirstName = this.addform.controls['firstname'].value,
            this.employee.LastName =  this.addform.controls['lastname'].value,
            this.employee.PreferredName =   this.addform.controls['preferredname'].value,
            this.employee.Job =  this.addform.controls['job'].value,
            this.employee.office = this.addform.controls['office'].value,
            this.employee.Department =  this.addform.controls['department'].value,
         
            this.employee.SkypeId =   this.addform.controls['skypeid'].value
            this.employee.PhoneNumber =  this.addform.controls['phonenumber'].value,
            this.employee.Email =  this.addform.controls['email'].value,
           
            this.closeDialog();
            localStorage.setItem(
              'employeelist',
              JSON.stringify(this.employeelistservice.allEmployees)
            );
            this.employeelistservice.populateCount(
              this.employeelistservice.allEmployees
            );
            alert('Employee Details Added succesfully!!!');
            }
            
        }
    }

  closeDialog() {
   
      this.dialog.closeAll();
    
  }
  autoPopulated(){
   
    this.preferredName=  this.firstName+' '+this.lastName
    console.log(this.preferredName)
  }
  updatedetails() {

    this.employee = this.employeelistservice.employeeDetail;
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

  
  deleteEmployee(){
   
    alert('Employee Details Deleted succesfully!!!');
    let id=this.employeelistservice.employeeDetail.employeeId;
    console.log(id)
    this.employeelistservice.deleteEmployee(id)
    this.closeDialog();
  }
}
