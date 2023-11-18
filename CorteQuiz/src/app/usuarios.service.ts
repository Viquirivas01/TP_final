import { Injectable } from '@angular/core';
import { usuarioRegistrado } from 'src/app/models/usuarioRegistrado';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  protected usuarioRegistradoList: usuarioRegistrado[] = [{"nombre": "Martin", "apellido": "Leonardi", "email": "mtnleonardi@gmail.com", "username": "mtnleo", "password": "Asd123"}]; // Cargo uno así ya está cargado y puedo hacer pruebas
  protected usuarioActual: usuarioRegistrado = new usuarioRegistrado;

  constructor() { }

  getUsuarioRegistradoList(): usuarioRegistrado[] {
    return this.usuarioRegistradoList;
  }

  getUsuarioActual(): usuarioRegistrado {
    return this.usuarioActual;
  }

  getUsuarioRegistradoLogin(usernameLogin: string, passwordLogin: string): usuarioRegistrado | undefined {
    return this.usuarioRegistradoList.find(usuarioRegistrado => usuarioRegistrado.username === usernameLogin && usuarioRegistrado.password === passwordLogin);
  }

  getUsuarioRegistradoRegister(usernameRegister: string, emailRegister: string): usuarioRegistrado | undefined {
    return this.usuarioRegistradoList.find(usuarioRegistrado => usuarioRegistrado.username === usernameRegister && usuarioRegistrado.email === emailRegister);
  }

  setUsuarioActual(nuevoUser: usuarioRegistrado): void {
    this.usuarioActual = nuevoUser;
  }

  isLogged(): boolean {
    if (this.usuarioActual.username === "") {
			return false;
		}
		else {
			return true;
		}
  }
}
