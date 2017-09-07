//Home Controller

"use strict";
trafficApp.controller("homeController", function ($scope, NgMap, $http, $rootScope) {
    $scope.pageClass = "homeClass";
    $rootScope.loginLbl = true;
    $rootScope.registerLbl = true;
    $rootScope.userLbl = false;
    $rootScope.logoutLink = false;
    $rootScope.currentBoundsHide = true;
    $rootScope.mainPage = true;

    var vm = this;
    NgMap.getMap().then(function (map) {
        vm.map = map;
    });

    vm.types = "['establishment']";
    vm.placeChanged = function () {
        vm.place = this.getPlace();
        vm.map.setCenter(vm.place.geometry.location);
        document.getElementById("incidentBox").checked = false;
    };

    $scope.showIncidents = function ($event) {
        NgMap.getMap().then(function (map) {
            $scope.currentBounds = map.getBounds();
            var checkbox = $event.target;
            if (checkbox.checked) {
                var url = "https://www.mapquestapi.com/traffic/v2/incidents?&outFormat=json&boundingBox=" +
                    $scope.currentBounds.getNorthEast().lat().toString() + "," +
                    $scope.currentBounds.getNorthEast().lng().toString() + "," +
                    $scope.currentBounds.getSouthWest().lat().toString() + "," +
                    $scope.currentBounds.getSouthWest().lng().toString() + "&key=JzZqSEvIJmEPjMhVGAPFwZILZ9kSarPD";
                $http({
                    method: "GET",
                    url: url
                }).then(function (response) {
                    $scope.incidents = response.data.incidents;
                });
            } else {
                $scope.incidents = [];
            }
        });
    };

    $scope.displayMarkerInfo = function (event, marker, id) {
        $scope.selectedMarker = $scope.incidents.filter(function (c) {
            return c.id === id;
        })[0];
        $scope.infoWindowDescription = $scope.selectedMarker.fullDesc;
        NgMap.getMap().then(function (map) {
            map.showInfoWindow("bar", id);
        });
    };

});