import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreguntaRespuestaComponent } from './components/pregunta-respuesta/pregunta-respuesta.component';
import { TimerComponent } from './components/timer/timer.component';
import { JuegoComponent } from './components/juego/juego.component';
import { RegistroLoginComponent } from './components/registro-login/registro-login.component';

// Modulos para los formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { PruebaVerUsuariosComponent } from './prueba-ver-usuarios/prueba-ver-usuarios.component';
import { VidasComponent } from './vidas/vidas.component';

import { usuarioLog } from 'src/app/models/usuarioLog';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { MultijugadorComponent } from './components/multijugador/multijugador.component';
import { ElegirDificultadComponent } from './elegir-dificultad/elegir-dificultad.component';
import { ModalGameOverComponent } from './modal-game-over/modal-game-over.component';

@NgModule({
  declarations: [
    AppComponent,
    PreguntaRespuestaComponent,
    TimerComponent,
    JuegoComponent,
    RegistroLoginComponent,
    PruebaVerUsuariosComponent,
    VidasComponent,
    PerfilComponent,
    CategoriasComponent,
    MultijugadorComponent,
    ElegirDificultadComponent,
    ModalGameOverComponent
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
