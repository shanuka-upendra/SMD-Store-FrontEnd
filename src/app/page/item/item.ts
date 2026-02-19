import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ItemModel } from '../../../model/model';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgForOf } from '@angular/common';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  imports: [NgForOf,FormsModule,CommonModule],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item implements OnInit {

  itemList:Array<ItemModel>=[];
  
  itemObj:ItemModel = {
    itemCode:'',
    description:'',
    packSize:'',
    price:0.0,
    qty:0
  }

  constructor(private http:HttpClient,private cdr:ChangeDetectorRef){
    this.getAllItems();
  }

  ngOnInit(): void {
    this.getAllItems();
  }

  getAllItems(){
    this.http.get<ItemModel[]>("http://localhost:8080/item/search-all").subscribe(data=>{
      console.log(data);
      this.itemList=data;
      this.cdr.detectChanges();
    })
  }

  addItem():void{
    alert(JSON.stringify(this.itemObj));
    this.http.post("http://localhost:8080/item/add-item",this.itemObj).subscribe(data=>{
      console.log(data);
      if(data === true){
          Swal.fire({
            title: "Good job! "+this.itemObj.description+" saved !",
            text: "You clicked the button!",
            icon: "success"
        });
      }
      this.getAllItems();
    })
  }




}
