import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriasComponent } from '../components/categorias/categorias.component';
import { JuegoComponent } from '../components/juego/juego.component';
import { MultijugadorComponent } from '../components/multijugador/multijugador.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { RegistroLoginComponent } from '../components/registro-login/registro-login.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { TimerComponent } from '../components/timer/timer.component';
import { VidasComponent } from '../components/vidas/vidas.component';

import { notLoggedGuard } from '../guards/not-logged.guard';

const routes: Routes = [
  { path: 'game', component: JuegoComponent, canActivate: [notLoggedGuard]},
  { path: 'game/time-trial', component: TimerComponent, canActivate: [notLoggedGuard] },
  { path: 'game/strikes', component: VidasComponent, canActivate: [notLoggedGuard] },
  { path: 'game/categories', component: CategoriasComponent , canActivate: [notLoggedGuard]},
  { path: 'game/multiplayer', component: MultijugadorComponent, canActivate: [notLoggedGuard] },
  { path: 'profile', component: PerfilComponent, canActivate: [notLoggedGuard] },
  { path: 'about', component: AboutUsComponent, canActivate: [notLoggedGuard]},
  { path: 'signup', component: RegistroLoginComponent, },
  { path: '**', redirectTo: 'game', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
