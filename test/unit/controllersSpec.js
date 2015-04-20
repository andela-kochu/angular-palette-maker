describe('PaletteMaker Contrl', function(){

  var scope, controller;
  beforeEach(module('paletteMakerApp'));

  beforeEach(inject(function($controller, $rootScope){
      scope = $rootScope.$new();
      controller = $controller('paletteMakerController', { 
        $scope: scope
      });
    }));
    describe('Controller', function() {
      it('status if it is defined', function($controller) {  
        expect(controller).toBeDefined();
      });
    });
    describe('Application default values', function() {
      it('sets the default parameters of the buttons and controls', function($controller) {     
        expect(scope.addUpdateBtn).toEqual('Add Color');
        expect(scope.editCancelBtn).toEqual('Edit Color');
        expect(scope.hue).toEqual(170);
        expect(scope.saturation).toEqual(62);
        expect(scope.lightness).toEqual(47);
       });
      it('sets the default parameters of the buttons and controls', function($controller) {     
        expect(scope.colorData).toEqual([])
      });
    });
    describe('Functions in the controller', function() {
      it('set the return values of functions', function($controller) { 
        scope.removeAll()
        expect(scope.colorData).toEqual([]);
      });
    });
});
