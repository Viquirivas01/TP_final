import { Component, inject } from '@angular/core';
import { InformacionJuegoService } from 'src/app/services/informacion-juego.service';


@Component({
  selector: 'app-multijugador',
  templateUrl: './multijugador.component.html',
  styleUrls: ['./multijugador.component.css']
})

export class MultijugadorComponent {
  infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);

  terminado: boolean

  constructor() {

  }

  ngOnInit(): void {
    this.infoJuegoService.setDificultadElegida(false); // Promptea que elija dificultad
    /* CAMBIAR */ this.infoJuegoService.setModoJuego(3); // Le avisa que es el modo de juego de Three Strikes ## CAMBIAR ##

    this.terminado = false;
  }
}
