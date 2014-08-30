'use strict';

/**
 * @ngdoc directive
 * @name abandonedStationsApp.directive:map
 * @description
 * # map
 */
angular.module('abandonedStationsApp')
  .directive('map', function (LinesSrv) {
    return {
      templateUrl: '/views/partials/map.html',
      restrict: 'E',
      scope: false,
      link: function postLink (scope, element, attrs) {
        L.mapbox.accessToken = 'pk.eyJ1Ijoiam9lOGJpdCIsImEiOiJBNldCeHl3In0.jEnRh582I1IJK5AYtHYo4w';
        var map = L.mapbox
                .map('map', 'joe8bit.jbod9jje', { 
                    zoomControl: false,
                    tileLayer: {
                        detectRetina: true
                    }
                })
                .setView([51.55, -0.174], 11);

        var zoom = new L.Control.Zoom({ position: 'bottomright' }).addTo(map);

        var isSet;

        scope.$on('tubeLineDataLoaded', function (e, clean, raw) {
            var lineLayers = {},
                zIndexCounter = 0;

            function setTubeLayers () {
                raw.forEach(function (line) {
                    lineLayers[line.properties.id] = L.geoJson(line, {
                        pointToLayer: L.mapbox.marker.style,
                        style: function (feature) {
                            feature.properties.opacity = 0.5;
                            return feature.properties;
                        },
                        onEachFeature: function (feature, layer) {
                            if (layer.setIcon) {
                                layer.setIcon(L.icon({
                                    iconUrl: "/images/icon.svg",
                                    iconSize: [30, 30],
                                    iconAnchor: [16, 30],
                                    popupAnchor: [0, -55],
                                    className: "stop-icon"
                                }));
                            }
                            layer.on('click', function (e) {
                                // Clicked on a line
                                if (e.target.feature.properties.color) {
                                    scope.showLine(e.target.feature.properties);
                                    scope.$digest();
                                }
                                // Clicked on a station
                                if (e.target.feature.properties.type) {
                                    console.log(e)
                                    scope.showLine(LinesSrv.get(e.target.feature.properties.line)[0].properties);
                                    scope.showStation(e.target.feature);
                                    scope.$digest();
                                }
                            });
                            layer.on('mouseover', function (e) {
                                if (!isSet && e.target.feature.properties.id) {
                                    scope.highlightLayer(e.target.feature.properties.id);
                                }
                            });
                            layer.on('mouseout', function (e) {
                                if (!isSet) {
                                    scope.resetLayers();
                                }
                            });
                        }
                    });
                    addLayer(lineLayers[line.properties.id], zIndexCounter++);
                });
            }

            function addLayer (layer, zIndex) {
                layer.setZIndex(zIndex).addTo(map);
            }

            function removeLayer (layer) {
                map.removeLayer(layer);
            }

            scope.highlightLayer = function (id, perm) {
                var layer = lineLayers[id];
                isSet = perm;
                _.each(lineLayers, function (layer) {
                    layer.setStyle({
                        opacity: 0.2
                    });
                });
                layer.setStyle({
                    opacity: 1
                });
            }

            scope.resetLayers = function (id) {
                isSet = undefined;
                _.each(lineLayers, function (layer) {
                    layer.setStyle({
                        opacity: 0.5
                    });
                });
            }

            scope.setMap = function (feature) {
                if (feature) {
                    var coords = angular.copy(feature.geometry.coordinates).reverse();
                    map.setView(coords, 16);
                } else {
                    map.setView([51.55, -0.174], 11);
                }
            }

            setTubeLayers();
        });
      }
    };
  });
