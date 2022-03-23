import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre    : new FormControl('RTX4080TI'),
  //   precio    : new FormControl(1200),
  //   exitencias: new FormControl(10),
  // });
  miFormulario: FormGroup = this.fb.group({
    nombre: [,[Validators.required, Validators.minLength(3)]],
    precio: [,[Validators.required, Validators.min(0)]],
    existencias: [,[Validators.required, Validators.min(0)]],
  });

  constructor(private fb:FormBuilder) {}
  

  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre: 'RTX4080TI',
      precio: 1200,
      existencias: 10,
    })
  }

  campoNoValido(campo:string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched
  }
  minLength(campo:string){
    return this.miFormulario?.controls[campo]?.errors?.['minlength'] 
    && this.miFormulario.controls[campo].touched
  }
  minValue(campo:string){
    return this.miFormulario?.controls[campo]?.errors?.['min']
    && this.miFormulario.controls[campo].touched
  }
  guardar(){
    if(this.miFormulario.invalid){
      console.log('Formulario invalido');
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
