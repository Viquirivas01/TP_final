import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class noCreadoGuard implements CanActivate {
  canActivate(): boolean {
    return false;
  }
}
