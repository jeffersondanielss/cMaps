(function (root, factory) {
  'use strict'
  if( typeof define === 'function' && define.amd ) {
    define('cMap', function() {
      return factory
    })
  } else if( typeof module === 'object' && module.exports ) {
    module.exports = factory
  } else {
    root.cMap = factory
  }
}(this, function cMap(options){
  'use strict'
  
  var wrapper = document.getElementById(options.wrapperId)

  function configure(options) {
    return {
      zoom: options.zoom || 15,
      center: new google.maps.LatLng(options.mapLat, options.mapLng),
      panControl: false,
      zoomControl: options.zoomControl,
      mapTypeControl: options.mapTypeControl,
      scaleControl: false,
      streetViewControl: options.streetView,
      overviewMapControl: false,
      scrollwheel: options.scrollwheel,
      draggable: options.draggable,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
      }
    }
  }

  function loadGoogleAPI(key, callback) {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://maps.googleapis.com/maps/api/js?key=' + key
    script.onload = callback
    document.body.append(script)
  }

  function createStyles(styles, name){
    return new google.maps.StyledMapType(styles, {name: name})
  }

  function createMap(div, config, layout) {
    var map = new google.maps.Map(div, config)
    map.mapTypes.set('map_style', layout)
    map.setMapTypeId('map_style')

    return map
  }

  function marker(map){
    var marker = new google.maps.Marker({
      position: { lat: options.pinLat, lng: options.pinLng },
      map: map,
      icon: options.icon,
      animation: google.maps.Animation.DROP
    })
  }

  function initialize() {
    var layout = createStyles(options.styles, options.name)
    var config = configure(options)
    var map = createMap(wrapper, config, layout)
    var market = marker(map)
  }

  loadGoogleAPI(options.key, initialize)

}))