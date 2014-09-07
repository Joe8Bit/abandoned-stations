'use strict';

/**
 * @ngdoc service
 * @name abandonedStationsApp.LinesSrv
 * @description
 * # LinesSrv
 * Service in the abandonedStationsApp.
 */
angular.module('abandonedStationsApp')
  .service('LinesSrv', function LinesSrv ($http, $rootScope) {
    var raw, clean;

    function init () {
      return $http({method: 'GET', url: 'data/tube.json'});
    }

    function get (id) {
      return _.filter(clean, function (line) { return line.properties.id === id; });
    }

    function getStationsForLine (line) {
      return _.where(_.find(raw, function (layer) { return layer.properties.id === line }).features, function (feature) {  return feature.properties.type; });
    }

    init()
      .success(function (data) {
        raw = data;
        clean = _.uniq(raw, function (line) {
          return line.properties.id;
        });
        $rootScope.$broadcast('tubeLineDataLoaded', clean, raw);
      })
      .error(function () {
        console.error('There was an error loading "tube-lines.json"');
      });

    return {
    	raw: raw,
      clean: clean,
      get: get,
      getStationsForLine: getStationsForLine
    };
  });