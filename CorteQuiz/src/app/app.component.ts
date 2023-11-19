import { Component, inject } from '@angular/core';

import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuariosService: UsuariosService = inject(UsuariosService);

  title = 'CorteQuiz';
}
