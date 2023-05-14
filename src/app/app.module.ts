import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './ui-containers/top-bar/top-bar.component';
import { LeftPanalComponent } from './ui-containers/left-panal/left-panal.component';
import { RightPanalComponent } from './ui-containers/right-panal/right-panal.component';
import { OverviewComponent } from './overview/overview.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { DsComponentsModule } from './ds-components/rs-components.module';
import { AuctionAddNewComponent } from './auctions/auction-add-new/auction-add-new.component';
import { ContractsComponent } from './auctions/contracts/contracts.component';
import { WinnersComponent } from './auctions/winners/winners.component';

import { UsersComponent } from './users/users.component';
import { UserAnalyticsComponent } from './users/user-analytics/user-analytics.component';
import { AllUsersComponent } from './users/all-users/all-users.component';
import { AddNewUsersComponent } from './users/add-new-users/add-new-users.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { MessageComponent } from './message/message.component';
import { MassMsgComponent } from './message/mass-msg/mass-msg.component'

// ------------------------- PrimeNG -----------------------------
import {InputTextModule} from 'primeng/inputtext';
import {ChartModule} from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from "primeng/tabview";
import {EditorModule} from 'primeng/editor';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import {RadioButtonModule} from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { ClientSideComponent } from './message/client-side/client-side.component';
import { AdsComponent } from './ads/ads.component';
import { AdsAllComponent } from './ads/ads-all/ads-all.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    LeftPanalComponent,
    OverviewComponent,
    AuctionsComponent,
    AuctionAddNewComponent,
    ContractsComponent,
    WinnersComponent,
    UsersComponent,
    UserAnalyticsComponent,
    AllUsersComponent,
    AddNewUsersComponent,
    UserProfileComponent,
    MessageComponent,
    MassMsgComponent,
    RightPanalComponent,
    ClientSideComponent,
    AdsComponent,
    AdsAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ChartModule,
    DropdownModule,
    BrowserAnimationsModule,
    FormsModule,
    TabViewModule,
    AgGridModule,
    DsComponentsModule,
    EditorModule,
    CheckboxModule,
    InputSwitchModule,
    RadioButtonModule,
    CalendarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
