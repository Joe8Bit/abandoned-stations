'use strict';

/**
 * @ngdoc directive
 * @name abandonedStationsApp.directive:station
 * @description
 * # station
 */
angular.module('abandonedStationsApp')
  .directive('station', function () {
    return {
      templateUrl: 'views/partials/station.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {}
    };
  });
