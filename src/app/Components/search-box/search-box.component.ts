import { Component, OnInit } from '@angular/core';
import { SearchBoxService } from 'src/app/Service/search-box.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
 
// public fillterbyarray:any[];
  
 searchvalue:any[];
  constructor(private fillterarray:SearchBoxService) { }

  ngOnInit(): void {
    // this.fillterbyarray=this.fillterarray.fillterdBy();
   
  }
  // onSelected(value:string){
  //   console.log(value);
  // }
  // searchboxValue(value:string){
  //  return value;
  // }
 

}


