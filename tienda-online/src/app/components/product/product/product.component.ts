import {
   Component,
   EventEmitter,
   Input,
   OnInit,
   Output,
   SimpleChanges
   } from '@angular/core';
import { CartService } from 'src/app/core/service/cart.service';
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

today = new Date();

 // Constructor
  constructor(
    private cartService: CartService,
  ) {
    console.log('1. constructor');
  }

  // ngOnCange
  ngOnChanges(changes: SimpleChanges){
    console.log('2. ngOnChanges')
    console.log(changes)
  }


  // ngOnInit
  ngOnInit(): void {
    console.log('3. ngOnInit')
  }


  // ngDoCheck
  ngDoCheck(): void {
    console.log('4. ngDoCheck')
  }


  // ngOnDestroy
  ngOnDestroy(): void {
    console.log('5. ngOnDestroy')
  }

  // Agregar Carrito

  addCart(){
    console.log('añadir al carrito')
    this.cartService.addCart(this.product)

    // Emitiendo id al componente app
    // this.productClicked.emit(this.product.id)
  }

}
