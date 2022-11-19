import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';
import { EventDriverService } from 'src/app/State/event-driver.service';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/State/productState';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products$ ?:Observable<AppDataState< Product[]>> | null=null;

  readonly DataStateEnum = DataStateEnum;

  constructor(private productservice:ProductsService, private router:Router,private eventDriverService:EventDriverService) { }

  ngOnInit(): void {
  this.eventDriverService.sourceEventSubjectObservable.subscribe((actionEvent:ActionEvent)=>{
    this.onActionEvent(actionEvent);
  })
  }

  onGetAllProducts(){
    this.products$=
    this.productservice.getAllProduct().pipe(
      map(
        data=>{
          console.log(data);
       return ({dataState:DataStateEnum.LOADED,data:data}) 
        }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(error=> of({dataState:DataStateEnum.ERROR,errorMessage:error.Message})),
    );
  }


  onGetSelectProduct(){

      this.products$=
    this.productservice.getSelectProduct().pipe(
      map(
        data=>{
          console.log(data);
       return ({dataState:DataStateEnum.LOADED, data:data}) 
        }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(error=> of({dataState:DataStateEnum.ERROR,errorMessage:error.Message})),
    );
  }


  onGetAvailableProduct(){
          this.products$=
    this.productservice.getAvailableProduct().pipe(
      map(
        data=>{
          console.log(data);
       return ({dataState:DataStateEnum.LOADED, data:data}) 
        }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(error=> of({dataState:DataStateEnum.ERROR,errorMessage:error.Message})),
    );
 }

onSearch(dataForm:any){
 this.products$=
    this.productservice.getSearchProduct(dataForm.keyWord).pipe(
      map(
        data=>{
          console.log(data);
       return ({dataState:DataStateEnum.LOADED, data:data}) 
        }),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(error=> of({dataState:DataStateEnum.ERROR,errorMessage:error.Message})),
    );
}

onSelect(p:Product){
  this.productservice.SelectProduct(p).subscribe(data=>{
    p.selected=data.selected;
  })
}

onAvalaibled(p:Product){
  this.productservice.AvalaibleProduct(p).subscribe(data=>{
    p.available=data.available;
  })
}
onDelete(p : Product){
  let v = confirm("vous voulez supprimer cet element ");
  if(v===true)
  this.productservice.deleteProduct(p).subscribe(data=>{
    this.onGetAllProducts()
  })
}


onAddProducts(){
  this.router.navigateByUrl("/newProducts");
}


onEdit(p:Product){
  this.router.navigateByUrl("/editProduct/"+p.id);
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
