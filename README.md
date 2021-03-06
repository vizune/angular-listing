# angular-listing
Angular (V11) Listing Component

## Tools / Resources
* Angular V11 - https://angular.io
* Bootstrap for CSS grid system - https://getbootstrap.com
* Feather icons - https://feathericons.com
* Google Fonts - https://fonts.google.com/specimen/Sarabun

## Project requirements
* First screen displays a list of movies using TMDB API. This list must contain the name and poster.
* Clicking on an item takes the user to the second screen containing more information about the selected movie. This should include the movie title, overview, date released and vote average where available.
* This screen should give users the ability to mark a movie as a favourite to a data persistence mechanism of your choice.
* For favourite movies, the first screen should display a favourite icon on the list item and the toggle in the top-right corner allows the user to either display all movies or only the ones they marked as favourites.

## Requirements completed
* Listing Dashboard retrieves movie data from the provided API using a services then lists items with ngFor
* Listing Detail using ID from route URL to find a match within data and displays content on screen

## Requirements unfinished
* Voter average displays as star icons
* Add to favourite functionality. Please see code comments in favourite.add component for general idea for functions.
* In a normal project, it is common practice to implement unit testing with additional time and budget set aside for this aspect. Due to time restrictions, my main focus was to present as much of the component functionality as possible. In previous Angular projects I have used Protractor, Mocha, Chai and Cucumber. If I had more time to work on this project I would consider Jest as my personal preference. Although the default Angular app setup uses Karma so I would do more research into this to compare Jest/Karma then decide from there which one I would use for the project.

## Enhancements added
Button on Listing Detail to go back to Listing Dashboard. This improves the UX flow when browsing through multiple movies.

## Other potential enhancements
* UI enhancements, component styling e.g. cards for listing items
* SVG sprite for icons
* Pagination
* Items per page filter
* Sorting e.g. Alphabetically, release date, rating, etc.
* Set personal rating - hover over listing detail's star rating icons in order to submit personal rating
