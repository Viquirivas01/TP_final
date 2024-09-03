import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  private observer: any; // Guardar para usar luego para mandar datos

  public data$: Observable<boolean> = new Observable<boolean>((obs) => {
    this.observer = obs;

    return() => {
      console.log("Observable Unsuscribed");
    };
  });


  constructor() { }

  // Función que va a usar pregunta-respuestaComponent para actualizar la respuesta
  sendData(answer: boolean): void {
    if(this.observer) {
      this.observer.next(answer);
    }
  }


}
