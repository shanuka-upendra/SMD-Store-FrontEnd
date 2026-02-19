import { NgForOf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CustomerModel } from '../../../model/model';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  imports: [NgForOf,FormsModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer implements OnInit {

  customerList:Array<CustomerModel>= [];

  customerObj:CustomerModel = {
    id:'',
    title:'',
    name:'',
    dob:{},
    salary:0.0,
    address:'',
    city:'',
    province:'',
    postalCode:''
  };

  constructor(private http:HttpClient, private cdr:ChangeDetectorRef){
    this.getAll()
  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.http.get<CustomerModel[]>("http://localhost:8080/customer/search-all").subscribe(data=>{
      console.log(data);
      this.customerList=data;
      this.cdr.detectChanges();
    })
  }

  addCustomer():void{
    this.http.post("http://localhost:8080/customer/add-customer",this.customerObj).subscribe(data=>{
      console.log(data);
      if(data === true){
        Swal.fire({
          title: "Good job! "+this.customerObj.name+" saved !",
          text: "You clicked the button!",
          icon: "success"
        });
      }
      this.getAll();
    })
  }

}
