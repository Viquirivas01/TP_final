import { Component, OnInit, inject } from '@angular/core';
import { InformacionJuegoService } from 'src/app/informacion-juego.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit{
  infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);

  modo_juego: number = -1;
  jugar: boolean = true;
  perfil: boolean = false;
  visual: boolean = true;
  dificultad_elegida: boolean = true;

  constructor(){}
  ngOnInit(){}

  comenzar(modo_seleccionado: number){
      this.infoJuegoService.setDificultadElegida(false);
      this.modo_juego = modo_seleccionado;
      this.jugar=false;
      this.visual=false;
      this.infoJuegoService.setModoJuego(modo_seleccionado);
  }
/*
  finalizar(){
    this.modo_juego = -1;
    this.jugar=true;
    this.visual=true;
    this.infoJuegoService.cargarDatosUsuarioActual();
    this.infoJuegoService.reiniciarDatos();
  }
*/
  entrarPerfil() {
    this.jugar = !this.jugar;
    this.perfil = !this.perfil;
  }
}