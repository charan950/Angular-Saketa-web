import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { EmployeeListService } from '../Service/employee-list.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  emplistservice:EmployeeListService
  
  transform(value: any, searchtext:string){
    
    if(value.length===0 || searchtext===''){
      return value;
    }
    const employelistArra = [];
    
    for(const emp of value){
      if(emp['FirstName']===(searchtext)|| emp['FirstName'].startsWith(searchtext.toLocaleLowerCase())){
        employelistArra.push(emp);
      }
    }
    return employelistArra;
  }

}
