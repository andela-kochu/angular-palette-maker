'use strict';

/* Services */

paletteMakerApp.factory('colorPalette', function(){
    return {
      hue: 170,
      saturation: 62  ,
      lightness: 47,
      btn: "Add Color",
      editBtn: "Edit Color"
    };
  })
  .factory('colorCollection', function(){
    return [];
  });