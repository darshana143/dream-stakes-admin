import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-permalink',
  templateUrl: './settings-permalink.component.html',
  styleUrls: ['./settings-permalink.component.scss']
})
export class SettingsPermalinkComponent implements OnInit {

  timecategories: any[] = [
    { name: 'Plain', key: 'PL'},
    { name: 'Day and Name', key: 'DN' },
    { name: 'Month and name', key: 'MN'},
    { name: 'Numeric', key: 'NU'},
    { name: 'Post name', key: 'PN'},
    { name: 'Custom Structure', key: 'CS' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
