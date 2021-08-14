import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'tienda-online';

  items = ['nicolas', 'luciana', 'sonia']

  power = 10

  constructor() { }

  ngOnInit(): void {
  }

  // No se pueden iterar array
  objeto = {};

  // Agregar Item

  addItem(){
    this.items.push('nuevo item')
  }

  // Eliminar Item

  deleteItem(index: number){
    this.items.splice(index, 1)
  }

  clickProduct(id:number){
    console.log('product')
    console.log(id)
  }



}
