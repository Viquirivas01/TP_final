import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit {
  tiempoString: string = ""; // Para que se muestren los 0
  tiempo: number = 60;

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
      alert('Ha finalizado el tiempo de juego');
    }
  }
}
