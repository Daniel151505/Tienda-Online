import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/product.model';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // Input
 @Input() product!: Product;

 // Output
 @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // Agregar Carrito

  addCart(){
    console.log('añadir al carrito')

    // Emitiendo id al componente app
    this.productClicked.emit(this.product.id)
  }

}
