import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Product } from 'src/app/Models/product';
import { ProductsStates, ProductsStatesEnum } from 'src/app/NGRX/ProductReducers';
import { ProductsService } from 'src/app/Services/products.service';
import { EventDriverService } from 'src/app/State/event-driver.service';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/State/productState';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  productsState$ ?:Observable<ProductsStates> | null=null;
readonly ProductsStatesEnum= ProductsStatesEnum;

  constructor(private store:Store<any>) { }

  ngOnInit(): void {

    this.productsState$= this.store.pipe(
      map((state)=>{
        return state.catalogState;
      })
    )


  }

  onGetAllProducts(){

  }


  onGetSelectProduct(){

   
  }


  onGetAvailableProduct(){
    
 }

onSearch(dataForm:any){

}

onSelect(p:Product){

}

onAvalaibled(p:Product){

}
onDelete(p : Product){

}


onAddProducts(){
}


onEdit(p:Product){
}

onActionEvent($event:ActionEvent){
switch ($event.type){
  case ProductActionsTypes.GETALLPRODUCTS: this.onGetAllProducts();break;
  case ProductActionsTypes.GESELECTEDPRODUCTS : this.onGetSelectProduct();break;
  case ProductActionsTypes.GEAVAILABLEPRODUCTS : this.onGetAvailableProduct();break;
  case ProductActionsTypes.SEARCHPRODUCTS : this.onSearch($event.payload);break;
  case ProductActionsTypes.NEWPRODUCTS : this.onAddProducts();break;
  case ProductActionsTypes.SELECTEDPRODUCT : this.onSelect($event.payload);break;
  case ProductActionsTypes.AVALAIBLEPRODUCT : this.onAvalaibled($event.payload);break;
  case ProductActionsTypes.UPDATERODUCTS : this.onEdit($event.payload);break;
  case ProductActionsTypes.DELETERODUCTS : this.onDelete($event.payload);break;
}
  }

}
