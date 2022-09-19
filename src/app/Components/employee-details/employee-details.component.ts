import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public employeedetailsarray:any=[];
  array: any=[];
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.employeedetailsarray=params.get('array'); 
      this.array=JSON.parse(this.employeedetailsarray);
      console.log(this.array);
  });
}

}
