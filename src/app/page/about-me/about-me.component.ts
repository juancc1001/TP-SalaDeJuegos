import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  fotocara:string;
  instrucciones_juego:string;

  constructor() { 
    this.fotocara = "assets/fotocara.png";
    this.instrucciones_juego = "assets/instrucciones_wordle.png"
  }

  ngOnInit(): void {
  }
}
