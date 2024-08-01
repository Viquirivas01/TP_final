import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class noCreadoGuard  {
  constructor(
    private usuarioService: UsuariosService, 
    private router: Router
  ){  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('Guard activado');
    if (this.usuarioService.isLoggedIn()) {
      return true; // Usuario autenticado, permite el acceso a la ruta
    } else {
      // Redirige al componente de inicio de sesión si el usuario no está autenticado
      this.router.navigate(['/signup']);
      return this.router.parseUrl('/signup'); // Impide el acceso a la ruta
    }
  }
}
