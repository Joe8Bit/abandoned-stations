'use strict';

/**
 * @ngdoc service
 * @name abandonedStationsApp.StationsSrv
 * @description
 * # StationsSrv
 * Service in the abandonedStationsApp.
 */
angular.module('abandonedStationsApp')
  .service('StationsSrv', function StationsSrv() {
    var stations = [{
    	line: 'central',
    	name: 'Some station name'
    }, {
    	line: 'central',
    	name: 'Another station name'
    }, {
    	line: 'waterloo',
    	name: 'A station'
    }];

    function get (id) {
    	return _.filter(stations, function (station) { return station.line === id; });
    }

    return {
    	get: get
    }
  });
