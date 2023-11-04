import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent implements OnInit {

  tiempo: number = 60;

  constructor(){}

  ngOnInit(){
    this.empezarTemporizador()
  }

  empezarTemporizador(){
    if(this.tiempo > 0){
      this.tiempo--;
      setTimeout(() => {this.empezarTemporizador();
      }, 1000);

    }
    else{
      alert('A finalizado el tiempo de juego');
    }
  }
}
