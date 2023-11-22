import { Component, inject } from '@angular/core';
import { InformacionJuegoService } from 'src/app/informacion-juego.service';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-modal-game-over',
  templateUrl: './modal-game-over.component.html',
  styleUrls: ['./modal-game-over.component.css']
})
export class ModalGameOverComponent {
  infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);
  
	usuariosService: UsuariosService = inject(UsuariosService);

  getHighScore(): number {
    let modoJuego: number = this.infoJuegoService.getModoJuego();
    let retorno: number = 0;
    if (modoJuego === 0) {
      retorno = this.usuariosService.getUsuarioActual().preguntas_correctas_high_score_cr;
    }
    else if (modoJuego === 1) {
      retorno = this.usuariosService.getUsuarioActual().preguntas_correctas_high_score_v;
    } 
    else if (modoJuego === 2) {
      retorno = this.usuariosService.getUsuarioActual().preguntas_correctas_high_score_cat;
    }
    return retorno;
  }
}
