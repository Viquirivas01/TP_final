import { Component, OnInit, inject, Input, numberAttribute } from '@angular/core';
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
  visual: boolean = true;
  dificultad_elegida: boolean = true;
  

  constructor(private getNotificacion: InformacionJuegoService){
    this.getNotificacion.partidaTerminada$.subscribe(() => {
      this.finalizar();
     });
  }
  ngOnInit(){}

  comenzar(modo_seleccionado: number){
    if (modo_seleccionado < 2) {
      this.infoJuegoService.setDificultadElegida(false);
    }
      
    this.infoJuegoService.setModoJuego(modo_seleccionado);
    this.modo_juego = modo_seleccionado;
    this.jugar=false;
    this.visual=false;
  }

  finalizar(){
    console.log("corre");
    this.modo_juego = -1;
    this.jugar=true;
    this.visual=true;
    this.infoJuegoService.setDificultadElegida(true);
  }

  entrarPerfil() {
    this.jugar = !this.jugar;
    this.infoJuegoService.setPerfilAbierto(!this.infoJuegoService.isPerfilAbierto());
  }
}