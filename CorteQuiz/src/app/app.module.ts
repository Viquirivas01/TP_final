import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreguntaRespuestaComponent } from './pregunta-respuesta/pregunta-respuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    PreguntaRespuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
