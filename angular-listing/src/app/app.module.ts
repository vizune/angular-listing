import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingDashboardComponent } from './listing-dashboard/listing-dashboard.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingDashboardComponent,
    ListingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
