'use strict';

/* App Module */

var paletteMakerApp = angular.module('paletteMakerApp', ['ngMaterial', 'ngRoute']);


paletteMakerApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    controller: 'paletteMakerController',
    templateUrl: 'app/partials/home.html',
  })
  .when('/palette', {
    controller: 'paletteMakerController',
    templateUrl: 'app/partials/palette.html',
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);
