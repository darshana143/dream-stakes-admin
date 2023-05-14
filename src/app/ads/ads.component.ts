import { Component, OnInit } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {

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

  image: string | SafeUrl = './assets/add_new.png';
  text: string;
  displayArea =  [
    {
      label: 'Top',
      value: {
        id: 1,
        name: 'Top'
      }
    },
    {
      label: 'Bottom',
      value: {
        id: 2,
        name: 'Bottom'
      }
    }
  ]


  constructor(

    private sanitizer: DomSanitizer

  ) { }

  ngOnInit(): void {

    
  }

  updateImage(ev) {
    this.image = this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(ev.target.files[0])
    );
  }

}
