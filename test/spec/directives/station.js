'use strict';

describe('Directive: station', function () {

  // load the directive's module
  beforeEach(module('abandonedStationsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<station></station>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the station directive');
  }));
});
