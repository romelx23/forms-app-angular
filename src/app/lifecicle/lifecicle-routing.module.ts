import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifeComponent } from './pages/life/life.component';

const routes: Routes = [{
  path:'',
  children:[
    {path:'life',component:LifeComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LifecicleRoutingModule { }
