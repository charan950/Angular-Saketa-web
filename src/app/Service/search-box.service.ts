import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBoxService {

  fillterdbyArray:any=['preferredname','firstname','lastname','job','department','office']
  constructor() { }

  fillterdBy(){
    return this.fillterdbyArray;
  }
}
