import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

import { ProductsComponent } from "./products/products.component";


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  //Redireccionamiento a producto de acuerdo al id
  {
    path: ':id',
    component: ProductDetailComponent
  },
];

@NgModule({
  // forChild rutas hijas
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
