import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ruteo:Router;
  constructor(ruteo:Router) { 
    this.ruteo = ruteo;
  }

  ngOnInit(): void {
  }

  redirect(): void{
    this.ruteo.navigate(['/juego/']);
  }

}
