import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { TatetiComponent } from './page/tateti/tateti.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { AhorcadoComponent } from './page/ahorcado/ahorcado.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { AboutMeComponent } from './page/about-me/about-me.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'juego', component: JuegosComponent, 
    children: 
    [
      {path: 'tateti', component: TatetiComponent },
      {path: 'preguntados', component: PreguntadosComponent},
      {path: 'ahorcado', component: AhorcadoComponent}
    ]
  },
  
  {path: 'aboutme', component: AboutMeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
