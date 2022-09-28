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
 
  itcount=new Subject<number>()
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
  omcount=new Subject<number>();
  secount=new Subject<number>();
  pmcount=new Subject<number>()
  employeeDetailsArray:Employee[]=[]
  searchText=new Subject<string>();
  employeeDetail:Employee;
  filterby=new Subject<string>();
  alphabet=new Subject<string>();
  Allemployees:Employee[]=[]
 

  constructor(){
     
  }
 
 
  
  getEmployeeList() {
    let itcount=0,hrcount=0,mdcount=0, salescount=0, seatlecount=0, indiacount=0, sharepointcount=0, 
    netcount=0, bicount=0, bacount=0, recount=0,omcount=0,pmcount=0,secount=0;
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
    this.omcount.next(omcount);
    this.pmcount.next(pmcount);
    this.secount.next(secount);
    for(let emp of this.Allemployees){
      
      if(emp.Department==='IT Department'){
        this.itcount.next(++itcount);
       
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
      if(emp.Job=='Operations Manger'){
        this.omcount.next(++omcount)
      }
      if(emp.Job=='Software Engineer'){
        this.secount.next(++secount)
      }
      if(emp.Job=='Product Manger'){
        this.pmcount.next(++pmcount)
      }
    }
    return this.Allemployees;
  }
  addEmployee(employee:Employee){
  
    this.Allemployees.push(employee)
    this.getEmployeeList();
  }
 
  employeeDetails(employee:Employee){
  this.employeeDetail=employee;
 
  }
  setSearchText(value:string){
  
    this.searchText.next(value);

  }
  
  setFilteredBy(value:string){
    this.filterby.next(value);
   
  }
  setAlpha(value:any){
  
    this.alphabet.next(value);
    
  }
 
}
  
  

