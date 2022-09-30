import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  [x: string]: any;
  @ViewChild('closebutton') closebutton: { nativeElement: { click: () => void; }; }
  
 
  employee:Employee;
  addform: FormGroup;
  submitted = false;
  jobsList=['SharePoint Practice Head','.Net Development Lead','Recruiting Expert','BI Developer','Business Analyst',
  'Operations Manger','Product Manger','Software Engineer']
  officeList=['Seatle','India'];
  departmentList=['IT Department','Human Resources','MD Department','Sales']
  constructor(private employeelistservice:EmployeeListService,private router:Router,private dialog:MatDialog,private formbulider:FormBuilder ) { }
  ngOnInit(): void {
    
    this.addform = new FormGroup({
      'firstname' : new FormControl('name', Validators.required),
      'lastname' : new FormControl('', Validators.required),
      'preferredname' : new FormControl(null, Validators.required),
      'job' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      'office' : new FormControl(null, Validators.required),
      'department' : new FormControl(null, Validators.required),
      'phonenumber' : new FormControl(null, [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      'skypeid' : new FormControl(null, Validators.required),

    });
  
  }
  get registerFormControl() {
    return this.addform.controls;
  }

  onSubmit() {
  
    if (this.addform.valid ||this.submitted) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table((this.addform.controls['firstname'].value));
    }
  }
       
   addEmployee(){
    this.submitted = true;
    console.log(this.addform.controls['firstname'].value)
    console.log(this.addform.controls['email'].value)
    if (this.addform.valid||this.submitted) {
      alert('Employee Details Added succesfully!!!');
    this.employee=new Employee(
    this.addform.controls['firstname'].value,
      this.addform.controls['lastname'].value,
       this.addform.controls['preferredname'].value,
       this.addform.controls['job'].value,
       this.addform.controls['office'].value,
       this.addform.controls['email'].value,
       this.addform.controls['department'].value,
       this.addform.controls['phonenumber'].value,
        this.addform.controls['skypeid'].value)
       
      console.log(this.employee)
      this.employeelistservice.addEmployee(this.employee);
      this.router.navigate([''])
       this.closeDialog();
    }
  
  }
  
  closeDialog() {
    this.dialog.closeAll()
  }
  

  
  // get name() { return this.registerForm.get('firstname'); }
  // addEmployee(){
   
  
  //   this.employee=new Employee(this.FirstName,this.LastName,this.PreferredName,this.Job,this.Office,this.Email,this.Department,this.PhoneNumber,this.SkypeId)
    
  //     this.employeelistservice.addEmployee(this.employee);
  //     this.router.navigate([''])
  //     this.closeDialog() 
    
  
  // }
  // getDepartment(department:string){
  //   this.Department=department;
  // }
  // getJob(job:string){
  //   this.Job=job;
  // }
  // getOffice(office:string){
  //   console.log(office)
  //   this.Office=office;
  // }
  // // autoPopulated(PreferredName:string){
  // //   this.PreferredName=PreferredName
  // // }
  // autoPopulate(p:string){
  //   this.PreferredName=p;
  //   console.log(this.PreferredName)
  // }
  // closeDialog() {
  //   this.dialog.closeAll()
  // }
}


