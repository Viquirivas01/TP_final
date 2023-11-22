import { Component, OnInit, inject } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';
import { InformacionJuegoService } from 'src/app/informacion-juego.service';

import {
	trigger,
	state,
	style,
	animate,
	transition,
	// ...
  } from '@angular/animations';

@Component({
  selector: 'app-pregunta-respuesta',
  animations: [
    trigger('mostrarCorrecta', [
      // ...
      state('default', style({
        backgroundColor: "#0188a5",
      })),
      state('erronea', style({
        backgroundColor: "red",
      })),
	  state('acertada', style({
        backgroundColor: "green",
      })),
      transition('default => acertada', [
        animate('0.2s')
      ]),
      transition('default => erronea', [
        animate('0.2s')
      ]),
    ]),
  ],
  templateUrl: './pregunta-respuesta.component.html',
  styleUrls: ['./pregunta-respuesta.component.css']
})

export class PreguntaRespuestaComponent implements OnInit {
	url_api: string = "https://the-trivia-api.com/v2/questions/";

	usuariosService: UsuariosService = inject(UsuariosService);
	infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);

	constructor() {}

	isDefault: boolean = true;

	pregunta: string = "";
	respuestaCorrecta: string = "";
	respuestasDesordenadas: string[] = [];
	posRespuestaCorrecta: number = -1;

	//Los tres aumentan en Verificar respuesta
	correctas = 0;
	incorrectas = 0;
	preguntasTotales = 0;

	ngOnInit(){
		this.getPreguntaRespuesta();
	}

	async getPreguntaRespuesta() {
		
		let diffs = ["easy", "medium", "hard"];
		if (this.infoJuegoService.getDificultad() === -1) {
			try {
				const response = await fetch(this.url_api);
				if (response.ok) {
					const data = await response.json();
	
					this.isDefault = true;
					this.pregunta = data[0].question["text"];
					this.respuestaCorrecta = data[0].correctAnswer;
					this.desordenarRespuestas(data[0].incorrectAnswers);
					
				}
				else {
					throw new Error("Error status code: " + response.status);
				}
			} catch (error) {
				console.error("Error! ", error);
			}
		}
		else {
			let ok_diff = false;
			while (!ok_diff) { // Trata hasta que obtenga una de la dificultad especifica
				try {
					const response = await fetch(this.url_api);
					if (response.ok) {
						const data = await response.json();
		
						for (let preg of data) {
							if (preg.difficulty === diffs[this.infoJuegoService.getDificultad()] && !ok_diff) {
								this.isDefault = true;
								this.pregunta = preg.question["text"];
								this.respuestaCorrecta = preg.correctAnswer;
								this.desordenarRespuestas(preg.incorrectAnswers);

								console.log(preg.difficulty)
								ok_diff = true;
							}
						}
					}
					else {
						throw new Error("Error status code: " + response.status);
					}
				} catch (error) {
					console.error("Error! ", error);
				}
			}
		}
		
	}

	desordenarRespuestas(respuestasIncorrectas: string[]) {
		this.posRespuestaCorrecta = Math.floor(Math.random() * 4);
		this.respuestasDesordenadas[this.posRespuestaCorrecta] = this.respuestaCorrecta;
		let j: number = 0;
		for (let i = 0; i < 4; i++) {
			if (i !== this.posRespuestaCorrecta) {
				this.respuestasDesordenadas[i] = respuestasIncorrectas[j];
				j++;
			}
		}
	}

	verificarRespuesta(respuestaElegida: string) {
		if (this.respuestaCorrecta === respuestaElegida) {
			this.isDefault = false;
			this.infoJuegoService.addCorrecta();
			this.correctas++;

			// ANIMACION 
			this.isDefault = false;
		}
		else {
			this.infoJuegoService.addIncorrecta();
			this.incorrectas++;
			if (this.infoJuegoService.getModoJuego() === 1) {
				this.infoJuegoService.restarVida();
			} // si es three strikes

			// ANIMACION 
			this.isDefault = false;
		}
		this.preguntasTotales++;
		setTimeout(() => {
			this.getPreguntaRespuesta();
		}, 700); // para tener tiempo para ver la respuesta nomás
		
	}

	getCorrectaIncorrecta(respuesta: string): string {
		if (respuesta === this.respuestaCorrecta) {
			return "acertada";
		}
		else {
			return "erronea";
		}
	}
 

}

// LA API FUNCIONA PERFECTAMENTE

