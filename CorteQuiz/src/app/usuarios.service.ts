import { Injectable } from '@angular/core';
import { usuarioRegistrado } from 'src/app/models/usuarioRegistrado';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  protected usuarioRegistradoList: usuarioRegistrado[] = []; // Cargo uno así ya está cargado y puedo hacer pruebas
  protected usuarioActual: usuarioRegistrado = new usuarioRegistrado;

  constructor() {
    const usrRegList = localStorage.getItem("usuarioRegistradoList");
    this.usuarioRegistradoList = usrRegList ? JSON.parse(usrRegList) : [];

    const usrAct = localStorage.getItem("usuarioActual");
    this.usuarioActual = usrAct ? JSON.parse(usrAct) : [];
  }

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
    this.cargarLocalStorage();
  }

  actualizarArregloUsuarioActual(usuarioActualizar: usuarioRegistrado): void {
    let index_buscado: number = -1;
    let i = 0;
    for (let user of this.usuarioRegistradoList) {
      if (user.username === usuarioActualizar.username) {
        index_buscado = i;
        break;
      }
      i++;
    }

    (this.usuarioRegistradoList)[index_buscado] = usuarioActualizar;
    this.cargarLocalStorage();
  }
 
  cargarLocalStorage(): void {
    localStorage.setItem("usuarioRegistradoList", JSON.stringify(this.usuarioRegistradoList));
    localStorage.setItem("usuarioActual", JSON.stringify(this.usuarioActual));
  }

  isLogged(): boolean {
    if (this.usuarioActual.username === "" || this.usuarioActual.username === undefined) {
			return false;
		}
		else {
			return true;
		}
  }

  isLoggedIn ():boolean{
		const isLoggedIn = localStorage.getItem('1') !== null
		console.log('usuario autenticado ', isLoggedIn)
		return isLoggedIn
	}

}
