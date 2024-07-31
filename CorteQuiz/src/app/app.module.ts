import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { JuegoComponent } from './components/juego/juego.component';
import { MultijugadorComponent } from './components/multijugador/multijugador.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PreguntaRespuestaComponent } from './components/pregunta-respuesta/pregunta-respuesta.component';
import { RegistroLoginComponent } from './components/registro-login/registro-login.component';
import { TimerComponent } from './components/timer/timer.component';
import { ElegirDificultadComponent } from './components/elegir-dificultad/elegir-dificultad.component';
import { ModalGameOverComponent } from './components/modal-game-over/modal-game-over.component';

import { VidasComponent } from './components/vidas/vidas.component';

// Modulos para los formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';

import { usuarioLog } from 'src/app/models/usuarioLog';
import { UsuariosService } from './services/usuarios.service';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PreguntaRespuestaComponent,
    TimerComponent,
    JuegoComponent,
    RegistroLoginComponent,
    VidasComponent,
    PerfilComponent,
    CategoriasComponent,
    MultijugadorComponent,
    ElegirDificultadComponent,
    ModalGameOverComponent,
    AboutUsComponent
  ],
  imports: [
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    FontAwesomeModule
  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
