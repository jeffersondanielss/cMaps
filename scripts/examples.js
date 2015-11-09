(function(){

  var exampleOne = new Map({
     'name': 'example one'
    ,'wrapperId':'exampleOne'
    ,'zoom': 12
    ,'mobile': false
  });

  var exampleTwo = new Map({
     'name': 'exampleTwo'
    ,'wrapperId':'exampleTwo'
    ,'zoom': 16
    // ,'icon': 'images/pin.png'
    ,'mobile': false
    ,'color': {
       'street': '#14191f'
      ,'roadText': '#bfcbda'
      ,'importantPlaces': '#abb7c3'
      ,'landscape': '#203246'
      ,'landscape__man_made': '#203246'
      ,'iconPlaces': [
        { 'visibility': 'on' },
        { 'invert_lightness': true },
        { 'saturation': 41 },
        { 'gamma': 1.71 },
        { 'hue': '#005eff' }
      ]
    }
  });

  var exampleTree = new Map({
     'name': 'exampleTree'
    ,'wrapperId':'exampleTree'
    ,'zoom': 10
    // ,'icon': 'images/pin.png'
    ,'mobile': false
    ,'color': {
       'street': '#14191f'
      ,'roadText': '#bfcbda'
      ,'importantPlaces': '#abb7c3'
      ,'landscape': '#203246'
      ,'landscape__man_made': '#203246'
      ,'iconPlaces': [
        { 'visibility': 'on' },
        { 'invert_lightness': true },
        { 'saturation': 41 },
        { 'gamma': 1.71 },
        { 'hue': '#005eff' }
      ]
    }
  });

})();