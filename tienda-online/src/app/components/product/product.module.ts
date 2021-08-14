// Necesario Importar
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent
  ],
  imports: [
    // Necesario Importar
    CommonModule,
    ProductRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }





