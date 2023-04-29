import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

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

  accountDetails= [
    {
      label: 'Account Details',
      value: {
        id: 1,
        name: 'Account Details'
      }
    },
    {
      label: 'Address',
      value: {
        id: 2,
        name: 'Address'
      }
    }
  ]


  selectedType;




  constructor() { }

  ngOnInit(): void {

    this.selectedType = this.accountDetails[0].value;

  }

  setRoom(){

    let idx = this.accountDetails.findIndex(el => el.value.id === this.selectedType.id);
    this.selectedType = this.accountDetails[idx].value;
  
  }
  

}
