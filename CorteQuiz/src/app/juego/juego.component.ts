import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit{

  start: number = 0;
  jugar: boolean = true;

  constructor(){}
  ngOnInit(){}

  comenzar(){
      this.start=1;
      this.jugar=false;
  }

  finalizar(){
    this.start=0;
    this.jugar=true;
  }
}
