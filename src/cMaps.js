(function (root, factory) {
  'use strict'
  if( typeof define === 'function' && define.amd ) {
    define('cMaps', function() {
      return factory
    })
  } else if( typeof module === 'object' && module.exports ) {
    module.exports = factory
  } else {
    root.cMaps = factory
  }
}(this, function cMaps(options){
  'use strict'
  
  const wrapper = document.getElementById(options.wrapperId)

  const configure = options => ({
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
  })

  const hasGoogleApis = () =>
    document.getElementById('googleapis')

  const loadGoogleAPI = ({ key }, callback) => {
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}`
    script.onload = callback
    script.setAttribute('id', 'googleapis')
    document.body.append(script)
  }

  const createStyles = ({name, styles}) => {
    return new google.maps.StyledMapType(styles, {name: name})
  }

  const createMap = (div, config, layout) => {
    let map = new google.maps.Map(div, config)
    map.mapTypes.set('map_style', layout)
    map.setMapTypeId('map_style')

    return map
  }

  const marker = (map, { pinLat, pinLng, icon }) => {
    let marker = new google.maps.Marker({
      position: { lat: pinLat, lng: pinLng },
      map: map,
      icon: icon,
      animation: google.maps.Animation.DROP
    })
  }

  const awaitToInitialize = callback => {
    document
      .getElementById('googleapis')
      .addEventListener('load', initialize, false)
  }

  const initialize = () => {
    const layout = createStyles(options)
    const config = configure(options)
    const map = createMap(wrapper, config, layout)
    const market = marker(map, options)
  }
  
  hasGoogleApis()
    ? awaitToInitialize()
    : loadGoogleAPI(options, initialize)

}))