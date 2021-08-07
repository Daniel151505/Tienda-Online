// Necesario Importar
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    // Necesario Importar
    CommonModule,
    HomeRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
