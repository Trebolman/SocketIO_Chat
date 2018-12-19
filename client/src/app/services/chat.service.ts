import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _wsService:WebsocketService) { 

  }
  //recibe el mensaje del servidor
  public enviarMensaje(mensaje:string){
    //construimos json el payload que enviamos a WebsocketService
    const payload = {
      de: this._wsService.usuario.nombre,
      cuerpo: mensaje
    }
    //'menssaje':nombre del evento
    this._wsService.emitir('mensaje',payload);
  }

  public recibirMensajes(){
    //pasarela
    return this._wsService.escuchar('mensaje-nuevo');
  }
}
