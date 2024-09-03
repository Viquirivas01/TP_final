import { Component, inject } from '@angular/core';
import { InformacionJuegoService } from 'src/app/services/informacion-juego.service';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-multijugador',
  templateUrl: './multijugador.component.html',
  styleUrls: ['./multijugador.component.css']
})

export class MultijugadorComponent {
  infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);

  terminado: boolean;
  faCircle = faCircle;

  // Main game
  turn: number;  // Who's playing: 1 or 2
  round: number; 
  score_p1: number;
  score_p2: number;

  constructor() {

  }

  ngOnInit(): void {
    this.infoJuegoService.setDificultadElegida(false); // Promptea que elija dificultad
    this.infoJuegoService.setModoJuego(3); // Le avisa que es el modo de juego de Multiplayer

    

    this.terminado = false;
  }
}
