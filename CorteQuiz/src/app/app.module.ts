import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreguntaRespuestaComponent } from './pregunta-respuesta/pregunta-respuesta.component';
import { TimerComponent } from './timer/timer.component';
import { JuegoComponent } from './juego/juego.component';

@NgModule({
  declarations: [
    AppComponent,
    PreguntaRespuestaComponent,
    TimerComponent,
    JuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
