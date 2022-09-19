import { Injectable } from '@angular/core';
import { IEmployeeDetails } from '../Model/iemployee-details';

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor() { }

  employelist:IEmployeeDetails[]=[
    {FirstName:"sai",LastName:'Charan',PreferredName:'sai',Job:'sharepoint',office:"India",Email:'sai@gmail.com',Department:'IT',PhoneNumber:121345678,SkypeId:'sai'},
    {FirstName:"sai",LastName:'Charan',PreferredName:'sai',Job:'sharepoint',office:"India",Email:'sai@gmail.com',Department:'IT',PhoneNumber:121345678,SkypeId:'sai'},
  ]
  getDetails(){
    return this.employelist;
  }

}
