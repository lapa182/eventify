'use strict';

/**
 * @ngdoc function
 * @name eventifyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the eventifyApp
 */
angular.module('eventifyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
