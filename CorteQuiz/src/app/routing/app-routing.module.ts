import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriasComponent } from '../components/categorias/categorias.component';
import { JuegoComponent } from '../components/juego/juego.component';
import { MultijugadorComponent } from '../components/multijugador/multijugador.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { PreguntaRespuestaComponent } from '../components/pregunta-respuesta/pregunta-respuesta.component';
import { RegistroLoginComponent } from '../components/registro-login/registro-login.component';
import { ElegirDificultadComponent } from '../components/elegir-dificultad/elegir-dificultad.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { notLoggedGuard } from '../guards/not-logged.guard';
import { TimerComponent } from '../components/timer/timer.component';
import { VidasComponent } from '../components/vidas/vidas.component';

const routes: Routes = [
  { path: 'categories', component: CategoriasComponent , canActivate: [notLoggedGuard]},
  { path: 'multiplayer', component: MultijugadorComponent, canActivate: [notLoggedGuard] },
  { path: 'time-trial', component: TimerComponent, canActivate: [notLoggedGuard] },
  { path: 'strikes', component: VidasComponent, canActivate: [notLoggedGuard] },
  { path: 'game', component: JuegoComponent, canActivate: [notLoggedGuard]},
  { path: 'profile', component: PerfilComponent, canActivate: [notLoggedGuard] },
  { path: 'signup', component: RegistroLoginComponent, },
  { path: 'elegirDificultad', component: ElegirDificultadComponent , canActivate: [notLoggedGuard]},
  { path: 'about', component: AboutUsComponent, canActivate: [notLoggedGuard]},
  { path: '**', redirectTo: 'game', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
