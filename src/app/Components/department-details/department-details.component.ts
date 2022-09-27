import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeListService } from 'src/app/Service/employee-list.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  dep: any ;
  public EmployeelistArray:any=[];
  public filterdListArray:any=[];
  constructor(private route:ActivatedRoute,private employeelist:EmployeeListService) {
    
   }

  ngOnInit(): void {
    this.EmployeelistArray=this.employeelist.getEmployeeList();
   
    this.route.paramMap.subscribe((params : ParamMap)=> {  
    this.dep=params.get('id');  
    
    for(let i=0;i<this.EmployeelistArray.length;i++){
      if(this.EmployeelistArray[i].Department==this.dep){
        console.log('done')
        this.filterdListArray[i]=this.EmployeelistArray[i];
      }
      else if(this.EmployeelistArray[i].office==this.dep){
        console.log('de')
        this.filterdListArray[i]=this.EmployeelistArray[i];
      }
    
      else if(this.EmployeelistArray[i].Job==this.dep){
       
        this.filterdListArray[i]=this.EmployeelistArray[i];
      }
      else{
        this.filterdListArray=[];
      }
    }
    });  
   
  }

}
