'use strict';

/* Controllers */





paletteMakerApp.controller('paletteMakerController', ['$scope', 'colorPalette', function($scope, colorPalette){
  $scope.createColor = function(){
  }
    
  $scope.hue = colorPalette.hue;
  $scope.saturation = colorPalette.saturation;
  $scope.lightness = colorPalette.lightness;
  $scope.colorData = [];
  $scope.createColor = function() {
    colorPalette.hue = parseInt($scope.hue, 10);
    console.log(colorPalette.hue)
    colorPalette.saturation = parseInt($scope.saturation, 10);
    colorPalette.lightness=  parseInt($scope.lightness, 10);
    $scope.colorData.push({hue:  colorPalette.hue, saturation:  colorPalette.saturation,  lightness:  colorPalette.lightness});
  };
  $scope.avatarData = [{
        id: "avatars:svg-1",
        title: 'avatar 1',
        value: 5
      },{
        id: "avatars:svg-2",
        title: 'avatar 2',
        value: 100
      },{
        id: "avatars:svg-3",
        title: 'avatar 3',
        value: 250
    }];
    
    $scope.submit = function() {
      alert('submit');
    };
    $scope.addItem = function() {
      var r = Math.ceil(Math.random() * 255);
      $scope.avatarData.push({ title: r, value: r });
    };
    $scope.removeItem = function() {
      $scope.colorData.pop();
    };

}]);
