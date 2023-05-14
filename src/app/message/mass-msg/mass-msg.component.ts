import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { IGridFilterMsg } from 'src/app/app.types';
import { RegularGridPopupComponent } from 'src/app/ds-components/ag-grid/regular-popup/regular-popup.component';

@Component({
  selector: 'app-mass-msg',
  templateUrl: './mass-msg.component.html',
  styleUrls: ['./mass-msg.component.scss']
})
export class MassMsgComponent implements OnInit {

  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;

  selectedType;

  recipents = [
    {
      label: 'All Clients',
      value: {
        id: 1,
        name: 'All Clients'
      }
    },
    {
      label: 'All Builders',
      value: {
        id: 2,
        name: 'All Builders'
      }
    },
    {
      label: 'All Clients & Builders',
      value: {
        id: 3,
        name: 'All Clients & Builders'
      }
    },
    {
      label: 'Custom',
      value: {
        id: 4,
        name: 'Custom'
      }
    }
  ]

  part1: boolean = false;
  part2: boolean = false;

  date: Date;
  time: Date;

  rowSelection;
  gridFiletr = IGridFilterMsg;
  filteredData;
  filteredDataCount = {
    all: 15,
    Message: 2,
    Email: 3,
    SMS: 4,
    Trash: 5
  }

  filterTitle = "All";

  activeColumnDefs = [

    {  
      headerName: '',
      field: 'check',
      width: 100,
      resizable: true,
      headerCheckboxSelection: true,
      checkboxSelection: true,
      
    },
    {  
      headerName: 'Subject',
      field: 'Subject',
      width: 320,
      resizable: true,
     
    },
    {  
      headerName: 'Via',
      field: 'Via',
      width: 246,
      resizable: true,
      
      
    },
    {  
      headerName: 'Receivers',
      field: 'Receivers',
      width: 245,
      resizable: true,
      
    },
    {  
      headerName: 'Started on',
      field: 'StartedOn',
      width: 200,
      resizable: true,
      
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
      Id:1,
      Subject: 'Promotion 1',
      Via: 'SMS',
      Receivers: '10 Persons',
      StartedOn: 'Dec 30, 2019 05:18'
    },
    { 
      Id:2,
      Subject: 'Our New Services',
      Via: 'Email',
      Receivers: 'All clients',
      StartedOn: 'Dec 30, 2019 07:52'
    },
    { 
      Id:3,
      Subject: 'Promotion 1',
      Via: 'SMS',
      Receivers: '10 Persons',
      StartedOn: 'Dec 30, 2019 05:18'
    },
    { 
      Id:14,
      Subject: 'Promotion 1',
      Via: 'Message',
      Receivers: '10 Persons',
      StartedOn: 'Dec 30, 2019 05:18'
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

  constructor(

    private elem: ElementRef
  ) { }

  ngOnInit(): void {

    this.selectedType = 1;

    this.filteredData = this.activeRowData;

    this.filteredDataCount = {
      all: this.activeRowData.length,
      Message: this.activeRowData.filter(aRow => aRow.Via === 'Message').length,
      Email: this.activeRowData.filter(aRow => aRow.Via === 'Email').length,
      SMS: this.activeRowData.filter(aRow => aRow.Via === 'SMS').length,
      Trash: this.activeRowData.filter(aRow => aRow.Via === 'Trash').length
    }
    
  }

  selectTemplate(element, id) {

    element.id = id;
    this.selectedType = id;

    let tabButtons = Array.from(this.elem.nativeElement.querySelectorAll('.opt-div'));
    
    tabButtons.forEach((btn: any) => {

      let btnId = btn.id;

      if(id  ===  btnId)

        btn.classList.add('opt-div-select');
      
      else

        btn.classList.remove('opt-div-select');

    });
  

  }

  makeImmediatelyTrue() {
    this.part1 = true;
    this.part2 = false;
  }

  makeStartSendingSMSatTrue() {
    this.part2 = true;
    this.part1 = false;
  }

  gridFilter(filetr: IGridFilterMsg){

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

      case this.gridFiletr.Message: 
        this.filteredData = this.activeRowData.filter(aRow => aRow.Via === 'Message');
        this.filterTitle = "Message";
        break;

      case this.gridFiletr.Email: 
        this.filteredData = this.activeRowData.filter(aRow => aRow.Via === 'Email');
        this.filterTitle = "Email";
        break;

      case this.gridFiletr.SMS: 
        this.filteredData = this.activeRowData.filter(aRow => aRow.Via === 'SMS'); 
        this.filterTitle = "SMS";
        break;
      case this.gridFiletr.Trash: 
        this.filteredData = this.activeRowData.filter(aRow => aRow.Via === 'Trash'); 
        this.filterTitle = "Trash";
        break;
    }

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

  
  onRowSelected(params) {

    var x = params.api.getSelectedRows();
    console.log(x)
  }


}
