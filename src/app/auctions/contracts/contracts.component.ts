import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { IGridFilter } from '../../app.types';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;

  // selectedIndex;
  rowSelection;
  gridFiletr = IGridFilter;
  filteredData;
  filteredDataCount = {
    all: 15,
    active: 2,
    unpublished: 3,
    draft: 4,
    trash: 5
  }

  filterTitle = "All";

  activeColumnDefs = [

    {  
      headerName: '',
      field: 'check',
      width: 140,
      resizable: true,
      headerCheckboxSelection: true,
      checkboxSelection: true,
      
    },
    {  
      headerName: 'Contract Name',
      field: 'ContractName',
      width: 420,
      resizable: true,
      unSortIcon: true,
      sortable: true,
      sort: 'desc'
     
    },
    {  
      headerName: 'Status',
      field: 'Status',
      width: 346,
      resizable: true,
      cellRenderer: this.statusRenderer
      
    },
    {  
      headerName: 'Submitted on',
      field: 'SubmittedOn',
      width: 350,
      resizable: true,
      
    }
    
    
  
  ];
  

  activeRowData = [
    { 
      Id:1,
      ContractName: 'DOTUSDT',
      Status: 'Unpublish',
      SubmittedOn: 'Dec 30, 2019 05:18'
    },
    { 
      Id:2,
      ContractName: 'ETHUSDT',
      Status: 'Active',
      SubmittedOn: 'Dec 30, 2019 06:55'
    },
    { 
      Id:3,
      ContractName: 'XRPUSDT',
      Status: 'Draft',
      SubmittedOn: 'Feb 2, 2019 19:28'
    },
    { 
      Id:4,
      ContractName: 'SHIB1000USDT',
      Status: 'Active',
      SubmittedOn: 'Mar 20, 2019 23:14'
    },
    { 
      Id:5,
      ContractName: 'XRPUSDT',
      Status: 'Unpublish',
      SubmittedOn: 'Dec 7, 2019 23:26'
    },
    { 
      Id:6,
      ContractName: 'BTCUSDT',
      Status: 'Active',
      SubmittedOn: 'Feb 2, 2019 19:28'
    },
    { 
      Id:7,
      ContractName: 'SANDUSDT',
      Status: 'Draft',
      SubmittedOn: 'Dec 30, 2019 05:18'
    },
    { 
      Id:81,
      ContractName: 'ETHUSDT',
      Status: 'Active',
      SubmittedOn: 'Mar 20, 2019 23:14'
    },
    { 
      Id:9,
      ContractName: 'LINKUSDT',
      Status: 'Draft',
      SubmittedOn: 'Dec 7, 2019 23:26'
    },
    {
      Id:10,
      ContractName: 'XEMUSDT',
      Status: 'Active',
      SubmittedOn: 'Feb 2, 2019 19:28'
    }    
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
      label: 'Active',
      value: {
        id: 2,
        name: 'Active'
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
  ]

  constructor(private elem: ElementRef) {

    this.rowSelection = 'multiple';

  }

  ngOnInit(): void {

    this.filteredData = this.activeRowData;

    this.filteredDataCount = {
      all: this.activeRowData.length,
      active: this.activeRowData.filter(aRow => aRow.Status === 'Active').length,
      unpublished: this.activeRowData.filter(aRow => aRow.Status === 'Unpublish').length,
      draft: this.activeRowData.filter(aRow => aRow.Status === 'Draft').length,
      trash: this.activeRowData.filter(aRow => aRow.Status === 'Trash').length
    }

  }

  onAuctionSelect(params){
    alert("clicked")
  }

  gridFilter(filetr: IGridFilter){

    let tabButtons = Array.from(this.elem.nativeElement.querySelectorAll('.filters'));

    tabButtons.forEach((tab: any) => {

      let btnId = tab.id;

      if(btnId === filetr)
        tab.classList.add('select');
      else
        tab.classList.remove('select');

    });

    switch(filetr){
      case this.gridFiletr.all: 
        this.filteredData = this.activeRowData; 
        this.filterTitle = "All"; 
      break;

      case this.gridFiletr.active: 
        this.filteredData = this.activeRowData.filter(aRow => aRow.Status === 'Active');
        this.filterTitle = "Active";
        break;

      case this.gridFiletr.draft: 
        this.filteredData = this.activeRowData.filter(aRow => aRow.Status === 'Draft');
        this.filterTitle = "Draft";
        break;

      case this.gridFiletr.unpublished: 
        this.filteredData = this.activeRowData.filter(aRow => aRow.Status === 'Unpublish'); 
        this.filterTitle = "Unpublished";
        break;
      case this.gridFiletr.trash: 
        this.filteredData = this.activeRowData.filter(aRow => aRow.Status === 'Trash'); 
        this.filterTitle = "Trash";
        break;
    }

  }

  statusRenderer(params:any){

    let status = params.data.Status
 
    var ui = document.createElement('div');

    switch (status) {

      case "Unpublish":
        ui.style.color = '#EE212E';
      break;

      case "Active":
        ui.style.color = '#64C8BC';
      break;

      case "Trash":
        ui.style.color = '#616161';
      break;
        
      default:
        ui.style.color = '#6554C0';
      break;

    }

    ui.innerHTML =
      `
        <div style=" text-align: center;">${status}</div>
        
      `;

    return ui;

  }

  onRowSelected(params) {

    var x = params.api.getSelectedRows();
    console.log(x)
  }

}
