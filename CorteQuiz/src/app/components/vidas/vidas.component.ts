import { Component, OnInit, inject } from '@angular/core';
import { InformacionJuegoService } from 'src/app/services/informacion-juego.service';

@Component({
  selector: 'app-vidas',
  templateUrl: './vidas.component.html',
  styleUrls: ['./vidas.component.css']
})
export class VidasComponent implements OnInit{
  infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);

  vidas: number;
  terminado: boolean;

  constructor() {}

  ngOnInit(): void {
    this.terminado = false;
    this.vidas = 3;
    this.infoJuegoService.setVidas();
    this.empezarThreeStrikes();
  }

  empezarThreeStrikes() {
    if (this.infoJuegoService.getVidas() > 0) {

      setTimeout(() => {this.empezarThreeStrikes();
      }, 500);
    }
    else {
      setTimeout(() =>{ this.terminado = true;}, 500);
    }
  }

  /*
  restarVida(){
    this.vidas=this.vidas-1;
    this.infoJuegoService.restarVida();
  }
  */
}
