import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  [x: string]: any;
  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; }
  
 employeeId:number=1;
  employee:Employee;
 
  addform: FormGroup;
  Job:JobsList;
  department:EmployeeDepartment
  submitted = false;
  rawStoredEmployeeList: string;
  storedEmployeeList:Employee[]=[]
  jobsList=['SharePoint Practice Head','.Net Development Lead','Recruiting Expert','BI Developer','Business Analyst',
  'Operations Manger','Product Manger','Software Engineer']
  officeList=['Seatle','India'];
  departmentList=['IT Department','Human Resources','MD Department','Sales']
  constructor(private employeelistservice:EmployeeListService,private router:Router,private dialog:MatDialog,private formbulider:FormBuilder ) { }
  ngOnInit(): void {
    
    this.addform = new FormGroup({
      firstname : new FormControl(null, Validators.required),
      lastname : new FormControl(null, Validators.required),
      preferredname : new FormControl(null, Validators.required),
      job : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      office : new FormControl(null, Validators.required),
      department : new FormControl(null, Validators.required),
      phonenumber : new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      skypeid : new FormControl(null, Validators.required),

    });
  
  }
       
   addEmployee(){
    this.employeeId=this.employeelistservice.allEmployees.length+1;
    this.submitted = true;
   
    if (this.addform.valid) {
      alert('Employee Details Added succesfully!!!');
    this.employee=new Employee(
      this.employeeId,
    this.addform.controls['firstname'].value,
      this.addform.controls['lastname'].value,
       this.addform.controls['preferredname'].value,
       this.addform.controls['job'].value,
       this.addform.controls['office'].value,
       this.addform.controls['email'].value,
       this.addform.controls['department'].value,
       this.addform.controls['phonenumber'].value,
        this.addform.controls['skypeid'].value)
      //  this.Job=new JobsList(this.employeeId, this.addform.controls['job'].value)
      // localStorage.setItem('employesJobTable',JSON.stringify(this.Job))
      // this.department=new EmployeeDepartment(this.employeeId, this.addform.controls['department'].value)
      // localStorage.setItem('employesDepartmentTable',JSON.stringify(this.department))
      this.employeelistservice.addEmployee(this.employee);
      this.dialog.closeAll()
      this.router.navigate([''])
      
    }
  
  }
  
  closeDialog() {
    if(this.addform.invalid && this.addform.controls.firstname.touched===true){
      this.dialog.closeAll()
    }
   
  }

}


