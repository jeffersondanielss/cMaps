# Custom Google Maps

First of all, get a Google API [Key/Authentication](https://developers.google.com/maps/documentation/javascript/get-api-key), and load the script.

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```

### Wrapper map need be something like:

```html
<div id="map"></div>
```

### Attributes lat/lang

```html
<div
  data-pin-lat="-23.562353" // Pin latitude
  data-pin-lng="-46.503113" // Pin longiture
  data-map-lat="-23.562353" // Map latitude
  data-map-lng="-46.503113" // Map longtude
></div>

```

### Markup finished
```html
<div id="map" data-pin-lat="-23.562353" data-pin-lng="-46.503113" data-map-lat="-23.562353" data-map-lng="-46.503113"></div>
```

### Starting map
```js
var map = new Map({ options });
```

### Options

Option | Type | Required | Description
------ | ---- | ------- | -----------
name | string | false | map name
wrapperId | true | true | container id map
icon | string | false | url to pin the way
zoom | number | false | Initial zoom map
zoomControl | boolean | false | manual zoom control
scrollwheel | boolean | false | mouse scroll for zoom
mapTypeControl | boolean | false | Choose the map type in the upper left corner
draggable | boolean | false | if this option is false the map can not be dragged
streetView | boolean | false | Control street view
color | object | false | undefined
color.street | string | false | undefined
color.roadText | string | false | undefined
color.importantPlaces | string | false | undefined
color.landscape | string | false | undefined
color.landscape__man_made | string | false | undefined
color.iconPlaces | array | false | undefined
color.inconPlaces.visibility | string | false | undefined
color.inconPlaces.invert_lightness | boolean | false | undefined
color.inconPlaces.saturation | number | false | undefined
color.inconPlaces.gamma | number | false | undefined
color.inconPlaces.hue | string | false | undefined

### Example

```js
var map = new Map({
  'name': 'map',
  'wrapperId':'map',
  'zoom': 16,
  'zoomControl': true,
  'mapTypeControl': true,
  'scrollwheel': true,
  'streetView': true,
  'draggable': true,
  'color': {
    'street': '#14191f',
    'roadText': '#bfcbda',
    'importantPlaces': '#abb7c3',
    'landscape': '#203246',
    'landscape__man_made': '#203246',
    'iconPlaces': [
      { 'visibility': 'on' },
      { 'invert_lightness': true },
      { 'saturation': 41 },
      { 'gamma': 1.71 },
      { 'hue': '#005eff' }
    ]
  }
});
```

#### Disclaimer
> Get a [Key/Authentication](https://developers.google.com/maps/documentation/javascript/get-api-key) or/and Create more styles in [this](http://googlemaps.github.io/js-samples/styledmaps/wizard/index.html) API.
