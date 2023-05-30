import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  revenue = [
    {
      label: 'Monthly',
      value: {
        id: 1,
        name: 'Monthly'
      }
    },
    {
      label: 'Weekly',
      value: {
        id: 2,
        name: 'Weekly'
      }
    }
  ]

  detailContentPerformances=[
    {
      title: 'Projected Total Revenue',
      count: '$422.89K',
      detail: '23% Last Month'

    },

    {                 
      
      title: 'Total Revenue',
      count: '$400.44K',
      detail: '23% Last Month'

    },

    {
      
      title: 'Average Revenue Goal',
      count: '$574.95K',
      detail: '23% Last Month'

    }
  ]

  chartData = {
      
    labels: ['1st Week', '2nd Week', '3rd Week', '4th Week', '5th Week'],
    datasets: [
      {
        data: [22, 33, 25, 37, 39],
        backgroundColor: '#4A8998',
        borderColor: '#4A8998',
      }
    ]

  }

  chartOptions = {

    legend: {display: false},
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        maxBarThickness: 15,
        gridLines : {
          display : false
        },
        ticks: {
          fontFamily: 'Poppins', 
          fontSize: 11, 
          fontWeight: 400,
        }
      }],
      yAxes: [{
        ticks: {
          fontFamily: 'Poppins', 
          fontSize: 11, 
          fontWeight: 400,
          min: 0,
          callback: (value)=> {
            return  value + 'K'
          }
          
        }
      }]
    }
  }

  chartHeight: number = 300;
  chartWidth: number = 990;

  performances = [
    {
      label: 'Monthly Revenue',
      value: {
        id: 1,
        name: 'Monthly Revenue'
      }
    },
    {
      label: 'Monthly Revenue',
      value: {
        id: 2,
        name: 'Monthly Revenue'
      }
    }
  ]

  mounths =[

    {
      label: 'January',
      value: {
        id: 1,
        name: 'January'
      }
    },

    {
      label: 'February',
      value: {
        id: 2,
        name: 'February'
      }
    },

    {
      label: 'March',
      value: {
        id: 3,
        name: 'March'
      }
    },

    {
      label: 'April',
      value: {
        id: 4,
        name: 'April'
      }
    },

    {
      label: 'May',
      value: {
        id: 5,
        name: 'May'
      }
    },

    {
      label: 'Jane',
      value: {
        id: 6,
        name: 'Jane'
      }
    },

    {
      label: 'July',
      value: {
        id: 7,
        name: 'July'
      }
    },

    {
      label: 'August',
      value: {
        id: 8,
        name: 'August'
      }
    },

    {
      label: 'September',
      value: {
        id: 9,
        name: 'September'
      }
    },

    {
      label: 'October',
      value: {
        id: 10,
        name: 'October'
      }
    },

    {
      label: 'November',
      value: {
        id: 11,
        name: 'November'
      }
    },

    {
      label: 'December',
      value: {
        id: 12,
        name: 'December'
      }
    }
    
  ]

  detailContent =[

    {
      title: 'April Profit',
      count: '$322.69K',
      detail: '23% Last Month'

    },

    {
      title: 'Invoiced',
      count: '$422.89K',
      detail: '23% Last Month'

    },

    {
      title: 'April Profit',
      count: '$322.69K'
    },

    {
      title: 'April Profit',
      count: '$322.69K',
      detail: '23% Last Month'

    },

    {
      title: 'New Client Revenue',
      count: '$422.89K'

    },

    {
      title: 'Ave. Team Revenue',
      count: '$422.89K'

    },
  
  ]

  notificationItem;

    
  notifications = [
    
    {
      image: './assets/archive/notificationImg.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg2.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg3.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg4.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg2.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg3.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg4.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg2.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg3.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg4.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg2.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg3.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    },
    {
      image: './assets/archive/notificationImg4.png',
      message: 'Jim_Gorden Bids 450$ for Heffel Fine Art Auction House (Highest Bid for Now)',
      time: '2m'
    }
    
   
  ]

  activeColumnDefs = [

    {  
      headerName: 'Auction',
      field: 'auction',
      width: 350,
      resizable: true,
      cellRenderer: this.auctionRenderer
      
    },

    {  
      headerName: 'Auction Type',
      field: 'auctionType',
      width: 300,
      resizable: true,
     
    },

    {  
      headerName: 'Status',
      field: 'Status',
      width: 346,
      resizable: true,
      cellRenderer: this.statusRenderer
      
    },

    {  
      headerName: 'Engagement',
      field: 'engagement',
      width: 300,
      resizable: true,
      cellRenderer: this.engagementRenderer
      
    },

    {  
      headerName: 'Crowd',
      field: 'crowd',
      width: 300,
      resizable: true,
      cellRenderer: this.crowdRenderer
      
    }
  
  ];
  

  activeRowData = [
   
    {
      auction: 'ARTIANA',
      auctionType:'Duplex',
      Status: 'Ongoing',
      engagement:'54',
      pic: './assets/user.png'
      
    },

    {
      auction: 'Waddington',
      auctionType:'Duplex',
      Status: 'Ongoing',
      engagement:'87',
      crowd:'74',
      pic: './assets/user.png'
      
    },

    {
      auction: 'Waddington',
      auctionType:'Duplex',
      Status: 'Ongoing',
      engagement:'90',
      crowd:'100',
      pic: './assets/user.png'
      
    },

    {
      auction: 'Waddington',
      auctionType:'Duplex',
      Status: 'Ongoing',
      engagement:'55',
      crowd:'100',
      pic: './assets/user.png'
      
    },

    {
      auction: 'Waddington',
      auctionType:'Duplex',
      Status: 'Ongoing',
      engagement:'88',
      crowd:'100',
      pic: './assets/user.png'
      
    },

    {
      auction: 'Waddington',
      auctionType:'Duplex',
      Status: 'Ongoing',
      engagement:'84',
      crowd:'100',
      pic: './assets/user.png'
      
    },

    {
      auction: 'ARTIANA',
      auctionType:'Duplex',
      Status: 'Ongoing',
      engagement:'54',
      pic: './assets/user.png'
      
    },

    {
      auction: 'Waddington',
      auctionType:'Duplex',
      Status: 'Ongoing',
      engagement:'87',
      crowd:'74',
      pic: './assets/user.png'
      
    },
    
    {
      auction: 'Waddington',
      auctionType:'Duplex',
      Status: 'Ongoing',
      engagement:'90',
      crowd:'100',
      pic: './assets/user.png'
      
    },

    {
      auction: 'Waddington',
      auctionType:'Duplex',
      Status: 'Ongoing',
      engagement:'55',
      crowd:'100',
      pic: './assets/user.png'
      
    },

    {
      auction: 'Waddington',
      auctionType:'Duplex',
      Status: 'Ongoing',
      engagement:'88',
      crowd:'100',
      pic: './assets/user.png'
      
    },

    {
      auction: 'Waddington',
      auctionType:'Duplex',
      Status: 'Ongoing',
      engagement:'84',
      crowd:'100',
      pic: './assets/user.png'
      
    },
    
  ]

  constructor() {

    
   }

  ngOnInit(): void {

    this.notificationItem = this.notifications[0];
  }
  


  statusRenderer(params:any){

    let status = params.data.Status
 
    var ui = document.createElement('div');

    switch (status) {

      case "Ended":
        ui.style.color = '#EE212E';
      break;

      case "Ongoing":
        ui.style.color = '#64C8BC';
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

  auctionRenderer(params:any){

    let user = params.data.auction
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

  engagementRenderer(params:any){

    let num = +params.data.engagement
 
    var ui = document.createElement('div');

    if(!isNaN(num)){

      if(num < 55){

        ui.style.color = '#F18032';
  
      }

      else if(num < 65){
  
        ui.style.color = '#FAA932';
  
      }
  
      else if(num < 75){
  
        ui.style.color = '#81C02B';
  
      }
  
      else if(num < 85){
  
        ui.style.color = '#64C8BC';
  
      }
  
      else if(num < 90){
  
        ui.style.color = ' #81C02B';
  
      }
  
      else{
  
        ui.style.color = '#01AD23';
  
      }
  
      ui.innerHTML =
        `
          <div style=" text-align: center;">${num}%</div>
          
        `;
  
      return ui;
    }

    else{
      ui.innerHTML =
      `
        <div style=" text-align: center;"></div>
        
      `;

    return ui;
    }

  }

  crowdRenderer(params:any){

    let num = +params.data.crowd
 
    var ui = document.createElement('div');

    
    if(!isNaN(num)){

      if(num < 55){

        ui.style.color = '#F18032';
  
      }

      else if(num < 65){
  
        ui.style.color = '#FAA932';
  
      }
  
      else if(num < 75){
  
        ui.style.color = '#81C02B';
  
      }
  
      else if(num < 85){
  
        ui.style.color = '#64C8BC';
  
      }
  
      else if(num < 90){
  
        ui.style.color = ' #81C02B';
  
      }
  
      else{
  
        ui.style.color = '#01AD23';
  
      }
  
      ui.innerHTML =
        `
          <div style=" text-align: center;">${num}%</div>
          
        `;
  
      return ui;
    }

    else{
      ui.innerHTML =
      `
        <div style=" text-align: center;"></div>
        
      `;

    return ui;
    }

  }

}
