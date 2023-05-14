import { Component, ElementRef, OnInit } from '@angular/core';
import { Interconnect, IMessageStream } from 'ng-interconnect';
import { AdminMainViews, AdminSubViews } from '../../app.types';

@Component({
  selector: 'app-left-panal',
  templateUrl: './left-panal.component.html',
  styleUrls: ['./left-panal.component.scss']
})
export class LeftPanalComponent implements OnInit {

  private changeView: IMessageStream | Promise<IMessageStream>;
  _MainViews = AdminMainViews;
  _SubViews = AdminSubViews;

  overviewBtn = './assets/btn-icons/icons8_overview 1.png';
  auctionsBtn = './assets/btn-icons/auction-btn.png';
  usersBtn = './assets/btn-icons/users-btn.png';
  messageBtn = './assets/btn-icons/message-btn.png';
  adsdBtn = './assets/btn-icons/ads-btn.png';
  archiveBtn = './assets/btn-icons/archive-btn.png';
  settingsBtn = './assets/btn-icons/settings-btn.png';

  showAuctionOptions: boolean = false;
  showUsersOptions: boolean = false;
  showMessageOptions: boolean = false;
  showAdsOptions: boolean = false;

  constructor(private interconnect: Interconnect, private elem: ElementRef) {

    this.changeView = interconnect.connectToListener('home/changeView', 'leftbar');
    if (this.changeView['then']) {
      this.changeView['then']((notifier) => this.changeView = notifier);
    }

  }

  ngOnInit(): void {
  }

  userChangeView(viewId, subViewId = undefined){

    (this.changeView as IMessageStream).emit({mainView: viewId, subView: subViewId});

    this.buttonsIconChange(viewId, subViewId);


  }

  private buttonsIconChange(viewId, subViewId){
    
    let leftbarButtons = Array.from(this.elem.nativeElement.querySelectorAll('.main-btns'));
    let leftbarOptionButtons = Array.from(this.elem.nativeElement.querySelectorAll('.option-btn'));
    
    leftbarButtons.forEach((btn: any) => {

      let btnId = +btn.id;

      if(btnId === viewId && btnId !== 999){

        switch(viewId){

          case this._MainViews.overview: 
            this.overviewBtn = './assets/btn-icons/icons8_overview 1.png';
            this.auctionsBtn = './assets/btn-icons/auction-btn.png';
            this.usersBtn = './assets/btn-icons/users-btn.png';
            this.messageBtn = './assets/btn-icons/message-btn.png';
            this.adsdBtn = './assets/btn-icons/ads-btn.png';
            this.archiveBtn = './assets/btn-icons/archive-btn.png';
            this.settingsBtn = './assets/btn-icons/settings-btn.png';

            this.showAuctionOptions = false;
            this.showUsersOptions = false;
            this.showMessageOptions = false;
            this.showAdsOptions = false;

          break;

          case this._MainViews.auctions:
            
            this.overviewBtn = './assets/btn-icons/overview.png';
            this.auctionsBtn = './assets/btn-icons/auction-white.png';
            this.usersBtn = './assets/btn-icons/users-btn.png';
            this.messageBtn = './assets/btn-icons/message-btn.png';
            this.adsdBtn = './assets/btn-icons/ads-btn.png';
            this.archiveBtn = './assets/btn-icons/archive-btn.png';
            this.settingsBtn = './assets/btn-icons/settings-btn.png';

            this.showAuctionOptions = true;
            this.showUsersOptions = false;
            this.showMessageOptions = false;
            this.showAdsOptions = false;


          break;

          case this._MainViews.users:
            this.overviewBtn = './assets/btn-icons/overview.png';
            this.auctionsBtn = './assets/btn-icons/auction-btn.png';
            this.usersBtn = './assets/btn-icons/users-white.png';
            this.messageBtn = './assets/btn-icons/message-btn.png';
            this.adsdBtn = './assets/btn-icons/ads-btn.png';
            this.archiveBtn = './assets/btn-icons/archive-btn.png';
            this.settingsBtn = './assets/btn-icons/settings-btn.png';

            this.showAuctionOptions = false;
            this.showUsersOptions = true;
            this.showMessageOptions = false;
            this.showAdsOptions = false;


          break;

          case this._MainViews.message:
            this.overviewBtn = './assets/btn-icons/overview.png';
            this.auctionsBtn = './assets/btn-icons/auction-btn.png';
            this.usersBtn = './assets/btn-icons/users-btn.png';
            this.messageBtn = './assets/btn-icons/message-white.png';
            this.adsdBtn = './assets/btn-icons/ads-btn.png';
            this.archiveBtn = './assets/btn-icons/archive-btn.png';
            this.settingsBtn = './assets/btn-icons/settings-btn.png';

            this.showAuctionOptions = false;
            this.showUsersOptions = false;
            this.showMessageOptions = true;
            this.showAdsOptions = false;

         
          break;

          case this._MainViews.ads:
            this.overviewBtn = './assets/btn-icons/overview.png';
            this.auctionsBtn = './assets/btn-icons/auction-btn.png';
            this.usersBtn = './assets/btn-icons/users-btn.png';
            this.messageBtn = './assets/btn-icons/message-btn.png';
            this.adsdBtn = './assets/btn-icons/ads-white.png';
            this.archiveBtn = './assets/btn-icons/archive-btn.png';
            this.settingsBtn = './assets/btn-icons/settings-btn.png';

            this.showAuctionOptions = false;
            this.showUsersOptions = false;
            this.showMessageOptions = false;
            this.showAdsOptions = true;

          break;

          case this._MainViews.archive:
            this.overviewBtn = './assets/btn-icons/overview.png';
            this.auctionsBtn = './assets/btn-icons/auction-btn.png';
            this.usersBtn = './assets/btn-icons/users-btn.png';
            this.messageBtn = './assets/btn-icons/message-btn.png';
            this.adsdBtn = './assets/btn-icons/ads-btn.png';
            this.archiveBtn = './assets/btn-icons/archive-white.png';
            this.settingsBtn = './assets/btn-icons/settings-btn.png';

            this.showAuctionOptions = false;
            this.showUsersOptions = false;
            this.showMessageOptions = false;
            this.showAdsOptions = false;

          break;

          case this._MainViews.settings:
            this.overviewBtn = './assets/btn-icons/overview.png';
            this.auctionsBtn = './assets/btn-icons/auction-btn.png';
            this.usersBtn = './assets/btn-icons/users-btn.png';
            this.messageBtn = './assets/btn-icons/message-btn.png';
            this.adsdBtn = './assets/btn-icons/ads-btn.png';
            this.archiveBtn = './assets/btn-icons/archive-btn.png';
            this.settingsBtn = './assets/btn-icons/settings-white.png';

            this.showAuctionOptions = false;
            this.showUsersOptions = false;
            this.showMessageOptions = false;
            this.showAdsOptions = false;

          break;

        }

        leftbarOptionButtons.forEach((optBtn: any) => {

          let subBtnId = +optBtn.id;

          if(subBtnId === subViewId)
            optBtn.classList.add('opt-btn-select');
          else
            optBtn.classList.remove('opt-btn-select');

        })

        btn.classList.add('select');

      }
      else
        btn.classList.remove('select');

    })

  }

}
