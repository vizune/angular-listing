import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'favourite-add',
    templateUrl: './favourite-add.component.html',
    styleUrls: [ './favourite-add.component.scss' ]
})
export class FavouriteAddComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        this.getID();
    }

    getID(): void {
        // Retrieve ID of item from parent component
    }

    getStatus(): void {
        // Find out whether item has been added to favourites
    }

    setStatus(status: boolean): void {
        // Sets status (add or remove from favourites)
    }
}