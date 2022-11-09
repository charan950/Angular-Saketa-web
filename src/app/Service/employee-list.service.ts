import { Injectable } from '@angular/core';
import { Employee } from '../Model/employee';
import { from, Observable, Subject } from 'rxjs';
import { JobsList } from '../Model/jobs-list';
import { EmployeeDepartment } from '../Model/employee-department';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDetailsComponent } from '../Components/employee-details/employee-details.component';
import { EmployeeCount } from '../Model/employee-count';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class EmployeeListService {
  
  employeeCount = new Subject<EmployeeCount>();
  searchInput = new Subject<string>();
  employeeDetail: Employee;
  filterbyDropDown: string;
  alphabet = new Subject<string>();
  allEmployees: Employee[] = [];
  filterList: Employee[] = [];
  jobList: JobsList[] = [];
  departmentList: EmployeeDepartment[] = [];
  storedEmployeeList = new Subject<Employee[]>();
  storedJobList = new Subject<JobsList[]>();
  openAddForm: boolean;
  openUpdateForm: boolean;

  constructor(private dialog: MatDialog,private http:HttpClient) {}

  populateCount(employee: Employee[]) {
    let itCount = 0,
      hrCount = 0,
      mdCount = 0,
      salesCount = 0,
      seatleCount = 0,
      indiaCount = 0,
      sharepointCount = 0,
      netCount = 0,
      biCount = 0,
      baCount = 0,
      reCount = 0,
      omCount = 0,
      pmCount = 0,
      seCount = 0;

    this.allEmployees = employee;

    for (let emp of this.allEmployees) {
      if (emp.Department === 'IT Department') {
        itCount++;
      }
      if (emp.Department == 'Human Resources') {
        hrCount++;
      }
      if (emp.Department == 'MD Department') {
        mdCount++;
        
      }
      if (emp.Department == 'Sales') {
        salesCount++
      }
      if (emp.Job == 'SharePoint Practice Head') {
       sharepointCount++;
      }

      if (emp.office == 'Seatle') {
       seatleCount++
      }
      if (emp.office == 'India') {
       indiaCount++;
      }
      if (emp.Job == '.Net Development Lead') {
        netCount++
      }
      if (emp.Job == 'Recruiting Expert') {
        reCount++;
      }
      if (emp.Job == 'BI Developer') {
        biCount++;
      }
      if (emp.Job == 'Business Analyst') {
        baCount++;
      }
      if (emp.Job == 'Operations Manger') {
        omCount++;
      }
      if (emp.Job == 'Software Engineer') {
        seCount++;
      }
      if (emp.Job == 'Product Manger') {
        pmCount++
      }
    }
    const emoloyecount = new EmployeeCount(
      itCount,
      hrCount,
      mdCount,
      salesCount,
      seatleCount,
      indiaCount,
      sharepointCount,
      netCount,
      biCount,
      baCount,
      reCount,
      omCount,
      pmCount,
      seCount
    );
    this.employeeCount.next(emoloyecount);
   
  }

  addEmployee(employee: Employee) {
    
    this.allEmployees = JSON.parse(localStorage.getItem('employeelist'));

    if (this.allEmployees == null) {
      this.allEmployees = [employee];
      this.jobList = [
        { employeeId: employee.employeeId, jobTitle: employee.Job },
      ];
      this.departmentList = [
        {
          employeeId: employee.employeeId,
          employeeDepartment: employee.Department,
        },
      ];
    } else {
      this.allEmployees.push(employee);
      this.jobList.push({
        employeeId: employee.employeeId,
        jobTitle: employee.Job,
      });
      this.departmentList.push({
        employeeId: employee.employeeId,
        employeeDepartment: employee.Department,
      });
    }
    localStorage.setItem('employeelist', JSON.stringify(this.allEmployees));
    localStorage.setItem('employeesJobTable', JSON.stringify(this.jobList));
    localStorage.setItem(
      'employeesDepartmentTable',
      JSON.stringify(this.departmentList)
    );
    this.storedEmployeeList.next(
      JSON.parse(localStorage.getItem('employeelist'))
    );
    this.storedJobList.next(
      JSON.parse(localStorage.getItem('employeesJobTable'))
    );
    this.populateCount(this.allEmployees);
    this.storedEmployeeList.subscribe((res) => {
      this.filterList = res;
    });
  }

  updateEmployeeDetails(employee: Employee) {
    this.employeeDetail = employee;
    
  }

  setSearchText(value: string) {
    this.searchInput.next(value);
  }

  setFilteredBy(value: string) {
    this.filterbyDropDown = value;
  }

  setAlpha(value: string) {
    this.alphabet.next(value);
  }

  deleteEmployee(id: number) {
    this.allEmployees = JSON.parse(localStorage.getItem('employeelist'));
    let newlist: Employee[] = [];
    for (let emp of this.allEmployees) {
      if (emp.employeeId !== id) {
        newlist.push(emp);
      }
    }
    localStorage.setItem('employeelist', JSON.stringify(newlist));
    this.storedEmployeeList.next(newlist);
  }

  detailsPopUp(employee: Employee) {
    this.updateEmployeeDetails(employee);
    this.dialog.open(EmployeeDetailsComponent, {
      width: '600px',
      height: '700px',
      data: {},
    });
  }
}
