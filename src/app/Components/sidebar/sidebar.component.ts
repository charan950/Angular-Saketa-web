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
itcount=0;
   hrcount=0;
   mdcount=0;
   salescount=0
   seatlecount=0
   indiacount=0
   sharepointcount=0
   netcount=0
   
   bicount=0
   bacount=0
   recount=0
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
   
    
    // for(let i=0;i<this.listarray.length;i++){
    //   if(this.listarray[i].Department=='IT Department'){
    //     this.itcount++;
    //    console.log(this.itcount)
    //   }
    //   if(this.listarray[i].Department==='HR Department'){
    //     this.hrcount
    //   }
    //   if(this.listarray[i].Department==='MD Department'){
    //     this.mdcount++;
    //   }
    //   if(this.listarray[i].Department==='Sales'){
    //     this.salescount++;
    //   }
    //   if(this.listarray[i].Department==='Seatle'){
    //     this.seatlecount++;
    //   }
    //   if(this.listarray[i].Department==='India'){
    //     this.indiacount++;
    //   }
    //   if(this.listarray[i].Department==='SharePoint Practice Head'){
    //     this.sharepointcount++;
    //   }
    //   if(this.listarray[i].Department==='.Net Development Lead'){
    //     this.netcount++;
    //   }
    //   if(this.listarray[i].Department==='Recruiting Expert'){
    //     this.recount++;
    //   }
  
    //   if(this.listarray[i].Department==='BI Developer'){
    //     this.bicount++;
    //   }
    //   if(this.listarray[i].Department==='Business Analyst'){
    //     this.bacount++;
    //   }
      
    }
   
  }



