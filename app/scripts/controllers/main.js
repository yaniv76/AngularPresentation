'use strict';

/**
 * @ngdoc function
 * @name angularPresentationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularPresentationApp
 */
angular.module('angularPresentationApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
