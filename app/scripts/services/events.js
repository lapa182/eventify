'use strict';

/**
 * @ngdoc service
 * @name eventifyApp.events
 * @description
 * # Events
 * Factory in the eventifyApp.
 */
 angular.module('eventifyApp')
 .factory('Events', function ($http) {
  var events;
  var obj = {};

  obj = {
    getEvents: function(callback) {
      if (events) {
        callback(events);
        return false;
      } else {

        $http.get('http://eventify.marcussaad.com/api/event/?format=json')
          .success(function(data) {
            obj.saveEvents(data);
            callback(data);
          });
      }
    },
    saveEvents: function(data) {
      events = data;
    }
  };

  return obj;
});
