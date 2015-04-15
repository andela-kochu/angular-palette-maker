'use strict';

/* App Module */

var paletteMakerApp = angular.module('paletteMakerApp', ['ngMaterial']);

paletteMakerApp.factory('colorPalette', function(){
    return {
      hue: 170,
      saturation: 62  ,
      lightness: 47,
      btn: "Add Color"
    };
  })
  .factory('colorCollection', function(){
    return [];
  })
  .filter('hexacolor', function () {
  return function (color) {
    var output = "#";
    output += color.r < 16 ? '0' + color.r.toString(16) : color.r.toString(16);
    output += color.g < 16 ? '0' + color.g.toString(16) : color.g.toString(16);
    output += color.b < 16 ? '0' + color.b.toString(16) : color.b.toString(16);
    return output.toUpperCase();
  };
});