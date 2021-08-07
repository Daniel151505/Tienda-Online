import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

// Creando rutas en Angular

const routes: Routes = [

  {
    path:'',
    component:LayoutComponent,
    // Rutas hijos
    children: [
      // Redireccionamiento automatico
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      //Redireccionamiento a producto de acuerdo al id
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path : 'contact',
        component: ContactComponent
      }
    ]
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  //Redireccionamiento a producto de acuerdo al id
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path : 'contact',
    component: ContactComponent
  },
  {
    path: 'demo',
    component: DemoComponent
  },

  // Redireccionamiento cuando la ruta esta mal
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
