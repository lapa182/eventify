'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('EventsCtrl', function ($scope,Events) {
  $scope.events;
  
  Events.getEvents(function(data) {
      $scope.events = data.results;
  });
});
