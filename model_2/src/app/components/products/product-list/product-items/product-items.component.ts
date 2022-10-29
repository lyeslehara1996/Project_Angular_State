import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ActionEvent, ProductActionsTypes } from 'src/app/State/productState';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {

@Input() product : Product | null=null;
@Output() EventEmitter :EventEmitter<ActionEvent> = new  EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product:Product){
this.EventEmitter.emit({type:ProductActionsTypes.SELECTEDPRODUCT,payload:product});
  }

  onAvalaibled(product:Product){

this.EventEmitter.emit({type:ProductActionsTypes.AVALAIBLEPRODUCT,payload:product});
  }

  onDelete(product:Product){

this.EventEmitter.emit({type:ProductActionsTypes.DELETERODUCTS,payload:product});
  }

  onEdit(product:Product){
    
  }


}
