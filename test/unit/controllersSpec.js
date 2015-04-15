describe('PaletteMaker Contrl', function(){

  var scope, controller;
  beforeEach(module('paletteMakerApp'));

  beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      controller = $controller('paletteMakerController', { 
        $scope: scope
    });
      describe('$scope.grade', function() {

          it('sets the strength to "strong" if the password length is >8 chars', function($controller) {     
            expect(scope.addUpdateBtn).toEqual('Add Color');
           });
          });



  }))
});