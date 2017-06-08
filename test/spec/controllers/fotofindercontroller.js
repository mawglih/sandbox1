'use strict';

describe('Controller: FotofindercontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('fotoAppApp'));

  var FotofindercontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FotofindercontrollerCtrl = $controller('FotofindercontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
