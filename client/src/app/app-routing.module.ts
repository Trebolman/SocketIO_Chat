import { NgModule } from '@angular/core';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { RouterModule, Routes, Router } from '@angular/router';

const appRoutes:Routes = [
  {path: '', component:LoginComponent},
  {path: 'mensajes', component:MensajesComponent},
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
