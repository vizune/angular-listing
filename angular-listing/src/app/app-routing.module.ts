import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingDashboardComponent } from './listing-dashboard/listing-dashboard.component';
import { ListingDetailComponent } from './listing-detail/listing-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ListingDashboardComponent },
  { path: 'detail/:id', component: ListingDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
