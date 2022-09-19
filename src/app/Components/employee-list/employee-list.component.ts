import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeListService } from 'src/app/Service/employee-list.service';
import { NavigationExtras } from '@angular/router'; 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employelistArray:any=[];
 
  constructor(private employeelist:EmployeeListService,private router:Router) { }

  ngOnInit(): void {
   
    
  }
  get(){
    this.employelistArray=this.employeelist.getDetails();
    console.log(this.employelistArray);
    let array=JSON.stringify(this.employelistArray);
    this.router.navigate(['/employeedetails',array]);
  }
}
