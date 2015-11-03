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
      {first:'Anatoly', last: 'Libman'},
      {first:'Avi', last: 'TooMany'},
      {first:'Avishay', last: 'Oshri'},
      {first:'Dekel', last: 'Moyal'},
      {first:'Denis', last: 'Denis'},
      {first:'Dmitry', last: 'Kar'},
      {first:'Eyal', last: 'AlsoTooMany'},
      {first:'Haim', last: 'Sulam'},
      {first:'Genady', last: 'Kof'}
    ];



  });
