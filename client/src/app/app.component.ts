import { Component} from '@angular/core';
import { WebsocketService } from './services/websocket.service';
// import { ChatService } from './services/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'client';
  constructor(private _wsService:WebsocketService){
  }
  //oninit consume el servicio. 
  // ngOnInit():void{
  //   this._chatService.enviarMensaje("Servidor, mira, un mensaje de pruebita");
  // }
}
