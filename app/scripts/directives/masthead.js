'use strict';

/**
 * @ngdoc directive
 * @name abandonedStationsApp.directive:masthead
 * @description
 * # masthead
 */
angular.module('abandonedStationsApp')
  .directive('masthead', function () {
    return {
      templateUrl: 'views/partials/masthead.html',
      restrict: 'E',
      link: function postLink (scope, element, attrs) {}
    };
  });
