import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-new-users',
  templateUrl: './add-new-users.component.html',
  styleUrls: ['./add-new-users.component.scss']
})
export class AddNewUsersComponent implements OnInit {

  @ViewChild('pwd') pwd: ElementRef;
  @ViewChild('icon') icon: ElementRef;

  roles = [
    {
      label: 'Administrator',
      value: {
        id: 1,
        name: 'Administrator'
      }
    },
    {
      label: 'Subscriber',
      value: {
        id: 2,
        name: 'Subscriber'
      }
    },
    {
      label: 'Premium',
      value: {
        id: 3,
        name: 'Premium'
      }
    },
    {
      label: 'Builder',
      value: {
        id: 4,
        name: 'Builder'
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  showPassword(){

    const password = this.pwd.nativeElement;
    const eyeIcon = this.icon.nativeElement;

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    eyeIcon.classList.toggle("pi-eye");
        
}

}
