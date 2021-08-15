// Necesario Importar
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProductRoutingModule } from './product-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    // Necesario Importar
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }





