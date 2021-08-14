// Necesario Importar
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DemoComponent } from './components/demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    // Necesario Importar
    CommonModule,
    DemoRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class DemoModule { }
