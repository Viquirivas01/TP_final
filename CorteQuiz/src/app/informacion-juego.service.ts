import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { usuarioRegistrado } from 'src/app/models/usuarioRegistrado';
import { UsuariosService } from 'src/app/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class InformacionJuegoService {
  private procesoCompletadoSubject = new BehaviorSubject<void>(undefined);
  partidaTerminada$ = this.procesoCompletadoSubject.asObservable();

  usuariosService: UsuariosService = inject(UsuariosService);

  protected modoJuego: number; /* 0 -> Contrarreloj
                                  1 -> Vidas
                                  2 -> Categoria
                                  3 -> Multijugador */

  protected dificultad: number; /* -1 -> Aleatorio
                                   0 -> Easy
                                   1 -> Medium
                                   2 -> Hard */

  protected preguntasCorrectas: number;   // TODOS modos
  protected preguntasIncorrectas: number; // TODOS modos menos VIDAS
  protected preguntasTotales: number;     // TODOS modos
  protected vidasRestantes: number;       // Solo modo VIDAS

  protected dificultadElegida: boolean; // si ya se eligió una dificultad

  constructor() {
    this.dificultad = -1; // CAMBIAR
    this.modoJuego = -1;
    this.preguntasCorrectas = 0;
    this.preguntasIncorrectas = 0;
    this.preguntasTotales = 0;
    this.vidasRestantes = 3;
    this.dificultadElegida = true;
  }

  notificarPartidaTerminada() {
    this.cargarDatosUsuarioActual();
    this.reiniciarDatos();
    this.procesoCompletadoSubject.next();
  }

  setDificultadElegida(elegida: boolean) { 
    this.dificultadElegida = elegida;
  }

  getDificultadElegida(): boolean { // get si ya se eligió la dificultad
    return this.dificultadElegida;
  }

  reiniciarDatos() {
    this.modoJuego = -1;
    this.preguntasCorrectas = 0;
    this.preguntasIncorrectas = 0;
    this.preguntasTotales = 0;
    this.dificultad = -1;
  }

  addCorrecta() {
    this.preguntasCorrectas+=1;
    this.preguntasTotales += 1;
  }

  addIncorrecta() {
    this.preguntasIncorrectas+=1;
    this.preguntasTotales += 1;
  }

  getPreguntasCorrectas() {
    return this.preguntasCorrectas;
  }

  getPreguntasIncorrectas() {
    return this.preguntasIncorrectas;
  }

  getPreguntasTotales() {
    return this.preguntasTotales;
  }

  restarVida() {
    this.preguntasTotales += 1;
    this.vidasRestantes -= 1;
  }

  setModoJuego(modoNum: number) {
    this.modoJuego = modoNum;
  }

  getVidas(): number {
    return this.vidasRestantes;
  }

  setVidas(): void {
    this.vidasRestantes = 3;
  }

  getModoJuego(): number {
    return this.modoJuego;
  }

  getDificultad() {
    return this.dificultad;
  }

  setDificultad(dif: number) {
    this.dificultad = dif;
  }

  cargarDatosUsuarioActual() {
    const usuarioActualCargar: usuarioRegistrado = this.usuariosService.getUsuarioActual();
    if (this.modoJuego === 0) { // CONTRARRELOJ
      usuarioActualCargar.partidas_jugadas_cr += 1;
      usuarioActualCargar.preguntas_correctas_cr += this.preguntasCorrectas;
      usuarioActualCargar.preguntas_incorrectas_cr += this.preguntasIncorrectas;
      if (this.preguntasCorrectas > usuarioActualCargar.preguntas_correctas_high_score_cr) {
        usuarioActualCargar.preguntas_correctas_high_score_cr = this.preguntasCorrectas;
      }
    }
    else if (this.modoJuego === 1) { // VIDAS
      usuarioActualCargar.partidas_jugadas_v += 1;
      usuarioActualCargar.preguntas_correctas_v += this.preguntasCorrectas;
      if (this.preguntasCorrectas > usuarioActualCargar.preguntas_correctas_high_score_v) {
        usuarioActualCargar.preguntas_correctas_high_score_v = this.preguntasCorrectas;
      }
    }
    else if (this.modoJuego === 2) { // CATEGORIAS
      usuarioActualCargar.partidas_jugadas_cat += 1;
      usuarioActualCargar.preguntas_correctas_cat += this.preguntasCorrectas;
      usuarioActualCargar.preguntas_incorrectas_cat += this.preguntasIncorrectas;
      if (this.preguntasCorrectas > usuarioActualCargar.preguntas_correctas_high_score_cat) {
        usuarioActualCargar.preguntas_correctas_high_score_cat = this.preguntasCorrectas;
      }

    }

    // CARGAR EN EL ARREGLO
    this.usuariosService.setUsuarioActual(usuarioActualCargar);
    this.usuariosService.actualizarArregloUsuarioActual(usuarioActualCargar);
    this.usuariosService.cargarLocalStorage();
  }
}
