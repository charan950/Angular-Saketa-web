import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlphabetsService } from 'src/app/Service/alphabets.service';

@Component({
  selector: 'app-alphabets',
  templateUrl: './alphabets.component.html',
  styleUrls: ['./alphabets.component.css']
})
export class AlphabetsComponent implements OnInit {
  alphaArray:any=[];
  constructor(private alphabets:AlphabetsService) { }
 
  ngOnInit(): void {
    this.alphaArray=this.alphabets.getAlphabets();
  }
  getAlpha(alpha:any) {
      console.log(alpha);
  }
  

}
