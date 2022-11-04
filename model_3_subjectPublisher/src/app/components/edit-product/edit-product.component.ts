import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';
import { EventDriverService } from 'src/app/State/event-driver.service';
import { ProductActionsTypes } from 'src/app/State/productState';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId :number;
productFormGroupe !: FormGroup;
submitted : boolean =false
  constructor(private productServ:ProductsService, private activateRoute:ActivatedRoute, private formBuilder:FormBuilder,private Route:Router,private eventDriverSurvices:EventDriverService) { 

    this.productId = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

    this.productServ.getProduct(this.productId)
    .subscribe(product=>{
    this.productFormGroupe=  this.formBuilder.group({
       id:[product.id,Validators.required],
        name:[product.name,Validators.required],
        price:[product.price,Validators.required],
        quantity:[product.quantity,Validators.required],
        selected:[product.selected,Validators.required],
        available:[product.available,Validators.required]
      });
    });

  }


  onEdit(){
this.submitted=true;
if(this.productFormGroupe?.invalid) return;
    this.productServ.UpdateProduct(this.productFormGroupe.value)
    .subscribe(data => {
      
      this.eventDriverSurvices.publishEvent({type: ProductActionsTypes.PRODUCTUPDATED})
      alert("Product Updated !");
this.Route.navigateByUrl("/products")
    });
  }
}
