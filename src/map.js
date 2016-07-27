(function(){

  Map = function(options){

    var _this = this
      , draggable = true
      , wrapperMap = document.getElementById(options.wrapperId)
      , mapLat = parseFloat(wrapperMap.getAttribute('data-map-lat'))
      , mapLng = parseFloat(wrapperMap.getAttribute('data-map-lng'))
      , pinLat = parseFloat(wrapperMap.getAttribute('data-pin-lat'))
      , pinLng = parseFloat(wrapperMap.getAttribute('data-pin-lng'));

    Map.prototype.stylesConfig = function(){
      var styles = [
        {
          'featureType': 'road',
          'elementType': 'geometry',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': options.color.street }
          ]
        },

        {
          'featureType': 'landscape',
          'elementType': 'geometry',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': options.color.landscape }
          ]
        },

        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.fill",
          "stylers": [
            { "invert_lightness": false },
            { "visibility": "on" },
            { "color": options.color.landscape__man_made }
          ]
        },

        {
          'featureType': 'road',
          'elementType': 'labels.text',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': options.color.roadText },
            { 'weight': 0.4 }
          ]
        },

        {
          'featureType': 'poi',
          'elementType': 'labels.text',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': options.color.importantPlaces },
            { 'weight': 0.1 }
          ]
        },

         {
          'featureType': 'poi',
          'elementType': 'labels.icon',
          'stylers': options.color.iconPlaces
        },

        {
          'featureType': 'poi.park',
          'elementType': 'geometry',
          'stylers': [
            { 'visibility': 'off' }
          ]
        },

         {
          'featureType': 'poi',
          'elementType': 'geometry',
          'stylers': [
            { 'visibility': 'on' },
            { 'color': '#19283b' }
          ]
        },

        {
          'featureType': 'transit.station',
          'elementType': 'labels.icon',
          'stylers': [
            { 'visibility': 'off' }
          ]
        },
      ];

      styledMap = new google.maps.StyledMapType(styles, {name: options.name});

    };

    Map.prototype.setOptions = function(){
      var mapOptions = {
        zoom: options.zoom || 15,
        center: new google.maps.LatLng(mapLat, mapLng),
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

      return {
        mapOptions: mapOptions
      }

    }();

    Map.prototype.init = function() {
      var map = new google.maps.Map(wrapperMap, _this.setOptions.mapOptions),

      marker = new google.maps.Marker({
        position: {lat: pinLat, lng: pinLng},
        map: map,
        icon: options.icon,
        animation: google.maps.Animation.DROP
      });

      if(!options.color) {return false}

      _this.stylesConfig();

      //Associate the styled map with the MapTypeId and set it to display.
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');
    }

    this.init()

  }

})();