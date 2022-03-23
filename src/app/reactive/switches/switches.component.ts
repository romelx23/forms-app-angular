import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario:FormGroup=this.fb.group({
    genero:['M',Validators.required],
    notificaciones:[true,Validators.required],
    terminos:[false,Validators.requiredTrue]
  })

  persona={
    genero:'F',
    notificaciones:true,
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.persona,
      terminos:false
    })
    // this.miFormulario.get('terminos')?.valueChanges.subscribe(valor=>{
    //   console.log(valor)
    // })
    // dispara en tiempo real los cambios de mi formulario
    this.miFormulario.valueChanges.subscribe(({terminos,...rest})=>{
      // delete form.terminos;
      this.persona=rest;
      console.log(rest)
    })

  }
  guardar(){

    const formValue={...this.miFormulario.value}
    this.persona=formValue;
    console.log(formValue)

  }

}
