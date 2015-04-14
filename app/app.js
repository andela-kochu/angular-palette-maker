'use strict';

/* App Module */

var paletteMakerApp = angular.module('paletteMakerApp', ['ngMaterial']);

paletteMakerApp.factory('colorPalette', function(){
    return {
      hue: 145,
      saturation: 10,
      lightness: 202
    };
  })
  .factory('colorCollection', function(){
    return [];
  })

/**
 * filters
 * ----------------------------------------------
 */

  /**
   * hexacolor
   *
   * transform an object {r:255, v:255, b:255} to hexa #FFFFFF
   * @return string 
   */
  .filter('hexacolor', function () {
  return function (color) {
    var output = "#";
    output += color.r < 16 ? '0' + color.r.toString(16) : color.r.toString(16);
    output += color.g < 16 ? '0' + color.g.toString(16) : color.g.toString(16);
    output += color.b < 16 ? '0' + color.b.toString(16) : color.b.toString(16);
    return output.toUpperCase();
  };
});