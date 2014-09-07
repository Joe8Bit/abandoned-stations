'use strict';

/**
 * @ngdoc directive
 * @name abandonedStationsApp.directive:currentline
 * @description
 * # currentline
 */
angular.module('abandonedStationsApp')
  .directive('currentline', function () {
    return {
      templateUrl: 'views/partials/currentline.html',
      restrict: 'E',
      scope: false,
      link: function postLink(scope, element, attrs) {}
    };
  });
