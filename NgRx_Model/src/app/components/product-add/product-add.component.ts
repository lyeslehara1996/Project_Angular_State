import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { EventDriverService } from 'src/app/State/event-driver.service';

import { ActionEvent, ProductActionsTypes } from 'src/app/State/productState';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productFormGroup ?: FormGroup | null=null;
submitted:boolean = false;

  constructor(private fb:FormBuilder,private productService:ProductsService,private Route:Router,private eventDriverService:EventDriverService) { }

  ngOnInit(): void {

    this.productFormGroup=this.fb.group({

      name:["",Validators.required],
      quantity:[0,Validators.required],
      price:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required]
    });
  }

  onSave(){
 
this.submitted=true;
if(this.productFormGroup?.invalid) return;

    this.productService.saveProduct(this.productFormGroup?.value).subscribe(data=>{
      this.eventDriverService.publishEvent({type: ProductActionsTypes.PRODUCTADDED})
      alert("Product saved !");
      this.Route.navigateByUrl("/products")
    });
 
 }
}
