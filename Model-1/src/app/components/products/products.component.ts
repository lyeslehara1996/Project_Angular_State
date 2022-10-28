import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';
import { AppDataState, DataStateEnum } from 'src/app/State/productState';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  products$ ?:Observable<AppDataState< Product[]>> | null=null;

  readonly DataStateEnum = DataStateEnum;

  constructor(private productservice:ProductsService, private router:Router) { }

  ngOnInit(): void {
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


}

