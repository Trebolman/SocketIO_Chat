import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { RouterModule, Routes, Router, CanActivate } from '@angular/router';
import { UsuarioGuardService } from './guards/usuario-guard/usuario-guard.service';

const appRoutes:Routes = [
  {path: '', component:LoginComponent},
  {path: 'mensajes', component:MensajesComponent,canActivate:[UsuarioGuardService]},
  {path: '**',component:LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)//funcion incluye rutas al modelo
  ],
  exports: [ //cuidao con esto
    RouterModule
  ]
})
export class AppRoutingModule { }
