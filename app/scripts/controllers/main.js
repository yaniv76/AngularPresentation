'use strict';

/**
 * @ngdoc function
 * @name angularPresentationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPresentationApp
 */
var app = angular.module('angularPresentationApp')
  .controller('MainCtrl', function ($scope) {

    window.scope = $scope;

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


});


