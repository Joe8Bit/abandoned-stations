'use strict';

describe('Service: LinesSrv', function () {

  // load the service's module
  beforeEach(module('abandonedStationsApp'));

  // instantiate service
  var LinesSrv;
  beforeEach(inject(function (_LinesSrv_) {
    LinesSrv = _LinesSrv_;
  }));

  it('should do something', function () {
    expect(!!LinesSrv).toBe(true);
  });

});
