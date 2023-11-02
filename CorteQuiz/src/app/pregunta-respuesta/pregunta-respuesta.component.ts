import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta-respuesta',
  templateUrl: './pregunta-respuesta.component.html',
  styleUrls: ['./pregunta-respuesta.component.css']
})

export class PreguntaRespuestaComponent {
	url_api: string = "https://the-trivia-api.com/v2/questions/";

	constructor() {}

	pregunta: string = "";
	respuestaCorrecta: string = "";
	respuestasDesordenadas: string[] = [];
	posRespuestaCorrecta: number = -1;

	async getPreguntaRespuesta() {
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

	verificarRespuesta(posRespuestaElegida: number) {
		if (this.posRespuestaCorrecta === posRespuestaElegida) {
			alert("Correcta!");
		}
		else {
			alert("Respuesta incorrecta: Respuesta es " + this.respuestaCorrecta);
		}
		this.getPreguntaRespuesta();
	}
	
}

// LA API FUNCIONA PERFECTAMENTE

