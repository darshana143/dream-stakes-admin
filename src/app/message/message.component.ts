import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ChatService } from '../chat.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  text;
  text2;

  image: string | SafeUrl ;

  @ViewChild('one', { static: false }) d1: ElementRef;

  imageContents = [];
  sendImgDetails = [];
  notificationItem;
  currentItem = 0;

  messages: IMessage[] = [];

  currentUser;
  
 
  

  constructor(

    private chatservice:ChatService,
    private renderer:Renderer2,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef

  ) { }

  ngOnInit(): void {

    this.chatservice.socket.on('connected-users', (userData) => {

      let userAvailable = this.messages.some(msgObj => msgObj.username.toLowerCase() === userData.username.toLowerCase());

      if(!userAvailable)
        this.messages.push({
          msgs: [],
          userID: userData.userID,
          username: userData.username,
          isRead: false,
          msgCount: 0,
          userImage: './assets/notification-image4.png'
        })

      if(!this.notificationItem)
        this.notificationItem = this.messages[0];

    })

    this.chatservice.socket.on('chat message', (data) => {

      var username = data.senderName;
      var userID = data.userID; 
      var msg = data.msg;
      var datetime = data.datetime;

      var index = this.messages.findIndex(el => el.userID === userID);

      if(index === -1){

        this.messages.push(

          {
            username,
            userID,
            msgs: [{type:'in',msg, datetime}],
            isRead: false,
            msgCount: 1,
            userImage: './assets/notification-image4.png'
          }

        )

      }

      else{

       this.messages[index].msgs.push({type:'in',msg, datetime});
       this.messages[index].isRead = false;
       this.messages[index].msgCount++;

      }

      console.log(this.messages)

      this.openbox(this.currentItem);

    });

    

    this.chatservice.socket.on('send-img', (data) => {
     
      var username = data.senderName;
      var userID = data.userID; 
      var msg = data.msg;
      var datetime = data.datetime;

      var index = this.messages.findIndex(el => el.userID === userID);

      if(index === -1){

        this.messages.push(

          {
            username,
            userID,
            msgs: [{type:'in',msg: {dataType: "img", data: msg}, datetime}],
            isRead: false,
            msgCount: 1,
            userImage: './assets/notification-image4.png'
          }

        )

      }

      else{

       this.messages[index].msgs.push({type:'in',msg: {dataType: "img", data: msg}, datetime});
       this.messages[index].isRead = false;
       this.messages[index].msgCount++

      }

      this.openbox(this.currentItem);


      
    });
   

  }

  sendMessage(){

    const mgsContainer: HTMLElement = this.renderer.createElement('div');
    mgsContainer.className = "msg-container";
    mgsContainer.style.justifyContent = "flex-end";
    const d2: HTMLElement = this.renderer.createElement('div');
    d2.className = "out-msg";

    if(this.text){

      let msg = this.text;

      let recipiantID = this.notificationItem.userID;

      let index = this.messages.findIndex(el => el.userID === recipiantID);

      let d = new Date();
      let datetime = d.toLocaleString();

      if(index === -1){
  
        this.messages.push(
  
          {
            username: this.notificationItem.username,
            userID: recipiantID,
            msgs: [{type:'out', msg, datetime}],
            isRead: true,
            msgCount: 0,
            userImage: './assets/notification-image4.png'
          }
  
        )
  
      }
  
      else{
  
       this.messages[index].msgs.push({type:'out',msg,datetime});
       this.messages[index].isRead = true;
       this.messages[index].msgCount = 0

      }

      this.chatservice.socket.emit('chat message', {username: this.notificationItem.username, msg});
    
     
      d2.innerText = msg;
      mgsContainer.appendChild(d2);
      this.d1.nativeElement.appendChild(mgsContainer);
      this.text = '';

    }
     
    if(this.sendImgDetails){

      let recipiantID = this.notificationItem.userID;

      let index = this.messages.findIndex(el => el.userID === recipiantID);

      let d = new Date();
      let datetime = d.toLocaleString();


      for( let i= 0; i < this.sendImgDetails.length; i++){

        d2.style.flexDirection = "column";
        const img: HTMLImageElement = this.renderer.createElement('img');
        img.src = this.sendImgDetails[i].content;
        d2.appendChild(img);
        mgsContainer.appendChild(d2);
        this.d1.nativeElement.appendChild(mgsContainer);
        this.chatservice.socket.emit('send-img',{username: this.notificationItem.username, msg: this.sendImgDetails[i].content});

        //Update messages
        if(index === -1){
  
          this.messages.push(
    
            {
              username: this.notificationItem.username,
              userID: recipiantID,
              msgs: [{type:'out',msg: {dataType: "img", data: this.sendImgDetails[i].content}, datetime}],
              isRead: true,
              msgCount: 0,
              userImage: './assets/notification-image4.png'
            }
    
          )
    
        }
    
        else{
    
         this.messages[index].msgs.push({type:'out',msg: {dataType: "img", data: this.sendImgDetails[i].content}, datetime});
         this.messages[index].isRead = true;
         this.messages[index].msgCount = 0
  
        }

       
      }

      this.sendImgDetails = [];
      this.imageContents = [];
     
    }

  }

  async updateImage(ev) {

    const file = ev.target.files[0];
  
    this.image = this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(file)
    );
    
    this.imageContents.push(this.image);

    const fileObj = await this.convertBase64(file);
    
    this.sendImgDetails.push(fileObj);
    
  }

  convertBase64 = (file) => {

    return new Promise((resolve, reject) => {

        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onload = () => {

            resolve({
              type: fileReader.result.toString().split(';')[0],
              content:fileReader.result.toString()
            });
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
  };

  removeImage(idx){

    this.imageContents.splice(idx, 1);
    this.sendImgDetails.splice(idx, 1);

  }

  openbox(i) {
    
    this.d1.nativeElement.innerHTML = null;

    this.notificationItem = this.messages[i];

    this.currentItem = i;
   

    this.cdr.detectChanges();

    var msgArray = this.messages[i].msgs
    
    for(var index = 0; index < msgArray.length; index++){

      if( msgArray[index].type === "in"){

        const mgsContainer: HTMLElement = this.renderer.createElement('div');
        mgsContainer.className = "msg-container";
        mgsContainer.style.justifyContent = "flex-start";
        const d2: HTMLElement = this.renderer.createElement('div');
        d2.className = "in-msg";

        if(msgArray[index].msg.dataType){

          d2.style.flexDirection = "column";
          const img: HTMLImageElement = this.renderer.createElement('img');
          img.src = msgArray[index].msg.data;
          d2.appendChild(img);
          mgsContainer.appendChild(d2);
          this.d1.nativeElement.appendChild(mgsContainer);

        }
        else{

          this.text2 = msgArray[index].msg;
          d2.innerText = this.text2
          mgsContainer.appendChild(d2);
          this.d1.nativeElement.appendChild(mgsContainer);

        }


      }

      else{

        const mgsContainer: HTMLElement = this.renderer.createElement('div');
        mgsContainer.className = "msg-container";
        mgsContainer.style.justifyContent = "flex-end";
        const d2: HTMLElement = this.renderer.createElement('div');
        d2.className = "out-msg";

        if(msgArray[index].msg.dataType){

          d2.style.flexDirection = "column";
          const img: HTMLImageElement = this.renderer.createElement('img');
          img.src = msgArray[index].msg.data;
          d2.appendChild(img);
          mgsContainer.appendChild(d2);
          this.d1.nativeElement.appendChild(mgsContainer);

        }
        else{

          this.text2 = msgArray[index].msg;
          d2.innerText = this.text2
          mgsContainer.appendChild(d2);
          this.d1.nativeElement.appendChild(mgsContainer);

        }



      }


    }
   
  }

}

interface IMessage {
  username: string,
  userID: string,
  msgs: any[],
  isRead: boolean,
  msgCount: number,
  userImage: string
}
