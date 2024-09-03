import { Component, inject } from '@angular/core';
import { InformacionJuegoService } from 'src/app/services/informacion-juego.service';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { ObservablesService } from 'src/app/services/observables.service';
import { last } from 'rxjs';


@Component({
  selector: 'app-multijugador',
  templateUrl: './multijugador.component.html',
  styleUrls: ['./multijugador.component.css']
})

export class MultijugadorComponent {
  infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);
  observablesService: ObservablesService = inject(ObservablesService);

  terminado: boolean;
  faCircle = faCircle;

  // Main game
  turn: number;  // Who's playing: 1 or -1
  round: number; // Round
  curRound: number; // Current round from 1 to 5
  score_p1: number;
  score_p2: number;
  winner: string;

  coloresPlayer1: { [id: string]: string } = {
    'p1_1': '#EEEEEE',
    'p1_2': '#EEEEEE',
    'p1_3': '#EEEEEE',
    'p1_4': '#EEEEEE',
    'p1_5': '#EEEEEE'
  }

  coloresPlayer2: { [id: string]: string } = {
    'p2_1': '#EEEEEE',
    'p2_2': '#EEEEEE',
    'p2_3': '#EEEEEE',
    'p2_4': '#EEEEEE',
    'p2_5': '#EEEEEE'
  }

  copyColoresPlayer2: { [id: string]: string } = { // To come back to this if they're in a draw
    'p2_1': '#EEEEEE',
    'p2_2': '#EEEEEE',
    'p2_3': '#EEEEEE',
    'p2_4': '#EEEEEE',
    'p2_5': '#EEEEEE'
  }

  copyColoresPlayer1: { [id: string]: string } = {
    'p1_1': '#EEEEEE',
    'p1_2': '#EEEEEE',
    'p1_3': '#EEEEEE',
    'p1_4': '#EEEEEE',
    'p1_5': '#EEEEEE'
  }

  constructor() {
    
  }

  ngOnInit(): void {
    this.turn = 1;
    this.round = 1;
    this.curRound = 1;
    this.score_p1 = 0;
    this.score_p2 = 0;

    this.infoJuegoService.setDificultadElegida(false); // Promptea que elija dificultad
    this.infoJuegoService.setModoJuego(3); // Le avisa que es el modo de juego de Multiplayer

    // Suscribirse al observable para saber el estado de la respuesta
    this.observablesService.data$.subscribe(answer => {
      this.updateScore(answer);
    })

    this.terminado = false;
  }

  updateScore(lastAnswer: boolean):void {
    console.log("La respuesta es ", lastAnswer);
    // CHECK IF I SHOULD CHANGE THE ROUND COLORS
    if(this.curRound > 5) {
      this.curRound = 1;
      this.coloresPlayer1 = this.copyColoresPlayer1;
      this.coloresPlayer2 = this.copyColoresPlayer2;
    }

    if(lastAnswer) { // if it's right (true)
      if (this.turn === 1) {
        this.score_p1++ 

        this.coloresPlayer1['p1_' + this.curRound] = 'palegreen';
      }
      else {
        this.score_p2++ 

        this.coloresPlayer1['p2_' + this.curRound] = 'palegreen';
      };
    } 
    else { // if it's wrong
      if (this.turn === 1) {
        this.coloresPlayer1['p1_' + this.curRound] = 'tomato';
      }
      else {
        this.coloresPlayer1['p2_' + this.curRound] = 'tomato';
      };
    }

    console.log("Player 1 -> ", this.score_p1, "\nPlayer 2 -> ", this.score_p2, "\nTurn -> ", this.turn, "   |    Round Number -> ", this.curRound);
    this.turn = this.turn * (-1); // Turno del otro jugador
    if(this.turn === 1) {
      this.round++;
      this.curRound++;
    }

    this.checkWin();
    
  }

  checkWin(): void {
    if (this.round > 6 && this.turn === 1) {
      if (this.score_p1 > this.score_p2) {
        this.winner = "Player 1";
        this.terminado = true;
      }
      else if (this.score_p2 > this.score_p1) {
        this.winner = "Player 2";
        this.terminado = true;
      }
    }
    else if (this.round === 6 && this.turn === 1) {
      if (this.score_p1 > this.score_p2) {
        this.winner = "Player 1";
        this.terminado = true;
      }
      else if (this.score_p2 > this.score_p1) {
        this.winner = "Player 2";
        this.terminado = true;
      }
    }
    console.log(this.winner);
  }

}
