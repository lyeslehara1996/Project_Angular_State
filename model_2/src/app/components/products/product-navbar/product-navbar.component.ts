import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ActionEvent, ProductActionsTypes } from 'src/app/State/productState';

@Component({
  selector: 'app-product-navbar',
  templateUrl: './product-navbar.component.html',
  styleUrls: ['./product-navbar.component.css']
})
export class ProductNavbarComponent implements OnInit {


  @Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor() { }

  ngOnInit(): void {
  }


  onGetAllProducts(){
    this.productEventEmitter.emit({type: ProductActionsTypes.GETALLPRODUCTS});
  }

  onGetSelectProduct(){

    this.productEventEmitter.emit({type:ProductActionsTypes.GESELECTEDPRODUCTS});

  }

  onGetAvailableProduct(){
    this.productEventEmitter.emit({type:ProductActionsTypes.GEAVAILABLEPRODUCTS});

  }

  onAddProducts(){
 this.productEventEmitter.emit({type:ProductActionsTypes.NEWPRODUCTS});
 
  }

  onSearch(f:Product){
 this.productEventEmitter.emit({type:ProductActionsTypes.SEARCHPRODUCTS,payload:f});
  }
}
