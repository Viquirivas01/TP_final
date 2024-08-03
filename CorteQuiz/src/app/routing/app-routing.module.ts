import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriasComponent } from '../components/categorias/categorias.component';
import { JuegoComponent } from '../components/juego/juego.component';
import { MultijugadorComponent } from '../components/multijugador/multijugador.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { PreguntaRespuestaComponent } from '../components/pregunta-respuesta/pregunta-respuesta.component';
import { RegistroLoginComponent } from '../components/registro-login/registro-login.component';
import { TimerComponent } from '../components/timer/timer.component';
import { ElegirDificultadComponent } from '../components/elegir-dificultad/elegir-dificultad.component';
import { ModalGameOverComponent } from '../components/modal-game-over/modal-game-over.component';
import { VidasComponent } from '../components/vidas/vidas.component';

import { AboutUsComponent } from '../components/about-us/about-us.component';
import { notLoggedGuard } from '../guards/not-logged.guard';

const routes: Routes = [
  { path: 'categorias', component: CategoriasComponent },
  { path: 'juego', component: JuegoComponent, canActivate: [notLoggedGuard]},
  { path: 'multijugador', component: MultijugadorComponent },
  { path: 'perfil', component: PerfilComponent, canActivate: [notLoggedGuard] },
  { path: 'preguntaRespuesta', component: PreguntaRespuestaComponent },
  { path: 'signup', component: RegistroLoginComponent},
  { path: 'timer', component: TimerComponent },
  { path: 'elegirDificultas', component: ElegirDificultadComponent },
  { path: 'modalGameOver', component: ModalGameOverComponent },
  { path: 'vidas', component: VidasComponent},
  { path: 'about', component: AboutUsComponent},
  { path: '**', redirectTo: 'juego', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
