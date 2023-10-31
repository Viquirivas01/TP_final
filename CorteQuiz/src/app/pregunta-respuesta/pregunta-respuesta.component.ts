/*import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta-respuesta',
  templateUrl: './pregunta-respuesta.component.html',
  styleUrls: ['./pregunta-respuesta.component.css']
})
export class PreguntaRespuestaComponent {

}
*/

// LA API FUNCIONA PERFECTAMENTE
let url_api = "https://the-trivia-api.com/v2/questions/";

async function getPreguntaRespuesta() {
    try {
		const response = await fetch(url_api);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
		}
		else {
			throw new Error("Codigo de error: " + response.status);
		}
	} catch (error) {
		console.error("Error! ", error);
	}
}

getPreguntaRespuesta();