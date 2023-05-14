import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

 
  notificationItem;

  constructor() {

    
   }

  ngOnInit(): void {

    this.notificationItem = this.notifications[0];
  }
  
 
  notifications = [
    
    {
      image: './assets/notification-image.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
      count:'2'
    },
    {
      image: './assets/notification-image2.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
      count:'1'
    },
    {
      image: './assets/notification-image3.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
      count:'2'
    },
    {
      image: './assets/notification-image4.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
      
    },
    {
      image: './assets/notification-image4.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
    
    },
    {
      image: './assets/notification-image3.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
      
    },
    {
      image: './assets/notification-image4.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
    
    },
    {
      image: './assets/notification-image3.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
      
    },
    {
      image: './assets/notification-image4.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
    
    },
    {
      image: './assets/notification-image3.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
      
    },
    {
      image: './assets/notification-image4.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
    
    },
    {
      image: './assets/notification-image3.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
      
    },
    {
      image: './assets/notification-image4.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
    
    },
    {
      image: './assets/notification-image3.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
      
    },
    {
      image: './assets/notification-image4.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
    
    },
    {
      image: './assets/notification-image3.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
      
    },
    {
      image: './assets/notification-image4.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
    
    },
    {
      image: './assets/notification-image3.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
      
    },
    {
      image: './assets/notification-image4.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
    
    },
    {
      image: './assets/notification-image3.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
      
    },
    {
      image: './assets/notification-image4.png',
      name: 'Brian Alone',
      message: 'I need to solve my life',
      time: '2m',
    
    },

  ]

}
