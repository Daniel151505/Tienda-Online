// Necesario Importar
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ContactComponent } from './components/contact/contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    // Necesario Importar
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: []
})
export class ContactModule { }
