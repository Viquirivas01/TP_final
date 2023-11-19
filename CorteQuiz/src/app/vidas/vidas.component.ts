import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vidas',
  templateUrl: './vidas.component.html',
  styleUrls: ['./vidas.component.css']
})
export class VidasComponent implements OnInit{

  vidas: number;

  ngOnInit(): void {
    this.vidas=3;
  }

  restarVida(){
    this.vidas=this.vidas-1;
  }
}
