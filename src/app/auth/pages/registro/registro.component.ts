import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../../shared/validators/validaciones';
import { ValidatorsService } from '../../../shared/validators/validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  // TODO temporal

  constructor(private fb:FormBuilder, private validatorService:ValidatorsService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Romel Alexis',
      email:'test1@gmail.com',
      username:'romel',
    })
  }
  
  miFormulario:FormGroup=this.fb.group({
    nombre:['',[Validators.required,Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email:['',[Validators.required,Validators.pattern(this.validatorService.emailPattern)]],
    username:['',[Validators.required,this.validatorService.noPuedeSerStrider]],
  })

  campoNoValido(campo:string){
    return this.miFormulario.controls[campo]?.invalid && this.miFormulario.controls[campo].touched
  }

  campoRequerido(campo:string){
    return this.miFormulario.controls[campo].errors?.['required'] && this.miFormulario.controls[campo].touched
  }

  campoNoStrider(campo:string){
    return this.miFormulario.controls[campo].errors?.['noStrider'] && this.miFormulario.controls[campo].touched
  }

  submitForm(){
    if(this.miFormulario.invalid){
      console.log('Formulario invalido');
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }

}
