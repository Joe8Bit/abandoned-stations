'use strict';

describe('Directive: currentline', function () {

  // load the directive's module
  beforeEach(module('abandonedStationsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<currentline></currentline>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the currentline directive');
  }));
});
