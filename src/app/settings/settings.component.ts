import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  image: string | SafeUrl = './assets/settings/drop_img1.png';
  image2: string | SafeUrl = './assets/settings/drop_img1.png';
  image3: string | SafeUrl = './assets/settings/drop_img1.png';

  text: string;
  text2: string;

  selectedCategory: any = null;

  TimrZone = [
    {
      label: '(UTC-9:30)',
      value: {
        id: 1,
        name: '(UTC-9:30)'
      }
    },

    {
      label: '(UTC-9:00)',
      value: {
        id: 2,
        name: '(UTC-9:00)'
      }
    },

    {
      label: '(UTC-8:30)',
      value: {
        id: 3,
        name: '(UTC-8:30)'
      }
    },

    {
      label: '(UTC-8:00)',
      value: {
        id: 4,
        name: '(UTC-8:00)'
      }
    },

    {
      label: '(UTC-7:30)',
      value: {
        id: 5,
        name: '(UTC-7:30)'
      }
    }
    
  ]

  weekdays = [
    
    {
      label: 'Sunday',
      value: {
        id: 1,
        name: 'Sunday'
      }
    },

    {
      label: 'Monday',
      value: {
        id: 2,
        name: 'Monday'
      }
    },

    {
      label: 'Tuesday',
      value: {
        id: 3,
        name: 'Tuesday'
      }
    },

    {
      label: 'Wednsday',
      value: {
        id: 4,
        name: 'Wednsday'
      }
    },

    {
      label: 'Thursday',
      value: {
        id: 5,
        name: 'Thursday'
      }
    },

    {
      label: 'Friday',
      value: {
        id: 6,
        name: 'Friday'
      }
    },

    {
      label: 'Saturday',
      value: {
        id: 7,
        name: 'Saturday'
      }
    }
    
  ]

  datecategories: any[] = [
      { name: 'October 27, 2022', key: '1', label:'F j, Y' },
      { name: '2022-10-27', key: '2', label:'Y-m-d' },
      { name: '10/27/2022', key: '3', label:'m/d/Y' },
      { name: '27/10/2022', key: '4', label:'d/m/Y'},
      { name: 'Custom:', key: '5', label:'F/J/Y' }
  ]

  timecategories: any[] = [
    { name: '4:47 am', key: 'A', label:'g:i a' },
    { name: '4:47 AM', key: 'M', label:'g:i A' },
    { name: '4:47', key: 'P', label:'H:i' },
    { name: 'Custom:', key: 'S', label:'g:i a' }
  ];

  constructor(

    private sanitizer: DomSanitizer

  ) { }

  ngOnInit(): void {}

  updateBoardImage1(ev) {
    this.image = this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(ev.target.files[0])
    );
  }

  updateBoardImage2(ev) {
    this.image2 = this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(ev.target.files[0])
    );
  }

  updateBoardImage3(ev) {
    this.image3 = this.sanitizer.bypassSecurityTrustUrl(
      window.URL.createObjectURL(ev.target.files[0])
    );
  }

}
