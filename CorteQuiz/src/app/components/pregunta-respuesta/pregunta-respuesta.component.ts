import { Component, OnInit, inject } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { InformacionJuegoService } from 'src/app/services/informacion-juego.service';
import { ObservablesService } from 'src/app/services/observables.service';

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
        backgroundColor: "#003688",
      })),
      state('erronea', style({
        backgroundColor: "#f92f60",
      })),
	  state('acertada', style({
        backgroundColor: "#00d26a",
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
	observablesService: ObservablesService = inject(ObservablesService);
	q_font_size: string;

	verificandoRespuesta: boolean = false;

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
		this.q_font_size = 'x-large'
		
		let diffs = ["easy", "medium", "hard"];
		if (this.infoJuegoService.getDificultad() === -1) {
			if (this.infoJuegoService.getModoJuego() === 2) { // ES CATEGORIAS
				let ok_cat = false;
			while (!ok_cat) { // Trata hasta que obtenga una de la dificultad especifica
				try {
					const response = await fetch(this.url_api);
					if (response.ok) {
						const data = await response.json();
		
						for (let preg of data) {
							if (preg.category === this.infoJuegoService.getCategoriaElegida() && !ok_cat) {
								this.isDefault = true;
								this.pregunta = preg.question["text"];

								/* TEXT SIZE */
								console.log(this.pregunta.length)
								if(this.pregunta.length > 70) {
									this.q_font_size = 'larger'; 
									console.log("ENTRA");
								}
								
								this.respuestaCorrecta = preg.correctAnswer;
								this.desordenarRespuestas(preg.incorrectAnswers);
								this.verificandoRespuesta = false;

								ok_cat = true;
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
			else { // NO ES CATEGORíAS
				try {
					const response = await fetch(this.url_api);
					if (response.ok) {
						const data = await response.json();
		
						
						this.isDefault = true;
						this.pregunta = data[0].question["text"];
						
						/* TEXT SIZE */
						console.log(this.pregunta.length)
						if(this.pregunta.length > 70) {
							this.q_font_size = 'larger'; 
							console.log("ENTRA");
						}

						this.respuestaCorrecta = data[0].correctAnswer;
						this.desordenarRespuestas(data[0].incorrectAnswers);
						this.verificandoRespuesta = false;
						
					}
					else {
						throw new Error("Error status code: " + response.status);
					}
				} catch (error) {
					console.error("Error! ", error);
				}
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

								/* TEXT SIZE */
								console.log(this.pregunta.length)
								if(this.pregunta.length > 70) {
									this.q_font_size = 'larger'; 
									console.log("ENTRA");
								}

								this.respuestaCorrecta = preg.correctAnswer;
								this.desordenarRespuestas(preg.incorrectAnswers);
								this.verificandoRespuesta = false;
								ok_diff = true;

								console.log(preg.difficulty);
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
		this.verificandoRespuesta = true;
		let modoJuego = this.infoJuegoService.getModoJuego();

		if (this.respuestaCorrecta === respuestaElegida) {
			this.isDefault = false;
			this.infoJuegoService.addCorrecta();
			this.correctas++;

			if(modoJuego === 3) { // si es multiplayer, notificar al observable respuesta correcta
				this.observablesService.sendData(true);
			}

			// ANIMACION 
			this.isDefault = false;
		}
		else {
			this.infoJuegoService.addIncorrecta();
			this.incorrectas++;
			
			if (modoJuego === 1 || modoJuego === 2) {
				this.infoJuegoService.restarVida();
			} // si es three strikes ó categorías

			if(modoJuego === 3) { // si es multiplayer, notificar al observable respuesta errónea
				this.observablesService.sendData(false);
			}

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

