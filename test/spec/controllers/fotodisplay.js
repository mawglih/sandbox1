'use strict';

describe('Controller: FotodisplayCtrl', function () {

  // load the controller's module
  beforeEach(module('fotoAppApp'));

  var FotodisplayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FotodisplayCtrl = $controller('FotodisplayCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
