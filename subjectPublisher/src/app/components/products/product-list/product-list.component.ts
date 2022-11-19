import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';
import { EventDriverService } from 'src/app/State/event-driver.service';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/State/productState';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

 @Input() products$ ?:Observable<AppDataState< Product[]>> | null=null;

  readonly DataStateEnum = DataStateEnum;

  constructor( ) { }

  ngOnInit(): void {
  }

}
