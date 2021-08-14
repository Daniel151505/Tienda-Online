import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DemoComponent } from "./components/demo.component";


const routes: Routes = [
  {
    path: '',
    component: DemoComponent
  }
];

@NgModule({
  // forChild rutas hijas
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
