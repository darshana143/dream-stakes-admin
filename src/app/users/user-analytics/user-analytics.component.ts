import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-analytics',
  templateUrl: './user-analytics.component.html',
  styleUrls: ['./user-analytics.component.scss']
})
export class UserAnalyticsComponent implements OnInit {

  
  selectedChartData: any;
  chartData: any;
  
  chartOptions: any;
  chartHeight: number = 300;
  chartWidth: number = 1074;

  performances :  any;
  periods :  any;
  selectedPeriod: any;
  
  currentOne;
  selectedOne;
  id :number = 1;

  detailContent;
  detailsInPeriod;
  detailContentPerformances;
  detailsPerformancesInPeriod;
  
  title;
 
  constructor() {

    this.chartData = {

      week:{

        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            data: [4.5,3, 3.5, 6.5, 5, 7.5, 8],
            backgroundColor: '#4A8998',
            borderColor: '#4A8998',
          }
        ]
  
      },

      month: {
        
      labels: ['1st Week', '2nd Week', '3rd Week', '4th Week', '5th Week'],
      datasets: [
        {
          data: [22, 33, 25, 37, 39],
          backgroundColor: '#4A8998',
          borderColor: '#4A8998',
        }
      ]

      }
    }

    this.chartOptions = {

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

    this.performances = [
      {
        label: 'Weekly Performance',
        value: {
          id: 1,
          name: 'Weekly Performance'
        }
      },
      {
        label: 'Monthly Performance',
        value: {
          id: 2,
          name: 'Monthly Performance'
        }
      }
    ]

    this.periods =[

      [
        {
          label: 'Week 1',
          value: {
            id: 1,
            name: 'Week 1'
          }
        },
    
        {
          label: 'Week 2',
          value: {
            id: 2,
            name: 'Week 2'
          }
        },
    
        {
          label: 'Week 3',
          value: {
            id: 1,
            name: 'Week 3'
          }
        },
    
        {
          label: 'Week 4',
          value: {
            id: 1,
            name: 'Week 4'
          }
        },
    
        {
          label: 'Week 5',
          value: {
            id: 1,
            name: 'Week 5'
          }
        }
      ],

      [
        
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
      
    ]

    this.detailsInPeriod =[

    [ 
      {
        title: 'Total Entrants',
        count: '3,000'

      },

      {
        
        title: 'Total Visitors',
        count: '5,000'

      },

      {
        
        title: '60 Days Inactive Users',
        count: '299'

      },

      {

        title: 'Total Registed Users',
        count: '3,450'

      }
    ],

    [ 
      {
        title: 'Total Entrants',
        count: '100'

      },

      {
        
        title: 'Total Visitors',
        count: '441'

      },

      {
        
        title: '60 Days Inactive Users',
        count: '74'

      },

      {

        title: 'Total Registed Users',
        count: '35'

      }
    ]
  
    ]

    this.detailsPerformancesInPeriod =[
      [
        {
          title: 'Total Registered',
          count: '54%'
    
        },
    
        {
          
          title: 'Returning Users',
          count: '50%'
    
        },
    
        {
          
          title: 'Total Visitors',
          count: '500'
    
        },
    
        {
    
          title: 'Total Entrants',
          count: '0'
    
        }
      ],

      [
        {
          title: 'Total Registered',
          count: '54%'
    
        },
    
        {
          
          title: 'Returning Users',
          count: '50%'
    
        },
    
        {
          
          title: 'Total Visitors',
          count: '40k'
    
        },
    
        {
    
          title: 'Total Entrants',
          count: '10k'
    
        }
      ]
  
    ]
      
  }

  ngOnInit(): void {

    this.selectedChartData = this.chartData.week;
    this.selectedPeriod = this.periods[0];
    this.title = 'Site Activity';
    this.detailContent = this.detailsInPeriod[0];
    this.detailContentPerformances = this.detailsPerformancesInPeriod[0];


    
  }

  setPeriod(){

    let idx = this.performances.findIndex(el => el.value.id === this.selectedOne.id);
    this.currentOne = this.performances[idx];
    this.id = this.currentOne.value.id ;

    switch (this.id) {

      case 1:
        this.selectedChartData = this.chartData.week;
        this.selectedPeriod = this.periods[0];
        this.title = 'Site Activity';
        this.detailContent = this.detailsInPeriod[0];
        this.detailContentPerformances = this.detailsPerformancesInPeriod[0];
        break;

      case 2:
        this.selectedChartData = this.chartData.month;
        this.selectedPeriod = this.periods[1];
        this.title = 'Complete Site Activity';
        this.detailContent = this.detailsInPeriod[1];
        this.detailContentPerformances = this.detailsPerformancesInPeriod[1];
        break;

    }

  }

}