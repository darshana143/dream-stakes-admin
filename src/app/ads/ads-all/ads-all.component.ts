import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ads-all',
  templateUrl: './ads-all.component.html',
  styleUrls: ['./ads-all.component.scss']
})
export class AdsAllComponent implements OnInit {

  detailContentPerformances = [

    {
      title: 'Most Visited City',
      count: 'Austin'

    },

    {
      
      title: 'Homeowners Insurance',
      count: '244'

    },

    {
      
      title: 'Ages(Most Registered)',
      count: '18-24'

    },

    {

      title: 'Gender',
      count: 'Male'

    }

  ];


  activeColumnDefs = [

    {  
      headerName: '',
      field: 'check',
      width: 150,
      resizable: true,
      headerCheckboxSelection: true,
      checkboxSelection: true,
      
    },

    {  
      headerName: 'Image',
      field: 'image',
      width: 200,
      resizable: true,
      cellRenderer: this.imageRenderer
      
    },

    {  
      headerName: 'Title',
      field: 'title',
      width: 350,
      resizable: true,
     
    },

    {  
      headerName: 'Link',
      field: 'link',
      width: 450,
      resizable: true,
     
      
    },

    {  
      headerName: 'Area',
      field: 'area',
      width: 275,
      resizable: true,
      
    },

    {  
      headerName: 'Live status',
      field: 'liveStatus',
      width: 175,
      resizable: true,
      cellRenderer: this.liveStatusRenderer
      
    },
     
  ];
  

  activeRowData = [

    {
      image: './assets/user.png',
      title: 'Coca - cola ad',
      link:'tranthuy.nute@gmail.com',
      area:'Top',
      liveStatus:'live'
      
    },
    {
      image: './assets/user.png',
      title: 'Coca - cola ad',
      link:'tranthuy.nute@gmail.com',
      area:'Top',
      liveStatus:''
      
    },
    {
      image: './assets/user.png',
      title: 'Coca - cola ad',
      link:'tranthuy.nute@gmail.com',
      area:'Top',
      liveStatus:'live'
      
    },
    {
      image: './assets/user.png',
      title: 'Coca - cola ad',
      link:'tranthuy.nute@gmail.com',
      area:'Top',
      liveStatus:''
      
    },
   
  ];


  bulkActions = [
    {
      label: 'Bulk Actions',
      value: {
        id: 1,
        name: 'Bulk Actions'
      }
    },
    {
      label: 'Set Live',
      value: {
        id: 2,
        name: 'Set Live'
      }
    },
    {
      label: 'Unpublsih',
      value: {
        id: 3,
        name: 'Unpublsih'
      }
    },
    {
      label: 'Delete',
      value: {
        id: 4,
        name: 'Delete'
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  imageRenderer(params:any){

    let userpic = params.data.image
 
    var ui = document.createElement('div');
    ui.style.display = "flex";
    ui.style.alignItems = "center";
    ui.style.justifyContent = "center";

    ui.innerHTML =
      `
        <img src = "${userpic}"/ style="width: 29px; height: 29px;">
        
      `;

    return ui;

  }

  liveStatusRenderer(params:any){

    let status = params.data.liveStatus

    var ui = document.createElement('div');

    if( status ==='live'){

      ui.innerHTML =
        `
          <div style=" height: 16.5px;
          width: 16.5px;
          background: linear-gradient(180deg, #87EB78 0%, #29D112 100%);
          border-radius: 8px;
          "></div>
          
        `;

      return ui;

    }


  }

  // onCellClicked(params) {

  //   if (params.event.target.dataset.action == 'toggle' && params.column.getColId() == 'action') {

  //     const cellRendererInstances = params.api.getCellRendererInstances({
  //       rowNodes: [params.node],
  //       columns: [params.column],
  //     });

  //     if (cellRendererInstances.length > 0) {
  //       const instance = cellRendererInstances[0].getFrameworkComponentInstance();
  //       instance.togglePopup();
  //     }

  //   }

  // }

}
