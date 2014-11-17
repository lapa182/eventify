'use strict';

describe('Service: events', function () {

  // load the service's module
  beforeEach(module('eventifyApp'));

  // instantiate service
  var events;
  beforeEach(inject(function ($injecto) {
    $httpBackend = $injector.get('$httpBackend');
    authRequestHandler = $httpBackend.when("GET", '/events')
                          .respond({results});
    $rootScope = $injector.get('$rootScope');
    var $controller = $injector.get('$controller');
    createController = function() {
      return $controller('EventsCtrl', {'$scope': $rootScope});
    }
  }));

   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should do something', function () {
    $httpBackend.expectGET('/events');
     var controller = createController();
     $httpBackend.flush();
  });

});
