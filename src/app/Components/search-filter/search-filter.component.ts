import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
import { EmployeeListService } from 'src/app/Service/employee-list.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
alphabet:string;
@Input() filteredemployee:Employee[]=[];
searchtext:string;
filteredlist:Employee[];
newlist:Employee[];
filterby:string;
  constructor(private employeelistservice:EmployeeListService,private router:Router) { }

  ngOnInit(): void {
    
    // this. alphabet=this.employeelistservice.getAlpha();
    // this.filterby=this.employeelistservice.getFilteredBy()
    // this.filteredlist=this.employeelistservice.AllEmployees;
    // console.log(this.alphabet)
    // for(let i=0;i<this.filteredlist.length;i++){
    //   console.log(this.filteredlist)
    //   console.log(this.alphabet)
      
    //   if(this.filteredlist[i].FirstName.includes('s')){
       
    //     this.newlist=(this.filteredlist);
    //     console.log(this.newlist)
    //     this.router.navigate(['search']);
      }
    }
  
