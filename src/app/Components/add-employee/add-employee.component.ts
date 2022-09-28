import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeeListService } from 'src/app/Service/employee-list.service';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; }
  reactiveform:FormGroup
  FirstName:string;
  LastName:string;
  PreferredName:string;
  Job:string;
  Office:string;
  Email:string;
  Department:string;
  PhoneNumber:Number;
  SkypeId:string;
  employee:Employee;
  jobsList=['SharePoint Practice Head','.Net Development Lead','Recruiting Expert','BI Developer','Business Analyst',
  'Operations Manger','Product Manger','Software Engineer']
  officeList=['Seatle','India'];
  departmentList=['IT Department','Human Resources','MD Department','Sales']
  constructor(private employeelistservice:EmployeeListService,private router:Router,private dialog:MatDialog ) { }
  ngOnInit(): void {
    
    this.reactiveform = new FormGroup({

      firstname:new FormControl(null),
      lastname:new FormControl(null),
      preferredname:new FormControl(null),
      job:new FormControl(null),
      office:new FormControl(null),
      department:new FormControl(null),
      phonenumber:new FormControl(null),
      skypeid:new FormControl(null),
      email:new FormControl(null),
     
    })
  }
  addEmployee(){
   
  
    this.employee=new Employee(this.FirstName,this.LastName,this.PreferredName,this.Job,this.Office,this.Email,this.Department,this.PhoneNumber,this.SkypeId)
    this.employeelistservice.addEmployee(this.employee);
    this.router.navigate([''])
     this.closeDialog() 
  }
  getDepartment(department:string){
    this.Department=department;
  }
  getJob(job:string){
    this.Job=job;
  }
  getOffice(office:string){
    console.log(office)
    this.Office=office;
  }
  // autoPopulated(PreferredName:string){
  //   this.PreferredName=PreferredName
  // }
  autoPopulate(p:string){
    this.PreferredName=p;
    console.log(this.PreferredName)
  }
  closeDialog() {
    this.dialog.closeAll()
  }
}


