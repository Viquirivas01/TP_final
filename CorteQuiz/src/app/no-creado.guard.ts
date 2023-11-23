import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsuariosService } from './usuarios.service'; 

@Injectable({
  providedIn: 'root'
})
export class noCreadoGuard implements CanActivate {
  constructor(
    private usuarioService: UsuariosService, 
    private router: Router 
  ){  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('Guard activado');
    if (this.usuarioService.isLoggedIn()) {
      return true; // Usuario autenticado, permite el acceso a la ruta
    } else {
      // Redirige al componente de inicio de sesión si el usuario no está autenticado
      this.router.navigate(['/login']);
      return false; // Impide el acceso a la ruta
    }
  }
}
