import { Component, inject } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { usuarioRegistrado } from 'src/app/models/usuarioRegistrado';

@Component({
  selector: 'app-prueba-ver-usuarios',
  templateUrl: './prueba-ver-usuarios.component.html',
  styleUrls: ['./prueba-ver-usuarios.component.css']
})
export class PruebaVerUsuariosComponent {
	usuariosService: UsuariosService = inject(UsuariosService);

	usuarioActual: usuarioRegistrado = new usuarioRegistrado; // El usuario que está registrado ahora
	usuarioRegistradoList: usuarioRegistrado[] = [];

	constructor() {
		this.usuarioActual = this.usuariosService.getUsuarioActual();
		this.usuarioRegistradoList = this.usuariosService.getUsuarioRegistradoList();
	}
}
