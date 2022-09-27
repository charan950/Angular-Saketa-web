import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable, Subject } from 'rxjs';
import { Employee } from '../Model/employee';
import { from, Subject, multicast, of, BehaviorSubject, never, Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  // employees = new BehaviorSubject<Array<Employee>>([]);
  // employeearray=new Array<Employee>();
  itcount=new Subject<number>()
//  allemployee=new Subject<any[]>()
  hrcount=new Subject<number>()
  mdcount=new Subject<number>()
  salescount=new Subject<number>()
  seatlecount=new Subject<number>()
  indiacount=new Subject<number>()
  sharepointcount=new Subject<number>()
  netcount=new Subject<number>()
  leadcount=new Subject<number>()
  bicount=new Subject<number>()
  bacount=new Subject<number>()
  recount=new Subject<number>()
  // searhbyArray:any=[];
  employeeDetailsArray:Employee[]=[]
  searchText=new Subject<string>();
employeeDetail:Employee;
 filterby=new Subject<string>();
 alphabet=new Subject<string>();
 filteredlist:Employee[]=[];
 employeeCount=[this.itcount];
// employeelistarray:Employee[]=[];
// employeeList:Subject<Employee[]> = new Subject<Employee[]>();
  constructor(private router:Router,private http: HttpClient) {
    // this.employeelistarray=this.employeelist; 
  }
 
  Allemployees:Employee[]=[
    // {FirstName:"charan",LastName:'Charan',PreferredName:'sai',Job:'SharePoint Practice Head',office:"India",Email:'sai@gmail.com',Department:'IT',PhoneNumber:121345678,SkypeId:'sai'},
    // {FirstName:"che",LastName:'Charan',PreferredName:'sai',Job:'sharepoint',office:"India",Email:'sai@gmail.com',Department:'IT',PhoneNumber:121345678,SkypeId:'sai'},

  ]
  allemployees=of(this.Allemployees)
 
  getEmployeeList() {
    
    let itcount=0;
    let hrcount=0;
    let mdcount=0;
    let salescount=0
    let seatlecount=0
    let indiacount=0
    let sharepointcount=0
    let netcount=0
   
    let bicount=0
    let bacount=0
    let recount=0
    this.itcount.next(itcount);
    this.hrcount.next(hrcount);
    this.mdcount.next(mdcount);
    this.salescount.next(salescount);
    this.seatlecount.next(indiacount);
    this.sharepointcount.next(sharepointcount);
    this.netcount.next(netcount);
    this.bicount.next(bicount);
    this.bacount.next(bacount);
    this.recount.next(recount);
    
    // let emps=localStorage.getItem('employees')
   
    for(let emp of this.Allemployees){
      
      if(emp.Department==='IT Department'){
        this.itcount.next(++itcount);
        console.log(itcount);
      }
      if(emp.Department=='Human Resources'){
        this.hrcount.next(++hrcount);
      }
      if(emp.Department=='MD Department'){
        this.mdcount.next(++mdcount);
      }
      if(emp.Department=='Sales'){
        this.salescount.next(++salescount);
      }
      if(emp.Job=='SharePoint Practice Head'){
        this.sharepointcount.next(++sharepointcount);
      }
     
      if(emp.office=='Seatle'){
        console.log('se')
        this.seatlecount.next(++seatlecount);
      }
      if(emp.office=='India'){
        this.indiacount.next(++indiacount);
      }
      if(emp.Job=='.Net Development Lead'){
        this.netcount.next(++netcount);
      }
      if(emp.Job=='Recruiting Expert'){
        this.recount.next(++recount);
      }
      if(emp.Job=='BI Developer'){
        this.bicount.next(++bicount);
      }
      if(emp.Job=='Business Analyst'){
        this.bacount.next(++bacount);
      }
    }
    return this.Allemployees;
  }
  addEmployee(employee:Employee){
  
    this.Allemployees.push(employee)
    let itcount=0;
    let hrcount=0;
    let mdcount=0;
    let salescount=0
    let seatlecount=0
    let indiacount=0
    let sharepointcount=0
    let netcount=0
   
    let bicount=0
    let bacount=0
    let recount=0
    
    // let emps=localStorage.getItem('employees')
 
    for(let emp of this.Allemployees){
      console.log(emp.Department)
      console.log(emp.office)
      if(emp.Department==='IT Department'){
        this.itcount.next(++itcount);
        console.log(itcount);
      }
      if(emp.Department=='Human Resources'){
        this.hrcount.next(++hrcount);
      }
      if(emp.Department=='MD Department'){
        this.mdcount.next(++mdcount);
      }
      if(emp.Department=='Sales'){
        this.salescount.next(++salescount);
      }
      if(emp.Job=='SharePoint Practice Head'){
        this.sharepointcount.next(++sharepointcount);
      }
     
      if(emp.office=='Seatle'){
        console.log('se')
        this.seatlecount.next(++seatlecount);
      }
      if(emp.office=='India'){
        this.indiacount.next(++indiacount);
      }
      if(emp.Job=='>Net Development Lead'){
        this.netcount.next(++netcount);
      }
      if(emp.Job=='Recruiting Expert'){
        this.recount.next(++recount);
      }
      if(emp.Job=='BI Developer'){
        this.bicount.next(++bicount);
      }
      if(emp.Job=='Business Analyst'){
        this.bacount.next(++bacount);
      }
    }
   
    
  }
  getemployeeDetails(employeeDetails:Employee){
    this.employeeDetailsArray.push(employeeDetails);
  }
  employeeDetails(employee:Employee){
  this.employeeDetail=employee;
 
  }
  setSearchText(value:string){
  
    this.searchText.next(value);
   
  }
  getFilteredList(){
    return this.filteredlist
  }
  
  getSearchText(){
    
    console.log(this.searchText)
    return this.searchText
  }
 
  setFilteredBy(value:string){
    this.filterby.next(value);
   
  }
  setAlpha(value:any){
  
    this.alphabet.next(value);
    
  }
 
}
  
  

