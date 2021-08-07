import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { DemoComponent } from './components/demo/demo.component';
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
      // Importa el home.module y lee todo lo que esta
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
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
  // Importando preloadingStrategy: PreloadAllModules paa que ya tenga los modulos cargados
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
