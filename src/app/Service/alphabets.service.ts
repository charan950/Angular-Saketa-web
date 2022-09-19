import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlphabetsService {
alpha:any=[];
a:any;
  constructor() { }

  getAlphabets(){
    let index=0;
    for (let i = 65; i < 91; i++) {
     this.a=String.fromCharCode(i);
      this.alpha[index]=this.a;
      index++;
    }
    return this.alpha;
  }
  
}
