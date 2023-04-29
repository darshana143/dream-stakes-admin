import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IGridFilter2 } from '../app.types';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  
  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;

  // selectedIndex;
  rowSelection;
  gridFiletr = IGridFilter2;
  filteredData;
  filteredDataCount = {
    Deleted: 30,
    Banned: 2,
  }

  filterTitle = "Deleted";

  activeColumnDefs = [

    {  
      headerName: '',
      field: 'check',
      width: 200,
      resizable: true,
      headerCheckboxSelection: true,
      checkboxSelection: true,
      
    },
    {  
      headerName: 'User Name',
      field: 'username',
      width: 350,
      resizable: true,
      cellRenderer: this.userRenderer
      
    },
    {  
      headerName: 'Name',
      field: 'name',
      width: 300,
      resizable: true,
     
    },
    {  
      headerName: 'Email',
      field: 'email',
      width: 370,
      resizable: true,
      
    },
    {  
      headerName: 'Role',
      field: 'role',
      width: 220,
      resizable: true,
      
    },
    {  
      headerName: 'Recover',
      field: 'recover',
      width: 150,
      resizable: true,
      cellRenderer: this.recoverBtnRenderer
      
    }
  
  ];
  

  activeRowData = [
   
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Banned',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Banned',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Banned',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Subscriber',
      Status: 'Deleted',
      pic: './assets/user.png'
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
      Deleted: this.activeRowData.filter(aRow => aRow.Status === 'Deleted').length,
      Banned: this.activeRowData.filter(aRow => aRow.Status === 'Banned').length
    }

  }

  

  onAuctionSelect(params){
    alert("clicked")
  }

  gridFilter(filetr: IGridFilter2){

    let tabButtons = Array.from(this.elem.nativeElement.querySelectorAll('.filters'));

    tabButtons.forEach((tab: any) => {

      let btnId = tab.id;

      if(btnId === filetr)
        tab.classList.add('select');
      else
        tab.classList.remove('select');

    });

    switch(filetr){
      case this.gridFiletr.Deleted: 
      this.filteredData = this.activeRowData.filter(aRow => aRow.Status === 'Deleted');
        this.filterTitle = "Deleted"; 
      break;

      case this.gridFiletr.Banned: 
        this.filteredData = this.activeRowData.filter(aRow => aRow.Status === 'Banned');
        this.filterTitle = "Banned";
        break;

    }

  }

  userRenderer(params:any){

    let user = params.data.username
    let userpic = params.data.pic
 
    var ui = document.createElement('div');
    ui.style.display = "flex";
    ui.style.alignItems = "center";
    ui.style.justifyContent = "center";

    ui.innerHTML =
      `
        <img src = "${userpic}"/ style="width: 29px; height: 29px;">
        <div style = " margin-left: 14px;">${user} </div>
        
      `;

    return ui;

  }

  recoverBtnRenderer(params:any){

 
    var ui = document.createElement('div');
    ui.style.display = "flex";
    ui.style.alignItems = "center";
    ui.style.justifyContent = "center";

    ui.innerHTML =
      `
      <button style ="border:none; background: transparent;">

        <img src="./assets/recover-btn.png"  style="width: 24px; height: 24px;"/>

      </button>
        
        
      `;

    return ui;

  }


}
