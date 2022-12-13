import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/Models/product';
import { SELECTING_PRODUCTS } from 'src/app/NGRX/ProductAction';
import { EventDriverService } from 'src/app/State/event-driver.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/State/productState';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {

@Input() product : Product | null=null;

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }

  onSelect(product:Product){
    
    this.store.dispatch( new SELECTING_PRODUCTS(product))
  }

  onAvalaibled(product:Product){

  }

  onDelete(product:Product){

  }

  onEdit(product:Product){
  }


}
