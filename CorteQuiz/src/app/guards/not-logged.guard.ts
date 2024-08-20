import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { map, take } from 'rxjs/operators';

export const notLoggedGuard: CanActivateFn = (route, state) => {
  const usuariosService = inject(UsuariosService);
  const router = inject(Router);
  
  return usuariosService.isLoggedIn().pipe(
    take(1),
    map(isLoggedIn => {
      if (!isLoggedIn) {
        // If user is not logged in, redirect to signup
        return router.createUrlTree(['/signup']);
      }
      // If user is logged in, allow access
      return true;
    })
  );
};