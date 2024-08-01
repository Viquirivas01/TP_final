import { Component, inject } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { InformacionJuegoService } from 'src/app/services/informacion-juego.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuariosService: UsuariosService = inject(UsuariosService);
  infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);

  title = 'CorteQuiz';
  faUser = faUser;
  faQuestion = faQuestion;
}
