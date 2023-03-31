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

// ------------------------- PrimeNG -----------------------------
import {InputTextModule} from 'primeng/inputtext';
import {ChartModule} from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from "primeng/tabview";
import { DsComponentsModule } from './ds-components/rs-components.module';
import { AuctionAddNewComponent } from './auctions/auction-add-new/auction-add-new.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    LeftPanalComponent,
    OverviewComponent,
    AuctionsComponent,
    AuctionAddNewComponent
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
    DsComponentsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
