'use strict';

/* Controllers */





paletteMakerApp.controller('paletteMakerController', ['$scope', 'colorPalette', function($scope, colorPalette){
  $scope.createColor = function(){
  }
    
  $scope.hue = colorPalette.hue;
  $scope.saturation = colorPalette.saturation;
  $scope.lightness = colorPalette.lightness;
  $scope.colorData = [];
  function hsl2rgb (h, s, l) {

    var r, g, b, m, c, x

    if (!isFinite(h)) h = 0
    if (!isFinite(s)) s = 0
    if (!isFinite(l)) l = 0

    h /= 60
    if (h < 0) h = 6 - (-h % 6)
    h %= 6

    s = Math.max(0, Math.min(1, s / 100))
    l = Math.max(0, Math.min(1, l / 100))

    c = (1 - Math.abs((2 * l) - 1)) * s
    x = c * (1 - Math.abs((h % 2) - 1))

    if (h < 1) {
        r = c
        g = x
        b = 0
    } else if (h < 2) {
        r = x
        g = c
        b = 0
    } else if (h < 3) {
        r = 0
        g = c
        b = x
    } else if (h < 4) {
        r = 0
        g = x
        b = c
    } else if (h < 5) {
        r = x
        g = 0
        b = c
    } else {
        r = c
        g = 0
        b = x
    }
    m = l - c / 2
    r = Math.round((r + m) * 255)
    g = Math.round((g + m) * 255)
    b = Math.round((b + m) * 255)
    return { r: r, g: g, b: b }
}
  $scope.createColor = function() {

    
    /*colorPalette.hue = parseInt($scope.hue, 10);
    console.log(colorPalette.hue)
    colorPalette.saturation = parseInt($scope.saturation, 10);
    colorPalette.lightness=  parseInt($scope.lightness, 10);*/
    $scope.colorData.push(hsl2rgb($scope.hue, $scope.saturation, $scope.lightness));
  };
    
    $scope.submit = function() {
      alert('submit');
    };
    $scope.removeItem = function() {
      $scope.colorData.pop();
    };

}]);
