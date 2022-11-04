import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductNavbarComponent } from './components/products/product-navbar/product-navbar.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductItemsComponent } from './components/products/product-list/product-items/product-items.component';
import { StatesComponent } from './Components/states/states.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    HomeComponent,
    ProductAddComponent,
    EditProductComponent,
    ProductNavbarComponent,
    ProductListComponent,
    ProductItemsComponent,
    StatesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
