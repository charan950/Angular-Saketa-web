import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { EmployeeListService } from './Service/employee-list.service';
import { SearchBoxService } from './Service/search-box.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fillterbyarray:any=[];
  searchboxvalue:any=[];
  fillterby:any=[];
  public employelistArray:any=[];
  searchvalue:any[];
  constructor(private fillterarray:SearchBoxService,private employeelist:EmployeeListService) { }

  ngOnInit(): void {
    this.fillterbyarray=this.fillterarray.fillterdBy();
    this.fillteredlist()
    console.log(this.searchboxvalue);
  }
  onSelected(value:string){
    this.fillterby=value;
   
  }
  
  searchboxValue(value:string){
    this.employelistArray=this.employeelist.getDetails();
    for(let i=0;i<this.employelistArray.length;i++){
      if(this.employelistArray[i].FirstName.includes(value)){
        console.log('sai');
      }
    }
  }

  fillteredlist(){
  
    console.log(this.fillterby);
   
    if(this.fillterby.includes('firstname')){
      console.log("sao")
    }
    for(let i=0;i<this.employelistArray.length;i++){
      if(this.searchboxvalue=='s'){

      }
    }
    console.log(this.searchboxvalue);
  }
  
 
 
}


