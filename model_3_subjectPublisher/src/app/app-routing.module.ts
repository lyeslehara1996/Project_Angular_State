import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { EditProductComponent } from "./components/edit-product/edit-product.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductAddComponent } from "./components/product-add/product-add.component";
import { ProductsComponent } from "./components/products/products.component";

const routes : Routes =[
    {
        path:'products',
        component:ProductsComponent,

    },
    {
            path:'newProducts',
            component:ProductAddComponent
        },
    {
            path:'editProduct/:id',
            component:EditProductComponent
        },
    {
        path:'',
        component:HomeComponent       
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}