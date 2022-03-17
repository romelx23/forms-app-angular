import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre:string;
  favoritos:Favorito[]
}

interface Favorito{
  id:number;
  nombre:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  nuevoJuego:string='';

  @ViewChild('miFormulario') miFormulario!: NgForm;

  persona:Persona = {
    nombre: 'Romel',
    favoritos: [
      {id:1, nombre:'Metal Gear'},
      {id:2, nombre:'DeathStranding'},
    ]
  };

  nombreValido(){
    return this.miFormulario?.controls['name']?.errors?.['minlength'] &&
      this.miFormulario?.controls['name']?.touched
  }

  nombreRequerido(){
    return this.miFormulario?.controls['name']?.errors && this.miFormulario?.controls['name'].touched
  }

  guardar(){
    console.log(this.miFormulario)
  }

  eliminar(i:number){
    this.persona.favoritos.splice(i,1)
  }
  agregarJuego(){
    const nuevoFavorito:Favorito={
      id:this.persona.favoritos.length + 1,
      nombre:this.nuevoJuego
    }
    this.persona.favoritos.push({...nuevoFavorito})
    this.nuevoJuego='';
    console.log('disparo')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
