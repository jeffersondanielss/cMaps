# Custom google maps

## Basic markup

´´´
<div id="map"
  data-pin-lat="-23.562353"
  data-pin-lng="-46.503113"
  data-map-lat="-23.562353"
  data-map-lng="-46.503113">
</div>

<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
<script src="scripts/map.js"></script>
<script>
  var map = new Map({
    'wrapperId': 'map'
  });
</script>
´´´