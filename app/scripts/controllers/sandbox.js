'use strict';

/**
 * @ngdoc function
 * @name angularPresentationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPresentationApp
 */
angularPresentationApp.controller('SandboxCtrl', function ($scope, workersService) {

  window.scope = $scope;

  $scope.newWorker = "";

  $scope.workersService = workersService;

  $scope.size = 200;
  $scope.strokeWidth = 10;
  $scope.stroke = 'red';
  $scope.counterClockwise = '';

  $scope.clearNewWorker = function() {
    $scope.newWorker = "";
  }



});
