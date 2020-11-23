import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
    // API URL
    private listingUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=892ae99b0451fed76a0ece0a8d0c1414';


    constructor(
        private http: HttpClient) { }

    public sendRequest(){
        return this.http.get(this.listingUrl);
    }
}