import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { EventDriverService } from 'src/app/State/event-driver.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/State/productState';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {

@Input() product : Product | null=null;
//@Output() EventEmitter :EventEmitter<ActionEvent> = new  EventEmitter();

  constructor(private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
  }

  onSelect(product:Product){
//this.EventEmitter.emit({type:ProductActionsTypes.SELECTEDPRODUCT,payload:product});
this.eventDriverService.publishEvent({type:ProductActionsTypes.SELECTEDPRODUCT,payload:product})
  }

  onAvalaibled(product:Product){

//this.EventEmitter.emit({type:ProductActionsTypes.AVALAIBLEPRODUCT,payload:product});
this.eventDriverService.publishEvent({type:ProductActionsTypes.AVALAIBLEPRODUCT,payload:product})
  }

  onDelete(product:Product){

//this.EventEmitter.emit({type:ProductActionsTypes.DELETERODUCTS,payload:product});
this.eventDriverService.publishEvent({type:ProductActionsTypes.DELETERODUCTS,payload:product})
  }

  onEdit(product:Product){
    
this.eventDriverService.publishEvent({type:ProductActionsTypes.UPDATERODUCTS,payload:product})
  }


}
