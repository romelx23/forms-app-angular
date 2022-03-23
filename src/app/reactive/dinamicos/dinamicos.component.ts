import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ],Validators.required),
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  minLength(campo: string) {
    return (
      this.miFormulario.controls[campo].errors?.['minlength'] &&
      this.miFormulario.controls[campo].touched
    );
  }
  campoNoValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors?.['required'] &&
      this.miFormulario.controls[campo].touched
    );
  }
  minValue(campo: string) {
    return (
      this.miFormulario.controls[campo].errors?.['min'] &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    if (this.miFormulario.invalid) {
      console.log('Formulario invalido');
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    // this.miFormulario.reset();
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid){return;}
    // this.nuevoFavorito = new FormControl(this.nuevoFavorito.value, Validators.required);
    const nuevoFavorito2 = this.fb.control(this.nuevoFavorito.value, Validators.required);
    this.favoritosArr.push(nuevoFavorito2);
    this.nuevoFavorito.reset();
  }
  borrarFavorito(i:number){
    this.favoritosArr.removeAt(i);
  }

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
