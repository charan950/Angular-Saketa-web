import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/Model/employee';
import { EmployeeListService } from 'src/app/Service/employee-list.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscriber, Subscription } from 'rxjs';
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
  imageSubscription: Subscription;
  employeeProfile: string = '';
  firstName: string = '';
  lastName: string = '';
  preferredName: string = '';
  job: string;
  department: string;
  office: string;
  email: string;
  phoneNumber: Number;
  skypeId: string;
  employeeId: number = 1;
  employee: Employee;
  addform: FormGroup;
  onSubmit = false;
  openAddform: boolean;
  addButton: boolean = true;
  updateButton: boolean = false;
  deleteButton: boolean = false;
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
    private dialog: MatDialog
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
    if (this.employeelistservice.openUpdateForm) {
      this.updatedetails();
      this.addButton = false;
      this.updateButton = true;
      this.deleteButton = true;
    }
  }

  addEmployee() {
    if (this.employeelistservice.openAddForm) {
      if (this.employeelistservice.allEmployees === null) {
        this.employeeId = 1;
      } else {
        this.employeeId = this.employeelistservice.allEmployees.length + 1;
      }
      this.onSubmit = true;
      if (this.addform.valid) {
        alert('Employee Details Added succesfully!!!');

        this.employee = new Employee(
          this.employeeId,
          this.employeeProfile,
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
        this.closeDialog();
      }
    }
    if (this.employeelistservice.openUpdateForm) {
      if (this.addform.valid) {
        (this.employee.FirstName = this.addform.controls['firstname'].value),
          (this.employee.LastName = this.addform.controls['lastname'].value),
          (this.employee.PreferredName =
            this.addform.controls['preferredname'].value),
          (this.employee.employeeProfile = this.employeeProfile);
        this.employeeProfile = this.employee.employeeProfile;
        (this.employee.Job = this.addform.controls['job'].value),
          (this.employee.office = this.addform.controls['office'].value),
          (this.employee.Department =
            this.addform.controls['department'].value),
          (this.employee.SkypeId = this.addform.controls['skypeid'].value);
        (this.employee.PhoneNumber =
          this.addform.controls['phonenumber'].value),
          (this.employee.Email = this.addform.controls['email'].value),
          this.employeelistservice.updateEmployeeDetails(this.employee);
        this.closeDialog();
        localStorage.setItem(
          'employeelist',
          JSON.stringify(this.employeelistservice.allEmployees)
        );
        this.employeelistservice.populateCount(
          this.employeelistservice.allEmployees
        );
        alert('Employee Details Updated succesfully!!!');
      }
      this.employeelistservice.detailsPopUp(this.employee);
    }
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  autoPopulated() {
    this.preferredName = `${this.firstName}  ${this.lastName}`;
  }

  updatedetails() {
    this.employee = this.employeelistservice.employeeDetail;
    this.employeeProfile = this.employee.employeeProfile;
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

  onChanges($event: Event) {
    const file = ($event.target as HTMLInputElement).files[0];
    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    let image = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    image.subscribe((string) => {
      this.employeeProfile = string;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
  ngOnDestroy() {}
}
