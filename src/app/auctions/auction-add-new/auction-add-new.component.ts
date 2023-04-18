import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auction-add-new',
  templateUrl: './auction-add-new.component.html',
  styleUrls: ['./auction-add-new.component.scss']
})
export class AuctionAddNewComponent implements OnInit {

  auction: any;
  entrants:any;
  text: string;
  text2: string;
  uploadedFiles: any[] = [];


  constructor(
    
  ) { 

    this.auction = [
      {
        label: 'Single Auction',
        value: {
          id: 1,
          name: 'Single Auction'
        }
      },
      {
        label: 'Duplex Auction',
        value: {
          id: 2,
          name: 'Duplex Auction'
        }
      },
      {
        label: 'Commercial',
        value: {
          id: 3,
          name: 'Commercial'
        }
      }
    ]

    this.entrants = [
      {
        label: '5000',
        value: {
          id: 1,
          name: '5000'
        }
      },
      {
        label: '10,000',
        value: {
          id: 2,
          name: '10,000'
        }
      },
      {
        label: '15,000',
        value: {
          id: 3,
          name: '15,000'
        }
      },
      {
        label: '20,000',
        value: {
          id: 1,
          name: '20,000'
        }
      },
      {
        label: '25,000',
        value: {
          id: 2,
          name: '25,000'
        }
      },
      {
        label: '30,000',
        value: {
          id: 3,
          name: '30,000'
        }
      }
    ]
  }

  ngOnInit(): void {
  }

}
