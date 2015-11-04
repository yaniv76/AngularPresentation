angularPresentationApp.factory('workersService', function() {

  var workersService = {};

  workersService.listOfWorkersInBorderfree = [
    {first: 'Anatoly', last: 'Libman'},
    {first: 'Avi', last: 'TooMany'},
    {first: 'Avishay', last: 'Oshri'},
    {first: 'Dekel', last: 'Moyal'},
    {first: 'Denis', last: 'Denis'},
    {first: 'Dmitry', last: 'Kar'},
    {first: 'Eyal', last: 'AlsoTooMany'},
    {first: 'Haim', last: 'Sulam'},
    {first: 'Genady', last: 'Kof'}
  ];

  workersService.addWorker = function (newWorker) {
    var worker = newWorker.split(',');
    workersService.listOfWorkersInBorderfree.push({first:worker[0], last:worker[1]});
  };

  workersService.getWorkers = function () {
    return workersService.listOfWorkersInBorderfree;
  };

  return workersService;

});
