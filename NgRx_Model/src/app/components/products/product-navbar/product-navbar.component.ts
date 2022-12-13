import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import {Store} from '@ngrx/store'
import { GetAllProductAction, GET_AVAILABLE_PRODUCTS, GET_SELECTED_PRODUCTS, SEARCH_PRODUCTS } from 'src/app/NGRX/ProductAction';

@Component({
  selector: 'app-product-navbar',
  templateUrl: './product-navbar.component.html',
  styleUrls: ['./product-navbar.component.css']
})
export class ProductNavbarComponent implements OnInit {


  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }


  onGetAllProducts(){
    this.store.dispatch(new GetAllProductAction({}))
  }

  onGetSelectProduct(){
    this.store.dispatch(new GET_SELECTED_PRODUCTS({}))
  }

  onGetAvailableProduct(){
    
    this.store.dispatch( new GET_AVAILABLE_PRODUCTS({}))

  }

  onAddProducts(){
  }

  onSearch(f:any){
      this.store.dispatch( new SEARCH_PRODUCTS(f.keyWord))
  }
}
