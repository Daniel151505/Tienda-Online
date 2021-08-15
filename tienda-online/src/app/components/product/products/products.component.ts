import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    // Objeto de tipo Product
    products: Product[] = []

  constructor(
   private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  clickProduct(id:number){
    console.log('product')
    console.log(id)
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    })

  }

}
