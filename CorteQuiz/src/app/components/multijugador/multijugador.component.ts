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

  terminado: boolean
  faCircle = faCircle;

  constructor() {

  }

  ngOnInit(): void {
    this.infoJuegoService.setDificultadElegida(false); // Promptea que elija dificultad
    this.infoJuegoService.setModoJuego(3); // Le avisa que es el modo de juego de Multiplayer

    

    this.terminado = false;
  }
}
