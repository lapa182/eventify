'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the eventifyApp
 */
 angular.module('eventifyApp')
 .controller('EventCtrl', function ($scope,$routeParams,$filter,Events) {
 	var myfilter = $filter;
 	$scope.doTheBack = function() {
	  window.history.back();
	};
 	Events.getEvents(function(data) {
        //filter passando data me retornar o objeto no json com o id da rota
        $scope.event = myfilter('filter')(data.results, {
        	id: $routeParams.id
        })[0];
      });
 });
