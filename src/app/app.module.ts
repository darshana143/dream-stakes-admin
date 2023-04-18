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
import { OverviewComponent } from './overview/overview.component';
import { AuctionsComponent } from './auctions/auctions.component';
import { DsComponentsModule } from './ds-components/rs-components.module';
import { AuctionAddNewComponent } from './auctions/auction-add-new/auction-add-new.component';
import { ContractsComponent } from './auctions/contracts/contracts.component';
import { WinnersComponent } from './auctions/winners/winners.component';

// ------------------------- PrimeNG -----------------------------
import {InputTextModule} from 'primeng/inputtext';
import {ChartModule} from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from "primeng/tabview";
import {EditorModule} from 'primeng/editor';










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
    WinnersComponent
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
    EditorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
