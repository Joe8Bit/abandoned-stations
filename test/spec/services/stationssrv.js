'use strict';

describe('Service: StationsSrv', function () {

  // load the service's module
  beforeEach(module('abandonedStationsApp'));

  // instantiate service
  var StationsSrv;
  beforeEach(inject(function (_StationsSrv_) {
    StationsSrv = _StationsSrv_;
  }));

  it('should do something', function () {
    expect(!!StationsSrv).toBe(true);
  });

});
