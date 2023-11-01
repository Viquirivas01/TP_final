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
	respuestasIncorrectas: string[] = [];

	async getPreguntaRespuesta() {
		try {
			const response = await fetch(this.url_api);
			if (response.ok) {
				const data = await response.json();

				this.pregunta = data[0].question["text"];
				this.respuestaCorrecta = data[0].correctAnswer;
				this.respuestasIncorrectas = data[0].incorrectAnswers;
			}
			else {
				throw new Error("Error status code: " + response.status);
			}
		} catch (error) {
			console.error("Error! ", error);
		}
	}
	
}

// LA API FUNCIONA PERFECTAMENTE

