import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  username = "admin";
  adminChatID;
  connectedUsers = [];

  constructor() {


  }

  
  socket = io('https://chat-system-4hbl.onrender.com/', {
    withCredentials: true,
    allowEIO3: false,
    extraHeaders: {
      "my-custom-header": "abcd"
    }
  });

  public join(){
  
    this.socket.emit('joining msg', this.username, this.callBack);

  }

  public getConnectedUsers(){
    return this.connectedUsers;
  }

  private callBack(id){
    this.adminChatID = id;
    console.log(this.adminChatID)
  }
  
}
