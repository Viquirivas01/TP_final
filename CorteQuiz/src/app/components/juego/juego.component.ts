import { Component, OnInit, inject, Input, numberAttribute } from '@angular/core';
import { InformacionJuegoService } from 'src/app/services/informacion-juego.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit{
  infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);

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

  }

  finalizar(){
    this.infoJuegoService.setDificultadElegida(true);
  }

}