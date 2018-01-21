(function () {
    'use strict';

    angular.module('MyFoodTruckApp')

            .controller('MapController', MapController);

    MapController.$inject = ['$scope','NgMap','trucksService'];

    function MapController($scope,NgMap,trucksService) {
        var vm = this

        NgMap.getMap().then(function(map) {
        vm.map = map;
        vm.map.setCenter({"lat":37.7678524427181, "lng":-122.416104892532});
        });

        vm.nearbyTrucks=[];

        vm.centerLocation="(37.7678524427181, -122.416104892532)";

         vm.refreshTruckDetails=function(location){
         trucksService.getTrucks(location). 
                            then(function successCallback(response) {
                                    console.log("success", response);
                                    vm.nearbyTrucks=response.data;
                                    console.log(response.data);
                                    }, 

                                function errorCallback(error) {
                                    console.log("Server is unreachable")
                                    });
        console.log(vm.nearbyTrucks);
        }

        vm.refreshTruckDetails(vm.centerLocation);      
        


    vm.placeChanged = function() {
        vm.place = this.getPlace();
        console.log(vm.place);
        console.log('location', vm.place.geometry.location);
        vm.centerLocation="("+vm.place.geometry.location.lat()+","+vm.place.geometry.location.lng()+")";
        console.log(vm.centerLocation);
        vm.map.setCenter(vm.place.geometry.location);
        vm.refreshTruckDetails(vm.centerLocation);
    }

    vm.showDetail = function(e, truck) {
        vm.selectedTruck = truck;
        vm.map.showInfoWindow('detail-iw', vm.selectedTruck.Address);
  };
   
    vm.hideDetail = function() {
    vm.map.hideInfoWindow('detail-iw');
  };


    }
})();
