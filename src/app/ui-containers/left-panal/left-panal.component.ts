import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panal',
  templateUrl: './left-panal.component.html',
  styleUrls: ['./left-panal.component.scss']
})
export class LeftPanalComponent implements OnInit {

  overviewBtn = './assets/btn-icons/icons8_overview 1.png';
  auctionsBtn = './assets/btn-icons/auction-btn.png';
  usersBtn = './assets/btn-icons/users-btn.png';
  messageBtn = './assets/btn-icons/message-btn.png';
  adsdBtn = './assets/btn-icons/ads-btn.png';
  archiveBtn = './assets/btn-icons/archive-btn.png';
  settingsBtn = './assets/btn-icons/settings-btn.png';

  constructor() { }

  ngOnInit(): void {
  }

}
