import { Action } from "@ngrx/store/src";
import { Product } from "../Models/product";

export enum ProductsActionsTypes{

    GETALLPRODUCTS = "[Product] GET ALL PRODUCTS",
    GET_ALL_PRODUCT_SECCESS = "[Product] GET ALL PRODUCTS SECCESS",
    GET_ALL_PRODUCT_ERRORS = "[Product] GET ALL PRODUCTS ERRORS",
    
    GET_SELECTED_PRODUCTS = "[Product] GET SELECTED PRODUCTS",
    GET_SELECTED_PRODUCT_SECCESS = "[Product] GET SELECTED PRODUCTS SECCESS",
    GET_SELECTED_PRODUCT_ERROR = "[Product] GET SELECTED PRODUCTS ERROR",

    GET_AVAILABLE_PRODUCTS = "[Product] GET AVAILABLE PRODUCTS",
    GET_AVAILABLE_PRODUCTS_SECCESS = "[Product] GET AVAILABLE PRODUCTS SECCESS",
    GET_AVAILABLE_PRODUCTS_ERROR = "[Product] GET AVAILABLE PRODUCTS ERROR",
    
    SEARCHPRODUCTS = "[Product] SEARCH PRODUCTS",
    
    NEWPRODUCTS = "[Product] NEW PRODUCTS",

    PRODUCTADDED = "[PRODUCT] ADD PRODUCT",
    
    UPDATERODUCTS = "[Product] UPDATE PRODUCTS",
    
    PRODUCTUPDATED = "[PRODUCT] UPDATED PRODUCT",

    DELETERODUCTS = "[Product] DELETE PRODUCTS",

    SELECTEDPRODUCT = "[Product] SELECTED PRODUCT",

    AVALAIBLEPRODUCT = "[PRODUCT] AVALAIBLE PRODUCT",

    
    
}

//Get All Products
export class GetAllProductAction implements Action{
    readonly type = ProductsActionsTypes.GETALLPRODUCTS ;
    constructor(public payload:any){}}

export class GetAllProductActionSuccess implements Action{
    readonly type = ProductsActionsTypes.GET_ALL_PRODUCT_SECCESS;
    constructor(public payload:Product[]){ }}

export class GetAllProductActionErrors implements Action{
   readonly  type = ProductsActionsTypes.GET_ALL_PRODUCT_ERRORS;
    constructor(public payload:string){}}

    //Get_Selected_Product
export class GET_SELECTED_PRODUCTS implements Action{
   readonly  type = ProductsActionsTypes.GET_SELECTED_PRODUCTS;
    constructor(public payload:any){}}

export class GET_SELECTED_PRODUCTS_Success implements Action{
   readonly type = ProductsActionsTypes.GET_SELECTED_PRODUCT_SECCESS;
    constructor(public payload:Product[]){ }}

export class GET_SELECTED_PRODUCTS_Errors implements Action{
   readonly type = ProductsActionsTypes.GET_SELECTED_PRODUCT_ERROR;
    constructor(public payload:string){}}

    //get avalaible Products 
export class GET_AVAILABLE_PRODUCTS implements Action{
   readonly type = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS;
    constructor(public payload:any){}}

export class GET_AVAILABLE_PRODUCTS_SECCESS implements Action{
   readonly type = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_SECCESS;
    constructor(public payload:Product[]){ }}

export class GET_AVAILABLE_PRODUCTS_ERROR implements Action{
   readonly type = ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR;
    constructor(public payload:string){}}





export type ProductsActions = 
   GetAllProductAction|GetAllProductActionSuccess|GetAllProductActionSuccess
   |GET_SELECTED_PRODUCTS|GET_SELECTED_PRODUCTS_Success|GET_SELECTED_PRODUCTS_Errors
   ;