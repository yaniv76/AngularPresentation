'use strict';

/**
 * @ngdoc function
 * @name angularPresentationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPresentationApp
 */
angular.module('angularPresentationApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
