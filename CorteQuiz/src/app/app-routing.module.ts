import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultijugadorComponent } from './components/multijugador/multijugador.component';
import { noCreadoGuard } from './no-creado.guard';

const routes: Routes = [
  { path: 'MultijugadorComponent', component: MultijugadorComponent, canActivate: [noCreadoGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
