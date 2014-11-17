'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:MapsCtrl
 * @description
 * # MapsCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('MapsCtrl', function ($scope,$routeParams,$filter,Events) {
    $scope.event;
    $scope.doTheBack = function() {
      window.history.back();
    };
    var myfilter = $filter;
    Events.getEvents(function(data) {
        //filter passando data me retornar o objeto no json com o id da rota
        $scope.event = myfilter('filter')(data.results, {
            id: $routeParams.id
        })[0];
        
        $scope.fulladdress = $scope.event.address.street + " " +$scope.event.address.city + " " + $scope.event.address.state; 

    });
    $scope.$emit('openLoading');
});
