import { Component, inject } from '@angular/core';
import { usuarioRegistrado } from 'src/app/models/usuarioRegistrado';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  usuariosService: UsuariosService = inject(UsuariosService);

  usuarioActual: usuarioRegistrado = this.usuariosService.getUsuarioActual();

  logOut(){
    console.log(this.usuarioActual);
   this.usuariosService.setLogout();
   console.log(this.usuarioActual);
  }
}
