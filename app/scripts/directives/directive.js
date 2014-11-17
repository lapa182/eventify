'use strict';

angular.module('eventifyApp').directive('leaflet', function () {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */

    directive.templateUrl = "views/leaflet.html";
    directive.scope = {
        id: '=id'
    }

    directive.link = function (scope,el,attr) {
        var dir = MQ.routing.directions();

        var lat;
        var lng;
        navigator.geolocation.getCurrentPosition(showPosition);

        function showPosition(position) {
            lat = position.coords.latitude;
            lng = position.coords.longitude;

            var map = L.map('map', {
                layers: MQ.mapLayer(),
                zoom: 17,
                center: [position.coords.latitude, position.coords.longitude],
            });
            map.on("layeradd",function(){
                 scope.$emit('closeLoading');
            });
            dir = MQ.routing.directions();
            
            dir.route({
                locations: [{
                    latLng: {
                        lat: lat,
                        lng: lng
                    }
    },attr.fulladdress]
            });

            var CustomRouteLayer = MQ.Routing.RouteLayer.extend({
                createStopMarker: function (location, stopNumber) {

                    var custom_icon,
                        marker;

                    if (stopNumber == 1) {
                        marker = L.marker(location.latLng).addTo(map).bindPopup('Você está aqui').openPopup();
                    } else {
                        marker = L.marker(location.latLng).addTo(map).bindPopup(attr.event);
                    }

                    return marker;
                }
            });
            map.addLayer(new CustomRouteLayer({
                directions: dir,
                fitBounds: true,
                draggable: false,
            }));
        }

    }

    return directive;
});



angular.module('eventifyApp').directive('loading', function () {
    var directive = {};

    directive.restrict = 'E'; /* restrict this directive to elements */

    directive.templateUrl = "views/loading.html";

    directive.link = function (scope,obj) {
       
        scope.$on('openLoading', function (event, data) {
          obj.css("display","block");
        });
        scope.$on('closeLoading', function (event, data) {
          obj.css("display","none");
        });
    }

    return directive;
});