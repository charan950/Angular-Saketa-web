import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from 'src/app/Model/employee';
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
  newlist:Employee[];
  constructor(private route:ActivatedRoute,private employeelist:EmployeeListService) {
    
   }

  ngOnInit(): void {
   
    this.route.paramMap.subscribe((params : ParamMap)=> {  
    this.dep=params.get('id'); 
    let index=0;
    this.EmployeelistArray=this.employeelist.allEmployees;
    this.filterdListArray=[];
    for(let i=0;i<this.EmployeelistArray.length;i++){
      if(this.EmployeelistArray[i].Department==this.dep){
        console.log(this.dep) 
        this.filterdListArray[index]=(this.EmployeelistArray[i]);
        index++;
        console.log(this.filterdListArray)
      }
      else if(this.EmployeelistArray[i].office==this.dep){
          console.log(this.dep)
          this.filterdListArray[index]=(this.EmployeelistArray[i]);
          index++
        }
      else if(this.EmployeelistArray[i].Job==this.dep){
            console.log(this.dep)
            this.filterdListArray[index]=(this.EmployeelistArray[i]);
            index++
        }
     }
      // }
      // else if(this.EmployeelistArray[i].office==this.dep){
      //   console.log(this.dep)
      //   this.filterdListArray[index]=(this.EmployeelistArray[i]);
      //   index++
      // }
    
      // else if(this.EmployeelistArray[i].Job==this.dep){
       
      //   this.filterdListArray[index]=(this.EmployeelistArray[i]);
      //   index++
      // }
    
      this.EmployeelistArray=this.filterdListArray
    });  
    
    
  }
 

}
