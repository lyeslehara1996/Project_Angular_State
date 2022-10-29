import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/State/productState';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 @Input() products$ ?:Observable<AppDataState< Product[]>> | null=null;

  readonly DataStateEnum = DataStateEnum;

  @Output() ListEventEmitter: EventEmitter<ActionEvent> =  new EventEmitter() 
  constructor(private productservice:ProductsService, private router:Router) { }

  ngOnInit(): void {
  }


  onSelect(p:Product){
this.ListEventEmitter.emit({type:ProductActionsTypes.SELECTEDPRODUCT, payload:p})
  }

  onAvalaibled(p:Product){
this.ListEventEmitter.emit({type:ProductActionsTypes.AVALAIBLEPRODUCT, payload:p})
  }

  onDelete(p:Product){
this.ListEventEmitter.emit({type:ProductActionsTypes.DELETERODUCTS, payload:p})
  }
  onEdit(p:Product){
this.ListEventEmitter.emit({type:ProductActionsTypes.UPDATERODUCTS, payload:p})
  }


  onAction($event:ActionEvent){
    this.ListEventEmitter.emit($event);
  
  }
}
