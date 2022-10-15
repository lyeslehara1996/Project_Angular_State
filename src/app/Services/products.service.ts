import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
}
)
 

export class ProductsService {

  private host = "http://localhost:3000";
  constructor(private http:HttpClient) { }

getAllProduct():Observable<Product[]>{
  return this.http.get<Product[]>(this.host+"/products")
}

getSelectProduct():Observable<Product[]>{
  return this.http.get<Product[]>(this.host+"/products?selected=true");
}



getAvailableProduct():Observable<Product[]>{
  return this.http.get<Product[]>(this.host+"/products?avilable=true");
}

getSearchProduct(keyWord:string):Observable<Product[]>{
  return this.http.get<Product[]>(this.host+"/products?name_like="+keyWord);
}

SelectProduct(product:Product):Observable<Product>{
  product.selected=!product.selected;
  return this.http.put<Product>(this.host+"/products/"+product.id,product);
}

deleteProduct(product:Product):Observable<void>{
   product.selected=!product.selected;
  return this.http.delete<void>(this.host+"/products/"+product.id);
}

}
