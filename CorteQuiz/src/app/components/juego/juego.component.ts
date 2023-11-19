import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit{

  modo_juego: number = -1;
  jugar: boolean = true;
  perfil: boolean = false;
  visual: boolean = true;

  constructor(){}
  ngOnInit(){}

  comenzar(modo_seleccionado: number){
      this.modo_juego = modo_seleccionado;
      this.jugar=false;
      this.visual=false;
  }

  finalizar(){
    this.modo_juego = -1;
    this.jugar=true;
    this.visual=true;
  }

  entrarPerfil() {
    this.jugar = !this.jugar;
    this.perfil = !this.perfil;
  }
}
