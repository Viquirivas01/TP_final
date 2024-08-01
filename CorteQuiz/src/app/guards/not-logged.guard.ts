import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';

export const notLoggedGuard: CanActivateFn = (route, state) => {
  const usuariosService = inject(UsuariosService);
  return usuariosService.isLoggedIn();
};
