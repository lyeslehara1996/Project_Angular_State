import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { EventDriverService } from 'src/app/State/event-driver.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/State/productState';

@Component({
  selector: 'app-product-navbar',
  templateUrl: './product-navbar.component.html',
  styleUrls: ['./product-navbar.component.css']
})
export class ProductNavbarComponent implements OnInit {


  //@Output() productEventEmitter : EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor(private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
  }


  onGetAllProducts(){
    //this.productEventEmitter.emit({type: ProductActionsTypes.GETALLPRODUCTS});

    this.eventDriverService.publishEvent({type: ProductActionsTypes.GETALLPRODUCTS})
  }

  onGetSelectProduct(){

    //this.productEventEmitter.emit({type:ProductActionsTypes.GESELECTEDPRODUCTS});

      this.eventDriverService.publishEvent({type:ProductActionsTypes.GESELECTEDPRODUCTS})
  }

  onGetAvailableProduct(){
   // this.productEventEmitter.emit({type:ProductActionsTypes.GEAVAILABLEPRODUCTS});
 this.eventDriverService.publishEvent({type:ProductActionsTypes.GEAVAILABLEPRODUCTS})
    

  }

  onAddProducts(){
    //this.productEventEmitter.emit({type:ProductActionsTypes.NEWPRODUCTS});
  this.eventDriverService.publishEvent({type:ProductActionsTypes.NEWPRODUCTS})
  }

  onSearch(f:Product){
 //this.productEventEmitter.emit({type:ProductActionsTypes.SEARCHPRODUCTS,payload:f});
  this.eventDriverService.publishEvent({type:ProductActionsTypes.SEARCHPRODUCTS,payload:f})
  }
}
