import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'listing-detail',
    templateUrl: './listing-detail.component.html',
    styleUrls: [ './listing-detail.component.scss' ]
})
export class ListingDetailComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getDetail();
    }

    getDetail(): void {
        // Retrieve detail by id
    }

    goBack(): void {
        // Triggered by button click
        // Return to listing dashboard
        this.location.back();
    }
}