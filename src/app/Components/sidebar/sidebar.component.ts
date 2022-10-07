import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from 'src/app/Model/employee';
import { EmployeeListService } from 'src/app/Service/employee-list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
itcount=0;hrcount=0;mdcount=0;salescount=0;seatlecount=0;indiacount=0;
sharepointcount=0;netcount=0;bicount=0;bacount=0;recount=0;omcount=0;pmcount=0;secount=0;
   more:boolean;
   less:boolean

constructor(private employeelistservice:EmployeeListService) { 
  
}

  ngOnInit(): void {
    this.employeelistservice.getDetails()
    this.more=true;
   
    this.employeelistservice.itCount.subscribe(res=>{
      this.itcount=res;
     
    })
    this.employeelistservice.hrCount.subscribe(res=>{
      this.hrcount=res;
    })
    this.employeelistservice.mdCount.subscribe(res=>{
      this.mdcount=res;
    })
    this.employeelistservice.salesCount.subscribe(res=>{
      this.salescount=res;
    })
    this.employeelistservice.seatleCount.subscribe(res=>{
      this.seatlecount=res;
    })
    this.employeelistservice.indiaCount.subscribe(res=>{
      this.indiacount=res;
    })
    this.employeelistservice.sharepointCount.subscribe(res=>{
      this.sharepointcount=res;
    })
    this.employeelistservice.netCount.subscribe(res=>{
      this.netcount=res;
    })
    this.employeelistservice.reCount.subscribe(res=>{
      this.recount=res;
    })
    this.employeelistservice.biCount.subscribe(res=>{
      this.bicount=res;
    })
    this.employeelistservice.baCount.subscribe(res=>{
      this.bacount=res;
    })
    this.employeelistservice.omCount.subscribe(res=>{
      this.omcount=res;
    })
    this.employeelistservice.pmCount.subscribe(res=>{
      this.pmcount=res;
    })
    this.employeelistservice.seCount.subscribe(res=>{
      this.secount=res;
    })
   
    
  }
 
  viewMore(){
   
    this.more=false;
    this.less=true;
  }
  viewLess(){
    this.less=false;
    this.more=true;
  }
   
  }



