import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { TatetiComponent } from './page/tateti/tateti.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { MenuComponent } from './page/menu/menu.component';
import { HomeComponent } from './page/home/home.component';
import { AboutMeComponent } from './page/about-me/about-me.component';
import { AhorcadoComponent } from './page/ahorcado/ahorcado.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JuegosComponent,
    TatetiComponent,
    PreguntadosComponent,
    NotFoundComponent,
    MenuComponent,
    HomeComponent,
    AboutMeComponent,
    AhorcadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
