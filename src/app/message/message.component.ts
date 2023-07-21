import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ChatService } from '../chat.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import Viewer from 'viewerjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  text;
  text2;

  image: string | SafeUrl ;

  @ViewChild('one', { static: false }) div1: ElementRef;

  uplodedFileContents = [];
  sendFileDetails = [];
  notificationItem;
  currentItem = 0;

  messages: IMessage[] = [];

  currentUser;
  
 
  

  constructor(

    private chatservice:ChatService,
    private renderer:Renderer2,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef

  ) { 

  }

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
            msgs: [{type:'in',msg, datetime,display:msg}],
            isRead: false,
            msgCount: 1,
            userImage: './assets/notification-image4.png'
          }

        )

      }

      else{

       this.messages[index].msgs.push({type:'in',msg, datetime,display:msg});
       this.messages[index].isRead = false;
       this.messages[index].msgCount++;

      }

      // console.log(this.messages)

      this.openbox(this.currentItem);

    });

    

    this.chatservice.socket.on('send-img', (data) => {

      var username = data.senderName;
      var userID = data.userID; 
      var msg = data.content;
      var src = data.src;
      var name = data.name;
      var datetime = data.datetime;

      var index = this.messages.findIndex(el => el.userID === userID);

      if(index === -1){

        this.messages.push(

          {
            username,
            userID,
            msgs: [{type:'in',msg: {dataType: "img", content: msg, src:src, name:name}, datetime,display:"File uploaded"}],
            isRead: false,
            msgCount: 1,
            userImage: './assets/notification-image4.png'
          }

        )

      }

      else{

       this.messages[index].msgs.push({type:'in',msg: {dataType: "img", content: msg, src:src,name:name}, datetime, display:"File uploaded"});
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
    const div2: HTMLElement = this.renderer.createElement('div');
    div2.className = "out-msg";

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
    
     
      div2.innerText = msg;
      mgsContainer.appendChild(div2);
      this.div1.nativeElement.appendChild(mgsContainer);
      this.text = '';

    }
     
    if(this.sendFileDetails.length){

      let recipiantID = this.notificationItem.userID;

      let index = this.messages.findIndex(el => el.userID === recipiantID);

      let d = new Date();
      let datetime = d.toLocaleString();


      for( let i= 0; i < this.sendFileDetails.length; i++){

        div2.style.flexDirection = "column";
        const img: HTMLImageElement = this.renderer.createElement('img');

        if(this.sendFileDetails[i].type.includes("image")){

          img.src = this.sendFileDetails[i].content;
          img.addEventListener("click", this.viewImage.bind(img)); //Image zooming
          div2.appendChild(img);
          mgsContainer.appendChild(div2);
          this.div1.nativeElement.appendChild(mgsContainer);
          this.chatservice.socket.emit('send-img',{username: this.notificationItem.username, content: this.sendFileDetails[i].content, src: this.sendFileDetails[i].content, name:this.sendFileDetails[i].name});
          

           //Update messages
          if(index === -1){
    
            this.messages.push(
      
              {
                username: this.notificationItem.username,
                userID: recipiantID,
                msgs: [{type:'out',msg: {dataType: "img", content: this.sendFileDetails[i].content, src:img.src, name:this.sendFileDetails[i].name}, datetime}],
                isRead: true,
                msgCount: 0,
                userImage: './assets/notification-image4.png'
              }
      
            )
      
          }
      
          else{
      
          this.messages[index].msgs.push({type:'out',msg: {dataType: "img", content: this.sendFileDetails[i].content, src:img.src, name:this.sendFileDetails[i].name}, datetime});
          this.messages[index].isRead = true;
          this.messages[index].msgCount = 0
    
          }
        }

        else{

          var item = this.sendFileDetails[i];
          img.src = './assets/message/fileicon.png';

          //file downloading part
          const icon: HTMLImageElement = this.renderer.createElement('img');
          icon.className = "download-icon"
          icon.src = './assets/message/download.png'
          this.renderer.listen(icon, 'click', (event) => {
            this.downloadFile(item)
          });

          const div3: HTMLElement = this.renderer.createElement('div');
          div3.className = "file-name";
          div3.innerText = this.sendFileDetails[i].name;
          div3.appendChild(icon);
          div2.appendChild(img);
          div2.appendChild(div3);
          mgsContainer.appendChild(div2);
          this.div1.nativeElement.appendChild(mgsContainer);
          this.chatservice.socket.emit('send-img',{username: this.notificationItem.username, content: this.sendFileDetails[i].content, src:img.src, name:this.sendFileDetails[i].name});
        
           //Update messages
          if(index === -1){
    
            this.messages.push(
      
              {
                username: this.notificationItem.username,
                userID: recipiantID,
                msgs: [{type:'out',msg: {dataType: "img", content: this.sendFileDetails[i].content, src:img.src, name:this.sendFileDetails[i].name}, datetime}],
                isRead: true,
                msgCount: 0,
                userImage: './assets/notification-image4.png'
              }
      
            )
      
          }
      
          else{
      
          this.messages[index].msgs.push({type:'out',msg: {dataType: "img", content: this.sendFileDetails[i].content, src:img.src, name:this.sendFileDetails[i].name}, datetime});
          this.messages[index].isRead = true;
          this.messages[index].msgCount = 0
    
          }

        }
        
       
      }

      this.sendFileDetails = [];
      this.uplodedFileContents = [];
     
    }

  }
  

  async uploadFile(ev) {

    debugger

    const file = ev.target.files[0];

    var fileType = file.type;
    var fileName = file.name;

    // console.log(fileType)
  
    
    if(fileType.includes("image")){

      this.image = this.sanitizer.bypassSecurityTrustUrl(
        window.URL.createObjectURL(file)
      );

      this.uplodedFileContents.push(
        {src:this.image,
        name:fileName.substring(0, 6)});

      const fileObjImg = await this.convertBase64(file);

      var fileObjImgWithName = Object.assign({},fileObjImg,{name:fileName});

      this.sendFileDetails.push(fileObjImgWithName);
        
    }

    else{

      this.image = './assets/message/fileicon.png';

      this.uplodedFileContents.push(
        {src:this.image,
        name:fileName.substring(0, 6)});

      const fileObjTxt = await this.convertBase64(file);

      var fileObjTxtWithName = Object.assign({},fileObjTxt,{name:fileName});

      this.sendFileDetails.push(fileObjTxtWithName);
      

    }

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

    this.uplodedFileContents.splice(idx, 1);
    this.sendFileDetails.splice(idx, 1);

  }


  openbox(i) {
    
    this.div1.nativeElement.innerHTML = null;
    this.notificationItem = this.messages[i];
    this.currentItem = i;
   

    this.cdr.detectChanges();

    var msgArray = this.messages[i].msgs
    
    for(var index = 0; index < msgArray.length; index++){

      //incomming messages
      if( msgArray[index].type === "in"){

        const mgsContainer: HTMLElement = this.renderer.createElement('div');
        mgsContainer.className = "msg-container";
        mgsContainer.style.justifyContent = "flex-start";
        const div2: HTMLElement = this.renderer.createElement('div');
        div2.className = "in-msg";

        //files
        if(msgArray[index].msg.dataType){

          div2.style.flexDirection = "column";
          const img: HTMLImageElement = this.renderer.createElement('img');
      

          
          //images
          if(msgArray[index].msg.content.includes("image")){

            img.src = msgArray[index].msg.src;
            img.addEventListener("click", this.viewImage.bind(img)); //Image zooming
            div2.appendChild(img);
            mgsContainer.appendChild(div2);
            this.div1.nativeElement.appendChild(mgsContainer);

          }

          //other files
          else{

            var item = msgArray[index].msg;
            img.src = './assets/message/fileicon.png';
            

            //file downloading part
            const icon: HTMLImageElement = this.renderer.createElement('img');
            icon.className = "download-icon"
            icon.src = './assets/message/download.png'
            this.renderer.listen(icon, 'click', (event) => {
              this.downloadFile(item)
            });

            const div3: HTMLElement = this.renderer.createElement('div');
            div3.className = "file-name";
            div3.innerText = msgArray[index].msg.name;
            div3.appendChild(icon);
            div2.appendChild(img);
            div2.appendChild(div3);
            mgsContainer.appendChild(div2);
            this.div1.nativeElement.appendChild(mgsContainer);

          }

        }

        //text messages
        else{

          this.text2 = msgArray[index].msg;
          div2.innerText = this.text2
          mgsContainer.appendChild(div2);
          this.div1.nativeElement.appendChild(mgsContainer);

        }


      }

      //outgoing messages
      else{

        const mgsContainer: HTMLElement = this.renderer.createElement('div');
        mgsContainer.className = "msg-container";
        mgsContainer.style.justifyContent = "flex-end";
        const div2: HTMLElement = this.renderer.createElement('div');
        div2.className = "out-msg";

        //files
        if(msgArray[index].msg.dataType){

          div2.style.flexDirection = "column";
          const img: HTMLImageElement = this.renderer.createElement('img');

          //files
        if(msgArray[index].msg.dataType){

          div2.style.flexDirection = "column";
          const img: HTMLImageElement = this.renderer.createElement('img');
          
          //images
          if(msgArray[index].msg.content.includes("image")){

            img.src = msgArray[index].msg.src;
            img.addEventListener("click", this.viewImage.bind(img)); //Image zooming
            div2.appendChild(img);
            mgsContainer.appendChild(div2);
            this.div1.nativeElement.appendChild(mgsContainer);

          }

          //other files
          else{

            var item = msgArray[index].msg;
            img.src = './assets/message/fileicon.png';

            // console.log(msgArray[index].msg)

            //file downloading part
            const icon: HTMLImageElement = this.renderer.createElement('img');
            icon.className = "download-icon"
            icon.src = './assets/message/download.png'
            this.renderer.listen(icon, 'click', (event) => {
              this.downloadFile(item)
            });

            const div3: HTMLElement = this.renderer.createElement('div');
            div3.className = "file-name";
            div3.innerText = msgArray[index].msg.name;
            div3.appendChild(icon);
            div2.appendChild(img);
            div2.appendChild(div3);
            mgsContainer.appendChild(div2);
            this.div1.nativeElement.appendChild(mgsContainer);

          }

        }
        else{

          this.text2 = msgArray[index].msg;
          div2.innerText = this.text2
          mgsContainer.appendChild(div2);
          this.div1.nativeElement.appendChild(mgsContainer);

        }

        }

        //text messages
        else{

          this.text2 = msgArray[index].msg;
          div2.innerText = this.text2
          mgsContainer.appendChild(div2);
          this.div1.nativeElement.appendChild(mgsContainer);

        }



      }


    }
   
  }


  viewImage(event) {

    let viewer = new Viewer(event.currentTarget, {
      navbar: false,
      toolbar: false,
      viewed() {

        viewer.zoomTo(1);
        viewer['image'].style.border = '10px solid white';
        viewer['image'].style['border-radius'] = '10px';

      }
     
    });

    viewer.show();
  }


  async downloadFile(data){

    var base64 = data.content;
    var name = data.name;

    var base64Response = await fetch(base64)
    
    const blob = await base64Response.blob();

    
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // the filename
    a.download = name;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
   
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
