'use strict';

/**
 * @ngdoc function
 * @name abandonedStationsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the abandonedStationsApp
 */
angular.module('abandonedStationsApp')
  .controller('MainCtrl', function ($scope, LinesSrv, StationsSrv) {
    $scope.$on('tubeLineDataLoaded', function (e, data) {
        $scope.lines = data;
    });
    $scope.showLine = function (line) {
        $scope.setMap();
        $scope.highlightLayer(line.id, true);
    	$scope.currentLine = {
    		line: line,
    		stations: LinesSrv.getStationsForLine(line.id)
    	};
    }
    $scope.purgeCurrentLine = function () {
        $scope.resetLayers();
    	$scope.currentLine = undefined;
    }
    $scope.getLine = function (id) {
    	return LinesSrv.get(id);
    }
    $scope.showStation = function (station) {
        $scope.setMap(station);
    	$scope.station = station.properties;
    }
  });
