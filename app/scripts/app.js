'use strict';

/**
 * @ngdoc overview
 * @name angularPresentationApp
 * @description
 * # angularPresentationApp
 *
 * Main module of the application.
 */
var angularPresentationApp = angular
  .module('angularPresentationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-progress-arc'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/sandbox', {
        templateUrl: 'views/sandbox.html',
        controller: 'SandboxCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('navController', function($scope){
    window.scope = $scope;
    $scope.activeTab = 1;
  })
;
