(function(){

  var options = {
     'name': 'cMap',
     'wrapperId':'example',
     'zoom': 16,
     'icon': 'images/university.svg',
     'mobile': false,
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
  };

  var example = new cMap(options);

})();
