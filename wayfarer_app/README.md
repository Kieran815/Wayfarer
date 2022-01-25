# [Wayfarer](https://kmilligan.info/Wayfarer)

## Find Your Way

Powered by Google Places API, Wayfarer is designed to let you gather concise information about the places you want to visit.

-------------------------------
## Technologies

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)

![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)


[@ng-bootstrap/ng-bootstrap](https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap)

[@ngx-google-places-autocomplete](https://www.npmjs.com/package/ngx-google-places-autocomplete)

-------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The ```landing.component.html``` will need to be edited to run in a local environment.

```
landing.component.html
```

```
<!-- update for deployment to `/Wayfarer/cities` to route correctly on gh-pages -->
  <a href="/Wayfarer/cities" class="btn btn-primary" id="enter-site">Search</a>
```

**Register for a Google API @ [Google Cloud Platform](https://console.cloud.google.com/).**
- add api key to google script tag in `index.html`

```
index.html
```

```
<!-- Places script -->
<script src="https://maps.googleapis.com/maps/api/js?key=<YOUR_API_KEY_HERE>&libraries=places&language=en"></script>
```

## Links

[How To Build An Angular 12 Application With Google Places Autocomplete](https://www.c-sharpcorner.com/article/how-to-build-an-angular-12-application-with-google-places-autocomplete/)

[ngx-google-places-autocomplete](https://www.npmjs.com/package/ngx-google-places-autocomplete)

[Google Maps Platform Place Details](https://developers.google.com/maps/documentation/places/web-service/details#PlaceReview)

[Google Cloud Platform](https://console.cloud.google.com/)

[Adding City Images to My React App](https://codeburst.io/adding-city-images-to-your-react-app-14c937df2db2)

[Dynamic Carousel In Angular](https://stackblitz.com/edit/dynamic-carousel-in-angular?file=src%2Fapp%2Fcarousel%2Fcarousel.component.html)


## Todo List:

- App Modularized to allow Implementation of Google OAuth
- More Styling on components
- Fix type error for expected undefined variable
- Synthetic routing for places
- Render Weather in Modal