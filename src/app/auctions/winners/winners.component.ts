import { Component, OnInit } from '@angular/core';
import { RegularGridPopupComponent } from 'src/app/ds-components/ag-grid/regular-popup/regular-popup.component';

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
      width: 150,
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
      width: 400,
      resizable: true,
      cellRenderer: this.nameRenderer
      
    },
    {  
      headerName: 'Open Portal',
      field: 'openPortal',
      width: 200,
      resizable: true,
      cellRenderer: this.openPortalRenderer
      
    },
    {  
      headerName: '',
      field: 'action',
      width: 50,
      resizable: true,
      cellRendererFramework: RegularGridPopupComponent,
      
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

  openPortalRenderer(params:any){

    let openPortal = params.data.openPortal
 
    var ui = document.createElement('div');

    ui.style.color = '#F9A369';

    ui.innerHTML =
      `
        <div style=" text-align: center;">${openPortal}</div>
        
      `;

    return ui;

  }

  onCellClicked(params) {

    if (params.event.target.dataset.action == 'toggle' && params.column.getColId() == 'action') {

      const cellRendererInstances = params.api.getCellRendererInstances({
        rowNodes: [params.node],
        columns: [params.column],
      });

      if (cellRendererInstances.length > 0) {
        const instance = cellRendererInstances[0].getFrameworkComponentInstance();
        instance.togglePopup();
      }

    }

  }

}
