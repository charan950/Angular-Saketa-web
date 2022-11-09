import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Employee } from 'src/app/Model/employee';
import { EmployeeCount } from 'src/app/Model/employee-count';
import { EmployeeListService } from 'src/app/Service/employee-list.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  
  employeecount= new EmployeeCount(0,0,0,0,0,0,0,0,0,0,0,0,0,0)
  employeeCountSubscription: Subscription;
  
  isViewMore: boolean;
  filterList: Employee[] = [];
  
  constructor(private employeelistservice: EmployeeListService) {}

  ngOnInit(): void {
    this.isViewMore = true;
    this.employeeCountSubscription=this.employeelistservice.employeeCount.subscribe(res=>{
    this.employeecount=res
    })
    
  }

  toggleViewMore() {
    this.isViewMore = !this.isViewMore;
  }

  ngOnDestroy() {
    this.employeeCountSubscription.unsubscribe()
  }
}
