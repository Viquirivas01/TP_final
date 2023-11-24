import { Component, OnInit, inject } from '@angular/core';
import { InformacionJuegoService } from 'src/app/informacion-juego.service';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);

  categoria_elegida = false;
  vidas: number;
  terminado: boolean;

  constructor() {}

  ngOnInit(): void {
    this.terminado = false;
    this.vidas = 5;
  }

  comenzarCat(categ: string) {
    this.vidas = 5;
    this.categoria_elegida = true;
    this.infoJuegoService.setElegirCat(true);
    this.infoJuegoService.setCategoriaElegida(categ);
    this.infoJuegoService.setVidasCategorias();
    this.infoJuegoService.setModoJuego(2);
    
    this.empezarCategorias();
  }

  empezarCategorias() {
    if (this.infoJuegoService.getVidas() > 0) {

      setTimeout(() => {this.empezarCategorias();
      }, 500);
    }
    else {
      setTimeout(() => {
        this.terminado = true;
      }, 500)
      
    }
  }
}