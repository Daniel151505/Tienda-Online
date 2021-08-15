import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
    ) { }

  // Retorna el objeto Producto
  getAllProducts() {
    return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products')
  }

  // Retorna el item (producto) de acuerdo al id

  getProduct(id:string) {
    return this.http.get<Product[]>(`http://platzi-store.herokuapp.com/products/${id}`);
  }


}
