import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus:boolean;
  constructor(private _socket:Socket) {
    this.checkStatus();
  }

  public checkStatus(){
    this._socket.on('connect',()=>{
      console.log("Conectado al sevidor correctamente");
      this.socketStatus = true;
    });

    this._socket.on('disconnect',()=>{
      console.log("Desconectado del servidor");
      this.socketStatus = false;
    });
  }
  //disparar eventos (cualquier evento)
  public emitir(evento:string, payload:{de:string, cuerpo:string}, callback?:Function){
    this._socket.emit(evento,payload,callback);//verdadera funcion de socket.io
  }

  public escuchar(evento:string){//funcion genérica
    return this._socket.fromEvent(evento);//nos vamos a suscribir desde el mismo componente. estamos retornando el observable
  }
}
