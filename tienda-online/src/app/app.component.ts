import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tienda-online';

  items = ['nicolas', 'luciana', 'sonia']

  // Agregar Item

  addItem(){
    this.items.push('nuevo item')
  }

  // Eliminar Item

  deleteItem(index: number){
    this.items.splice(index, 1)
  }

}
