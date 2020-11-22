import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'listing-dashboard',
    templateUrl: './listing-dashboard.component.html',
    styleUrls: [ './listing-dashboard.component.scss' ]
})
export class ListingDashboardComponent implements OnInit {
    title: string = "JOII-ful movies";

    constructor() {

    }

    ngOnInit(): void {
        console.log("init bruv")
    }
}