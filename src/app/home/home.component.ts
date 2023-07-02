import { Component, OnInit } from '@angular/core';
import { AdminMainViews, AdminSubViews } from '../app.types';
import { Interconnect } from 'ng-interconnect';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentMainView: number = AdminMainViews.overview;
  _MainViews = AdminMainViews;
  _SubViews = AdminSubViews;

  constructor(private interconnect: Interconnect, private chat: ChatService) { }

  ngOnInit(): void {

    //--------------- Home UI Listeners --------------------//
		this.interconnect.createListener('home/changeView', (_connection, command) => {

			this.currentMainView = command.subView || command.mainView;
			
		});

    this.chat.join();
   
  }

}
