import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from '../../services/paises.service';
import { PaisSmall, Pais } from '../../interfaces/paises.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [],
})
export class SelectorPageComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    pais: ['', [Validators.required]],
    frontera: ['', [Validators.required]],
  });

  // Llenar selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  // fronteras: string[] = [];
  fronteras: PaisSmall[] = [];

  cargando: boolean=false;

  constructor(private fb: FormBuilder, private paisesService: PaisesService) {}

  ngOnInit(): void {
    this.regiones = this.paisesService.regiones;
    // cuando cambie la region
    // this.miFormulario.get('region')?.valueChanges
    // .subscribe(region=>{
    //   // console.log(region);
    //   this.paisesService.getPaisesPorRegion(region)
    //   .subscribe(paises=>{
    //     this.paises=paises;
    //   })
    // })
    // cuando cambia la region
    this.miFormulario
      .get('region')
      ?.valueChanges.pipe(
        tap((_) => {
          this.paises=[];
          this.miFormulario.get('pais')?.reset('');
          this.cargando=true;
        }),
        switchMap((region) => this.paisesService.getPaisesPorRegion(region))
      )
      .subscribe((paises) => {
        console.log(paises);
        this.paises = paises;
        this.cargando=false;
      });
    // cuando cambia el pais
    this.miFormulario
      .get('pais')
      ?.valueChanges.pipe(
        tap(()=>{
          this.fronteras=[];
          this.miFormulario.get('frontera')?.reset('');
          this.cargando=true;
        }),
        switchMap((codigo) => this.paisesService.getPaisPorCodigo(codigo)),
        switchMap((pais)=>this.paisesService.getPaisesPorCodigos(pais?.[0].borders!))
      )
      .subscribe((paises) => {
        if (paises === null) return;
        // console.log(pais[0].borders);
        this.fronteras = paises || [];
        console.log(paises);
        this.cargando=false;
      });
  }

  guardar() {
    console.log(this.miFormulario.value);
  }
}
