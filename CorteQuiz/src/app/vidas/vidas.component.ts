import { Component, OnInit, inject } from '@angular/core';
import { InformacionJuegoService } from 'src/app/informacion-juego.service';

@Component({
  selector: 'app-vidas',
  templateUrl: './vidas.component.html',
  styleUrls: ['./vidas.component.css']
})
export class VidasComponent implements OnInit{
  infoJuegoService: InformacionJuegoService = inject(InformacionJuegoService);

  vidas: number;

  ngOnInit(): void {
    this.vidas=3;
  }

  restarVida(){
    this.vidas=this.vidas-1;
  }
}
