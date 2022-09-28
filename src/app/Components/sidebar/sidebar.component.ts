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
   atag:boolean
constructor(private employeelistservice:EmployeeListService) { 
  
}

  ngOnInit(): void {

    this.employeelistservice.itcount.subscribe(res=>{
      this.itcount=res;
      console.log(this.itcount)
    })
    this.employeelistservice.hrcount.subscribe(res=>{
      this.hrcount=res;
    })
    this.employeelistservice.mdcount.subscribe(res=>{
      this.mdcount=res;
    })
    this.employeelistservice.salescount.subscribe(res=>{
      this.salescount=res;
    })
    this.employeelistservice.seatlecount.subscribe(res=>{
      this.seatlecount=res;
    })
    this.employeelistservice.indiacount.subscribe(res=>{
      this.indiacount=res;
    })
    this.employeelistservice.sharepointcount.subscribe(res=>{
      this.sharepointcount=res;
    })
    this.employeelistservice.netcount.subscribe(res=>{
      this.netcount=res;
    })
    this.employeelistservice.recount.subscribe(res=>{
      this.recount=res;
    })
    this.employeelistservice.bicount.subscribe(res=>{
      this.bicount=res;
    })
    this.employeelistservice.bacount.subscribe(res=>{
      this.bacount=res;
    })
    this.employeelistservice.omcount.subscribe(res=>{
      this.omcount=res;
    })
    this.employeelistservice.pmcount.subscribe(res=>{
      this.pmcount=res;
    })
    this.employeelistservice.secount.subscribe(res=>{
      this.secount=res;
    })
   
    
  }
  submit(){
    console.log('sai');
  }
  viewMore(){
   
    this.more=true;
  }
  viewLess(){
    this.more=false;
  }
   
  }



