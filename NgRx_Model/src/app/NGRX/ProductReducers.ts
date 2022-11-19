import { Product } from "../Models/product";
import { ProductsActions, ProductsActionsTypes } from "./ProductAction";
import {Action} from '@ngrx/store';


export enum ProductsStatesEnum{
    LOADING = "LOADING",
    LOADED = "LOADED",
    ERROR = "ERROR",
    INITIAL="INITILA"
}

export interface ProductsStates{

    products :Product[],
    errorMessage:string,
    dataState:ProductsStatesEnum

} 

const initState = {
    products : [],
    errorMessage : '',
    dataState:ProductsStatesEnum.INITIAL
}

export function productReducers(state= initState, action:Action){
    switch(action.type){
        case ProductsActionsTypes.GETALLPRODUCTS:
            return {...state,dataState:ProductsStatesEnum.LOADING}
        
        case ProductsActionsTypes.GET_ALL_PRODUCT_SECCESS:
            return {...state, dataState:ProductsStatesEnum.LOADED,products:(<ProductsActions>action).payload} 

        case ProductsActionsTypes.GET_ALL_PRODUCT_ERRORS:
            return {...state, dataState:ProductsStatesEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
        
//Get Selected Products 
         case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
            return {...state,dataState:ProductsStatesEnum.LOADING}
        
        case ProductsActionsTypes.GET_SELECTED_PRODUCT_SECCESS:
            return {...state, dataState:ProductsStatesEnum.LOADED,products:(<ProductsActions>action).payload} 

        case ProductsActionsTypes.GET_SELECTED_PRODUCT_ERROR:
            return {...state, dataState:ProductsStatesEnum.ERROR,errorMessage:(<ProductsActions>action).payload}
            
//Get GET_AVAILABLE_PRODUCTS 

  case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS:
            return {...state,dataState:ProductsStatesEnum.LOADING}
        
        case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_SECCESS:
            return {...state, dataState:ProductsStatesEnum.LOADED,products:(<ProductsActions>action).payload} 

        case ProductsActionsTypes.GET_AVAILABLE_PRODUCTS_ERROR:
            return {...state, dataState:ProductsStatesEnum.ERROR,errorMessage:(<ProductsActions>action).payload}

        default: return{...state}
    }
}