import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';

@Component({
    selector: 'listing-dashboard',
    templateUrl: './listing-dashboard.component.html',
    styleUrls: [ './listing-dashboard.component.scss' ]
})
export class ListingDashboardComponent implements OnInit {
    title: string = "JOII-full movies";
    imageBasePath: string = "//image.tmdb.org/t/p/w220_and_h330_face";
    listing: Array<any> = [];

    constructor(private listingService: ListingService) { }

    ngOnInit(): void {

        // Retrieve data from the Listing Service
        this.listingService.sendRequest().subscribe((data: any)=>{
            console.log(data);
            this.listing = data.results;
            console.log(this.listing)
        })  
    }
}