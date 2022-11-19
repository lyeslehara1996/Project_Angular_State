import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductsService } from '../Services/products.service';
import {Action} from '@ngrx/store';
import {Actions,createEffect, ofType} from '@ngrx/effects'
import { GetAllProductActionErrors, GetAllProductActionSuccess, GET_AVAILABLE_PRODUCTS_ERROR, GET_AVAILABLE_PRODUCTS_SECCESS, GET_SELECTED_PRODUCTS_Errors, GET_SELECTED_PRODUCTS_Success, ProductsActionsTypes } from './ProductAction';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';
@Injectable()
export class ProductsEffects {

    constructor(private productService:ProductsService,private effectAction:Actions ){}

    //Get All Product
    GetAllProductsEffects$:Observable<Action> = createEffect(() => {
        return this.effectAction.pipe(
                ofType(ProductsActionsTypes.GETALLPRODUCTS),
                mergeMap((action)=>{
                    return this.productService.getAllProduct().pipe(
                        map((products)=>new GetAllProductActionSuccess(products)),
                        catchError((err)=>of(new GetAllProductActionErrors(err)))
                    )
                })

                );
    });

    //Get Selected Product 
    GetSelectedProductsEffects$:Observable<Action> = createEffect(() => {
        return this.effectAction.pipe(
                ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
                mergeMap((action)=>{
                    return this.productService.getSelectProduct().pipe(
                        map((products)=>new GET_SELECTED_PRODUCTS_Success(products)),
                        catchError((err)=>of(new GET_SELECTED_PRODUCTS_Errors(err)))
                    )
                })

                );
            });
            
     //GET AVALAIBLE Products 
    GetAvalaibleProductsEffects$:Observable<Action> = createEffect(() => {
        return this.effectAction.pipe(
                ofType(ProductsActionsTypes.GET_AVAILABLE_PRODUCTS),
                mergeMap((action)=>{
                    return this.productService.getAvailableProduct().pipe(
                        map((products)=>new GET_AVAILABLE_PRODUCTS_SECCESS(products)),
                        catchError((err)=>of(new GET_AVAILABLE_PRODUCTS_ERROR(err)))
                    )
                })

                );            

  });
            

}