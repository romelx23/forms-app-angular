import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [
  ]
})
export class MuestraNombreComponent implements OnInit,OnChanges, DoCheck, AfterContentInit, AfterViewInit,AfterViewChecked,OnDestroy,AfterContentChecked {

  nombre:string='romel';
  segundos:number=0;
  timerSubcription!:Subscription
  @Input() nombreInput!:string;


  constructor() { 
    console.log('constructor')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log('ngOnInit')
    this.timerSubcription=interval(1000).subscribe(i=>{
      this.segundos=i
    })
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy -Timer limpiado');
    this.timerSubcription.unsubscribe()
  }

  ngAfterViewChecked(): void {
    // Se ejecuta al final del ciclo de detección de cambios
    console.log('ngAfterViewChecked');
  }

  ngAfterContentChecked(): void {
    //Se ejecuta inmediatamente después de que el detector de cambios predeterminado haya terminado de comprobar todo el contenido de la directiva.
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterContentInit(): void {
    // 
    console.log('ngAfterContentInit');
  }

  ngDoCheck(): void {
    // Se ejecuta al iniciar el ciclo de detección de cambios
    console.log('ngDoCheck');
  }

  guardar(){
    console.log('guardar');
  }

}
