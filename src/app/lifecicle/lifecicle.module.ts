import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecicleRoutingModule } from './lifecicle-routing.module';
import { LifeComponent } from './pages/life/life.component';
import { MuestraNombreComponent } from './components/muestra-nombre/muestra-nombre.component';
import { LifecontainerComponent } from './components/lifecontainer/lifecontainer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LifeComponent,
    MuestraNombreComponent,
    LifecontainerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    LifecicleRoutingModule
  ]
})
export class LifecicleModule { }
