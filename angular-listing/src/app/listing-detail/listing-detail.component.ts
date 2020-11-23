import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ListingService } from '../listing.service';

@Component({
    selector: 'listing-detail',
    templateUrl: './listing-detail.component.html',
    styleUrls: [ './listing-detail.component.scss' ]
})
export class ListingDetailComponent implements OnInit {
    detailId: number = 0;
    detailData: any;
    imageBasePath: string = "//image.tmdb.org/t/p/w220_and_h330_face";
    releaseDate: Date = new Date();

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private listingService: ListingService
    ) {}

    ngOnInit(): void {
        // Get ID for route URL
        this.route.params.subscribe(params => {
            this.detailId = params['id'];
        });

        this.getDetail(this.detailId);
    }

    getDetail(id: number): void {
        // Retrieve detail by id
        // potential improvement: function in Listing Services - getById parsing ID from route
        this.listingService.sendRequest().subscribe((data: any)=>{
            // Searches through data for items that match the route ID
            // When a match is found, store as detail data

            // Potential performance issue looping through all items?
            data.results.map((item: any) => {
                if(item["id"] && item["id"] == this.detailId) {
                   this.detailData = item;
                   this.releaseDate = new Date(this.detailData.release_date);
                }
            })
        })  
    }

    goBack(): void {
        // Triggered by button click
        // Return to listing dashboard
        this.location.back();
    }
}