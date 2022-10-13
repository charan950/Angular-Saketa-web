import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable, Subject } from 'rxjs';
import { Employee } from '../Model/employee';
import { from, Subject, multicast, of, BehaviorSubject, never, Observable, retry } from 'rxjs';
import { JobsList } from '../Model/jobs-list';
import { EmployeeDepartment } from '../Model/employee-department';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
 
  itCount=new Subject<number>()
  hrCount=new Subject<number>()
  mdCount=new Subject<number>()
  salesCount=new Subject<number>()
  seatleCount=new Subject<number>()
  indiaCount=new Subject<number>()
  sharepointCount=new Subject<number>()
  netCount=new Subject<number>()
  leadCount=new Subject<number>()
  biCount=new Subject<number>()
  baCount=new Subject<number>()
  reCount=new Subject<number>()
  omCount=new Subject<number>();
  seCount=new Subject<number>();
  pmCount=new Subject<number>()
  searchText=new Subject<string>();
  employeeDetail:Employee;
  filterby:string;
  alphabet=new Subject<string>();
  allEmployees:Employee[]=[]
  filterList:Employee[]=[];
  jobList:JobsList[]=[]
  departmentList:EmployeeDepartment[]=[];
  rawStoredEmployeeList=new Subject<Employee[]>();
  rawStoredJobList=new Subject<JobsList[]>();
  openAddForm:boolean;
  openUpdateForm:boolean;
  constructor(private router:Router){}

  populateCount(employee:Employee[]) {
   
    let itCount=0,hrCount=0,mdCount=0, salesCount=0, seatleCount=0, indiaCount=0, sharepointCount=0, 
    netCount=0, biCount=0, baCount=0, reCount=0,omCount=0,pmCount=0,seCount=0;
    this.itCount.next(itCount);
    this.hrCount.next(hrCount);
    this.mdCount.next(mdCount);
    this.salesCount.next(salesCount);
    this.seatleCount.next(indiaCount);
    this.sharepointCount.next(sharepointCount);
    this.netCount.next(netCount);
    this.biCount.next(biCount);
    this.baCount.next(baCount);
    this.reCount.next(reCount);
    this.omCount.next(omCount);
    this.pmCount.next(pmCount);
    this.seCount.next(seCount);
    this.allEmployees=employee
    for(let emp of this.allEmployees){
      
      if(emp.Department==='IT Department'){
        this.itCount.next(++itCount);
       
      }
      if(emp.Department=='Human Resources'){
        this.hrCount.next(++hrCount);
      }
      if(emp.Department=='MD Department'){
        this.mdCount.next(++mdCount);
      }
      if(emp.Department=='Sales'){
        this.salesCount.next(++salesCount);
      }
      if(emp.Job=='SharePoint Practice Head'){
        this.sharepointCount.next(++sharepointCount);
      }
     
      if(emp.office=='Seatle'){
      
        this.seatleCount.next(++seatleCount);
      }
      if(emp.office=='India'){
        this.indiaCount.next(++indiaCount);
      }
      if(emp.Job=='.Net Development Lead'){
        this.netCount.next(++netCount);
      }
      if(emp.Job=='Recruiting Expert'){
        this.reCount.next(++reCount);
      }
      if(emp.Job=='BI Developer'){
        this.biCount.next(++biCount);
      }
      if(emp.Job=='Business Analyst'){
        this.baCount.next(++baCount);
      }
      if(emp.Job=='Operations Manger'){
        this.omCount.next(++omCount)
      }
      if(emp.Job=='Software Engineer'){
        this.seCount.next(++seCount)
      }
      if(emp.Job=='Product Manger'){
        this.pmCount.next(++pmCount)
      }
    }
  
  
  }
 
  addEmployee(employee:Employee){
  
    this.allEmployees=JSON.parse(localStorage.getItem('employeelist'))
    this.rawStoredJobList.subscribe(res=>{
      this.jobList=res;
    })
    if(this.allEmployees== null){
      this.allEmployees=[employee]
      this.jobList=[{employeeId:employee.employeeId,jobTitle:employee.Job}]
      this.departmentList=[{employeeId:employee.employeeId,employeeDepartment:employee.Department}]
     
    }else{
     
      this.allEmployees.push(employee)
 
      this.jobList.push({employeeId:employee.employeeId,jobTitle:employee.Job})
      this.departmentList.push({employeeId:employee.employeeId,employeeDepartment:employee.Department})
    }
    
      localStorage.setItem('employeelist',JSON.stringify(this.allEmployees))
      localStorage.setItem('employeesJobTable',JSON.stringify(this.jobList))
      localStorage.setItem('employeesDepartmentTable',JSON.stringify(this.departmentList))
      this.rawStoredEmployeeList.next(JSON.parse(localStorage.getItem('employeelist')))
      this.rawStoredJobList.next(JSON.parse(localStorage.getItem('employeesJobTable')))
      this.populateCount(this.allEmployees);
      this.rawStoredEmployeeList.subscribe((res) => {
       this.filterList = res;
     });
   }
  

  updateEmployeeDetails(employee:Employee){
    
  this.employeeDetail=employee
  
  }
  setSearchText(value:string){
  
    this.searchText.next(value);
  
  }
  
  setFilteredBy(value:string){
    this.filterby=value;
    console.log(this.filterby)
  }
  setAlpha(value:any){
  
    this.alphabet.next(value);
    console.log(value)
  }

  deleteEmployee(id:number){
    console.log(id)
    this.allEmployees=JSON.parse(localStorage.getItem('employeelist'))
    let newlist:Employee[]=[];
    for(let emp of this.allEmployees){
     if(emp.employeeId!==id){
      newlist.push(emp)
     }
   }
   localStorage.setItem('employeelist',JSON.stringify(newlist))
   
    this.rawStoredEmployeeList.next(newlist)  
  }
  // openAddform(isTrue:boolean){
  //   this.openAddForm=true
   
  // }
  // openUpdateform(isTru:boolean){
  //   this.openUpdateForm=true
   
  // }

}
  
  

