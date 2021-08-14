import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



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
        canActivate: [AdminGuard],
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        canActivate: [AdminGuard],
        loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule)
      },
      {
        path : 'demo',
        canActivate: [AdminGuard],
        loadChildren: () => import ('./components/demo/demo.module').then(c => c.DemoModule)
      },
      {
        path : 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import ('./components/contact/contact.module').then(c => c.ContactModule)
      }
    ]
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
