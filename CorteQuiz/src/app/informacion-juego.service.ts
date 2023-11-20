import { Injectable, inject } from '@angular/core';
import { usuarioRegistrado } from 'src/app/models/usuarioRegistrado';
import { UsuariosService } from 'src/app/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class InformacionJuegoService {
  usuariosService: UsuariosService = inject(UsuariosService);

  protected modoJuego: number; /* 0 -> Contrarreloj
                                  1 -> Vidas
                                  2 -> Categoria
                                  3 -> Multijugador */

  protected preguntasCorrectas: number;   // TODOS modos
  protected preguntasIncorrectas: number; // TODOS modos menos VIDAS
  protected preguntasTotales: number;     // TODOS modos
  protected vidasRestantes: number;       // Solo modo VIDAS

  constructor() {
    this.modoJuego = -1;
    this.preguntasCorrectas = 0;
    this.preguntasIncorrectas = 0;
    this.preguntasTotales = 0;
    this.vidasRestantes = 3;
  }

  reiniciarDatos() {
    this.modoJuego = -1;
    this.preguntasCorrectas = 0;
    this.preguntasIncorrectas = 0;
    this.preguntasTotales = 0;
    this.vidasRestantes = 3;
  }

  addCorrecta() {
    this.preguntasCorrectas+=1;
    this.preguntasTotales += 1;
  }

  addIncorrecta() {
    this.preguntasIncorrectas+=1;
    this.preguntasTotales += 1;
  }

  restarVida() {
    this.preguntasTotales += 1;
    this.vidasRestantes -= 1;
  }

  setModoJuego(modoNum: number) {
    this.modoJuego = modoNum;
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
