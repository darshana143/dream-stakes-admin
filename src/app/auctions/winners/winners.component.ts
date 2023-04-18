import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {

  activeColumnDefs = [

    {  
      headerName: 'Client ID',
      field: 'clientID',
      width: 200,
      resizable: true,
      
    },
    {  
      headerName: 'Date',
      field: 'date',
      width: 250,
      resizable: true,
     
    },
    {  
      headerName: 'Auction Name',
      field: 'auctionName',
      width: 300,
      resizable: true,
     
      
    },
    {  
      headerName: 'Auction ID',
      field: 'auctionID',
      width: 200,
      resizable: true,
      
    },
    {  
      headerName: 'Winner Name',
      field: 'winnerName',
      width: 300,
      resizable: true,
      cellRenderer: this.nameRenderer
      
    },
    {  
      headerName: 'Open Portal',
      field: 'openPortal',
      width: 300,
      resizable: true,
      
    }
     
  
  ];
  

  activeRowData = [

    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    },
    { 
      clientID:'A0B1C006',
      date: '2020-03-26',
      auctionName: 'Goffrey Build',
      auctionID: 'A0B1C051',
      winnerName: 'Vecihe Yildiz',
      openPortal: 'View'
    }
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  nameRenderer(params:any){

    let winnerName = params.data.winnerName
 
    var ui = document.createElement('div');

    ui.style.color = 'rgba(74, 137, 152, 1)';

    ui.innerHTML =
      `
        <div style=" text-align: center;">${winnerName}</div>
        
      `;

    return ui;

  }

}
