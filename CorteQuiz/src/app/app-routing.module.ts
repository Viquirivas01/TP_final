import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriasComponent } from './components/categorias/categorias.component';
import { JuegoComponent } from './components/juego/juego.component';
import { MultijugadorComponent } from './components/multijugador/multijugador.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PreguntaRespuestaComponent } from './components/pregunta-respuesta/pregunta-respuesta.component';
import { RegistroLoginComponent } from './components/registro-login/registro-login.component';
import { TimerComponent } from './components/timer/timer.component';
import { ElegirDificultadComponent } from './elegir-dificultad/elegir-dificultad.component';
import { ModalGameOverComponent } from './modal-game-over/modal-game-over.component';
import { PruebaVerUsuariosComponent } from './prueba-ver-usuarios/prueba-ver-usuarios.component';
import { VidasComponent } from './vidas/vidas.component';

import { noCreadoGuard } from './no-creado.guard';

const routes: Routes = [
  { path: 'categorias', component: CategoriasComponent, canActivate: [noCreadoGuard] },
  { path: 'juego', component: JuegoComponent, canActivate: [noCreadoGuard] },
  { path: 'multijugador', component: MultijugadorComponent, canActivate: [noCreadoGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [noCreadoGuard] },
  { path: 'preguntaRespuesta', component: PreguntaRespuestaComponent, canActivate: [noCreadoGuard] },
  { path: 'registroLogin', component: RegistroLoginComponent},
  { path: 'timer', component: TimerComponent, canActivate: [noCreadoGuard] },
  { path: 'elegirDificultas', component: ElegirDificultadComponent, canActivate: [noCreadoGuard] },
  { path: 'modalGameOver', component: ModalGameOverComponent, canActivate: [noCreadoGuard] },
  { path: 'prueba', component: PruebaVerUsuariosComponent, canActivate: [noCreadoGuard] },
  { path: 'vidas', component: VidasComponent, canActivate: [noCreadoGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
