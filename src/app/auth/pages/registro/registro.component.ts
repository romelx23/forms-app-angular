import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  nombreApellidoPattern,
  emailPattern,
  noPuedeSerStrider,
} from '../../../shared/validators/validaciones';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [],
})
export class RegistroComponent implements OnInit {

  // emailErrorMsg:string=''; 
  get emailErrorMsg():string{
    const errors=this.miFormulario.get('email')?.errors;
    if(errors?.['required']){
      return 'El campo es requerido';
    }else if(errors?.['pattern']){
      return 'El formato no es correcto';
    }else if(errors?.['emailTomado']){
      return 'El email ya esta tomado';
    }
    return '';
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService,
    private emailValidator: EmailValidatorService,
  ) {}

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Romel Alexis',
      email: 'test1@test.com',
      username: 'romel',
      password: '123456',
      password2: '123456',
    });
  }

  miFormulario: FormGroup = this.fb.group({
    nombre: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorService.nombreApellidoPattern),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(this.validatorService.emailPattern),
      ],
      [
        this.emailValidator
      ]
    ],
    username: [
      '',
      [Validators.required, this.validatorService.noPuedeSerStrider],
    ],
    password: [
      '',
      [Validators.required,Validators.minLength(6)],
    ],
    password2: [
      '',
      [Validators.required],
    ]},{
      validators:[this.validatorService.camposIguales('password','password2')]
    });

  campoNoValido(campo: string) {
    return (
      this.miFormulario.controls[campo]?.invalid &&
      this.miFormulario.controls[campo].touched
    );
  }

  campoMinLength(campo: string) {
    return (
      this.miFormulario.controls[campo]?.errors?.['minlength'] &&
      this.miFormulario.controls[campo].touched
    );
  }

  campoRequerido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors?.['required'] &&
      this.miFormulario.controls[campo].touched
    );
  }

  campoNoStrider(campo: string) {
    return (
      this.miFormulario.controls[campo].errors?.['noStrider'] &&
      this.miFormulario.controls[campo].touched
    );
  }
  emailRquired(){
    return this.miFormulario.get('email')?.errors?.['required'] &&
    this.miFormulario.get('email')?.touched
  }

  emailFormato(){
    return this.miFormulario.get('email')?.errors?.['pattern'] &&
    this.miFormulario.get('email')?.touched
  }
  emailTomado(){
    return this.miFormulario.get('email')?.errors?.['emailTomado'] &&
    this.miFormulario.get('email')?.touched
  }

  submitForm() {
    if (this.miFormulario.invalid) {
      console.log('Formulario invalido');
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }
}
