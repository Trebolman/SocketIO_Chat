import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public nombre:string = "";

  constructor(private _wsService:WebsocketService,
              private _router:Router) { }

  ngOnInit() {}

  ingresar(){
    this._wsService.loginWs(this.nombre).then((resp)=>{
      console.log("[loginComponente|ingresar]"+resp);      
      this._router.navigateByUrl('/mensajes');
    }).catch((err)=>{
      console.log("Error",err);
    }); //envia al servidor
  }
}
