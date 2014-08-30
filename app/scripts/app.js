'use strict';

/**
 * @ngdoc overview
 * @name abandonedStationsApp
 * @description
 * # abandonedStationsApp
 *
 * Main module of the application.
 */
angular
  .module('abandonedStationsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true).hashPrefix('!');
  });
