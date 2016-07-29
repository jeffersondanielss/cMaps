# Custom Map

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
var map = new cMap({ options });
```

### Options

Option | Type | Description | Example
------ | ---- | ----------- | -----------
name | string | Map name | 'cMap'
wrapperId | string | Container id map | 'map'
icon | string | url to pin the way | 'imgs/pin.png'
zoom | number | Initial zoom map | 16
zoomControl | boolean | Manual zoom control | true
scrollwheel | boolean | Mouse scroll for zoom | false
mapTypeControl | boolean | Choose the map type in the upper left corner | true
draggable | boolean | If this option is false the map can not be dragged | true
streetView | boolean | Control street view | false
color | object | object With the map colors | {}
color.street | string | Street colors | '#FF0000'
color.roadText | string | Color street names | '#FF0000'
color.importantPlaces | string | Names of important places | '#FF0000'
color.landscape | string | Color contour seats | '#FF0000'
color.landscape__man_made | string | Color of the blocks | '#FF0000'
color.iconPlaces | array | Configuration array of icons | []
color.inconPlaces.visibility | string | Enable the display of icons places | 'on' or 'off'
color.inconPlaces.invert_lightness | boolean | Enables invert lightness | true
color.inconPlaces.saturation | number | Icon saturation | 41
color.inconPlaces.gamma | number | Icon gamma | 1.71
color.inconPlaces.hue | string | Icon hue | '#FF0000'

### Example

```js
var map = new cMap({
  'name': 'cMap',
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
