import { Component, OnInit, inject } from '@angular/core';
import { UsuariosService } from 'src/app/usuarios.service';
import { InformacionJuegoService } from 'src/app/informacion-juego.service';

@Component({
  selector: 'app-pregunta-respuesta',
  templateUrl: './pregunta-respuesta.component.html',
  styleUrls: ['./pregunta-respuesta.component.css']
})

export class PreguntaRespuestaComponent implements OnInit {
	url_api: string = "https://the-trivia-api.com/v2/questions/";

	usuariosService: UsuariosService = inject(UsuariosService);
	infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);

	constructor() {}

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
			alert("Correcta!");
			this.infoJuegoService.addCorrecta();
			this.correctas++;
		}
		else {
			alert("Respuesta incorrecta: Respuesta es " + this.respuestaCorrecta);
			this.infoJuegoService.addIncorrecta();
			this.incorrectas++;
			if (this.infoJuegoService.getModoJuego() === 1) {
				this.infoJuegoService.restarVida();
			} // si es three strikes
		}
		this.preguntasTotales++;
		this.getPreguntaRespuesta();
	}


}

// LA API FUNCIONA PERFECTAMENTE

