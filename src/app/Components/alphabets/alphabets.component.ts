import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlphabetsService } from 'src/app/Service/alphabets.service';
import { EmployeeListService } from 'src/app/Service/employee-list.service';

@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.component.html',
  styleUrls: ['./alphabets.component.css']
})
export class AlphabetsComponent implements OnInit {
  alphaArray:any=[];
  constructor(private alphabets:AlphabetsService,private employeelistservice:EmployeeListService) { }
 
  ngOnInit(): void {
  
    this.getalphaArray();
  }
 
  getalphaArray(){
    let index=0;
    for (let i = 65; i < 91; i++) {
      var al = String.fromCharCode(i);
      this.alphaArray[index]=al;
      index++;
    }
  }
  onKeyUp(value:string,bool:boolean){
    if(bool){
      this.employeelistservice.setAlpha(value);
    }
    else{
      this.employeelistservice.setSearchText(value);
    }
  
   
  }

}
