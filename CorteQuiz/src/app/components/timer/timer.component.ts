import { Component, OnInit, inject } from '@angular/core';
import { InformacionJuegoService } from 'src/app/informacion-juego.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit {
  tiempoString: string = ""; // Para que se muestren los 0
  tiempo: number = 60;
  infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);

  constructor(){}

  ngOnInit(){
    this.empezarTemporizador()
  }

  empezarTemporizador(){
    if(this.tiempo > 0){
      this.tiempo--;
      if (this.tiempo < 10) {
        this.tiempoString = "0" + String(this.tiempo);
      }
      else {
        this.tiempoString = String(this.tiempo);
      }
      
      setTimeout(() => {this.empezarTemporizador();
      }, 1000);

    }
    else{
      this.infoJuegoService.cargarDatosUsuarioActual();
      this.infoJuegoService.reiniciarDatos();
      alert('Ha finalizado el tiempo de juego');
    }
  }
}
