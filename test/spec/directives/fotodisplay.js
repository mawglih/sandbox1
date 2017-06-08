'use strict';

describe('Directive: fotoDisplay', function () {

  // load the directive's module
  beforeEach(module('fotoAppApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<foto-display></foto-display>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fotoDisplay directive');
  }));
});
