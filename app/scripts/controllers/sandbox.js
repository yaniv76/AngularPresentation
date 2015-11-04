'use strict';

/**
 * @ngdoc function
 * @name angularPresentationApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPresentationApp
 */
angularPresentationApp.controller('SandboxCtrl', function ($scope) {

  window.scope = $scope;

  $scope.listOfWorkersInBorderfree = [
    {first: 'Anatoly', last: 'Libman'},
    {first: 'Avi', last: 'Many'},
    {first: 'Avishay', last: 'Oshri'},
    {first: 'Dekel', last: 'Moyal'},
    {first: 'Denis', last: 'Denis'},
    {first: 'Dmitry', last: 'Kar'},
    {first: 'Eyal', last: 'AlsoMany'},
    {first: 'Haim', last: 'Sulam'},
    {first: 'Genady', last: 'Kof'}
  ];

  $scope.newWorker = "";

  $scope.addWorker = function (newWorker) {
    var worker = newWorker.split(',');
    $scope.listOfWorkersInBorderfree.push({first:worker[0], last:worker[1]});
    $scope.newWorker = "";

  };

  $scope.size = 200;
  $scope.strokeWidth = 10;
  $scope.stroke = 'red';
  $scope.counterClockwise = '';



});
