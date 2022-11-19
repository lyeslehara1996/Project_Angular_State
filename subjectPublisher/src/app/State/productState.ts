export enum ProductActionsTypes {

    GETALLPRODUCTS = "[Product] GET ALL PRODUCTS",
    GESELECTEDPRODUCTS = "[Product] GET SELECTED PRODUCTS",
    GEAVAILABLEPRODUCTS = "[Product] GET AVAILABLE PRODUCTS",
    SEARCHPRODUCTS = "[Product] SEARCH PRODUCTS",
    NEWPRODUCTS = "[Product] NEW PRODUCTS",
    UPDATERODUCTS = "[Product] UPDATE PRODUCTS",
    DELETERODUCTS = "[Product] DELETE PRODUCTS",
    SELECTEDPRODUCT = "[Product] SELECTED PRODUCT",
    AVALAIBLEPRODUCT = "[PRODUCT] AVALAIBLE PRODUCT",
    PRODUCTADDED = "[PRODUCT] ADD PRODUCT",
    PRODUCTUPDATED = "[PRODUCT] UPDATED PRODUCT"
   
}

export interface ActionEvent {
    type: ProductActionsTypes,
    payload ?: any
}


export enum DataStateEnum {

    LOADING,
    LOADED,
    ERROR
}

export interface AppDataState<T> {
 
    dataState?:DataStateEnum,
    data?:T,
    erroMessage?:string
}


