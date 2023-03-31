import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { IGridFilter } from '../app.types';
import { RegularGridCheckboxComponent } from '../ds-components/ag-grid/regular-checkbox/regular-checkbox.component';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss']
})
export class AuctionsComponent implements OnInit {

  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;

  selectedIndex;
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
      headerName: 'Name',
      field: 'Name',
      width: 420,
      resizable: true,
     
    },
    {  
      headerName: 'Status',
      field: 'Status',
      width: 346,
      resizable: true,
      
    },
    {  
      headerName: 'Categories',
      field: 'Categories',
      width: 345,
      resizable: true,
      
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
      Name: 'Marketing Cleanup',
      Status: 'Unpublish',
      Categories: 'Duplex Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Active',
      Categories: 'Single Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Draft',
      Categories: 'Single Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Active',
      Categories: 'Duplex Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Unpublish',
      Categories: 'Single Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Active',
      Categories: 'Single Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Draft',
      Categories: 'Duplex Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Active',
      Categories: 'Single Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Draft',
      Categories: 'Single Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Active',
      Categories: 'Single Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Active',
      Categories: 'Single Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Unpublish',
      Categories: 'Duplex Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Unpublish',
      Categories: 'Single Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Active',
      Categories: 'Duplex Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Draft',
      Categories: 'Duplex Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Active',
      Categories: 'Single Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Unpublish',
      Categories: 'Single Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Active',
      Categories: 'Single Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Draft',
      Categories: 'Duplex Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Active',
      Categories: 'Duplex Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Trash',
      Categories: 'Duplex Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Trash',
      Categories: 'Duplex Auction house',
      SubmittedOn: '28:36:17'
    },
    {
      Name: 'Marketing Cleanup',
      Status: 'Trash',
      Categories: '100%Duplex Auction house',
      SubmittedOn: '28:36:17'
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

  constructor(private elem: ElementRef) { }

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

  
  onChange($event) {

    this.selectedIndex = $event.index;

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


}
