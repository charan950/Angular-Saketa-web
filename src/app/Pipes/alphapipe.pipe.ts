import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphapipe'
})
export class AlphapipePipe implements PipeTransform {

  transform(value: any,alpha:string){
    if(value.length===0 || alpha===''){
      return value;
    }
    const employelistArray = [];
    
    for(const emp of value){
      if(emp['FirstName'].startsWith(alpha)){
        employelistArray.push(emp);
      }
    }
    return employelistArray;
  }

  }



