'use strict';

/**
 * @ngdoc directive
 * @name abandonedStationsApp.directive:lines
 * @description
 * # lines
 */
angular.module('abandonedStationsApp')
  .directive('lines', function () {
    return {
      templateUrl: 'views/partials/lines.html',
      restrict: 'E',
      scope: false,
      link: function postLink(scope, element, attrs) {}
    };
  });
