import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
    `
      :host {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'Rtx 4080ti',
    precio: 10,
    existencia: 10,
  };

  constructor() {}

  ngOnInit(): void {}

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls['producto']?.errors?.['minlength'] &&
      this.miFormulario?.controls['producto']?.touched
    );
  }
  existenCampos(): boolean {
    return (
      this.miFormulario?.controls['producto']?.errors?.['required'] &&
      this.miFormulario?.controls['producto']?.touched
    );
  }

  precioValido(): boolean {
    return (
      this.miFormulario?.controls['precio']?.errors?.['min'] &&
      this.miFormulario?.controls['precio']?.touched
    );
  }

  // guardar(miFormulario:NgForm){
  guardar() {
    // console.log(this.miFormulario);
    console.log('Posteo correcto');
    this.miFormulario.resetForm({
      precio: 0,
      existencia: 0,
    });
  }
}
