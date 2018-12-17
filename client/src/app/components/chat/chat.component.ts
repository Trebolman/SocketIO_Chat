import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  public mensajes:string[] = [];
  public mensaje:string;
  public div:any;
  public mensajeSubscription:Subscription;

  constructor(private _chatService:ChatService) { 
    
  }

  // metodos
  ngOnInit() {
    
    this.mensajeSubscription = this._chatService.recibirMensajes().subscribe((entrada)=>{
      this.div = document.getElementById("chat-mensajes");
      console.log(entrada);
      console.log(typeof(entrada));
      this.mensajes.push(entrada);
      setTimeout(()=>{
        this.div.scrollTop = this.div.scrollHeight;
      },50);
    });
  }

  ngOnDestroy(){
    this.mensajeSubscription.unsubscribe(); //para dejemos de subscribirnos
  }

  enviar(){
    this._chatService.enviarMensaje(this.mensaje);
    this.mensaje = ""; //blanqueamos el mensaje luego de haber recibido
    if(this.mensaje.trim().length === 0) //trim es para quitar espacios en blanco a los constados{
      return;
  }
}
