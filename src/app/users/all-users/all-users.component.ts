import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { IGridFilterUsers } from 'src/app/app.types';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {
  
  @ViewChild('agGrid', { static: true }) agGrid: AgGridAngular;

  rowSelection;
  gridFiletr = IGridFilterUsers;
  filteredData;
  filteredDataCount = {
    all: 47,
    administrator:3,
    subscriber: 27,
    premium: 8,
    bulider: 9
    
  }

  filterTitle = "All";

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
      width: 400,
      resizable: true,
      
    },
    {  
      headerName: 'Role',
      field: 'role',
      width: 300,
      resizable: true,
      
    },
 
  
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
      role:'Premium',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Premium',
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
      role:'Premium',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Bulider',
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
      role:'Premium',
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
      role:'Administrator',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Administrator',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Administrator',
      Status: 'Deleted',
      pic: './assets/user.png'
      
    },
    {
      username: 'Dang_Kho',
      name: 'Dang-Khoa Nguyen',
      email:'tranthuy.nute@gmail.com',
      role:'Administrator',
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
      administrator: this.activeRowData.filter(aRow => aRow.role === 'Administrator').length,
      subscriber: this.activeRowData.filter(aRow => aRow.role === 'Subscriber').length,
      premium: this.activeRowData.filter(aRow => aRow.role === 'Premium').length,
      bulider: this.activeRowData.filter(aRow => aRow.role === 'Bulider').length
    }

  }

  
  // onChange($event) {

  //   this.selectedIndex = $event.index;

  // }

  onAuctionSelect(params){
    alert("clicked")
  }

  gridFilter(filetr: IGridFilterUsers){

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

      case this.gridFiletr.administrator: 
        this.filteredData = this.activeRowData.filter(aRow => aRow.role === 'Administrator');
        this.filterTitle = "Administrator";
        break;

      case this.gridFiletr.subscriber: 
        this.filteredData = this.activeRowData.filter(aRow => aRow.role === 'Subscriber');
        this.filterTitle = "Subscriber";
        break;

      case this.gridFiletr.premium: 
        this.filteredData = this.activeRowData.filter(aRow => aRow.role === 'Premium'); 
        this.filterTitle = "Premium";
        break;
      case this.gridFiletr.bulider: 
        this.filteredData = this.activeRowData.filter(aRow => aRow.role === 'Bulider'); 
        this.filterTitle = "Bulider";
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

}
