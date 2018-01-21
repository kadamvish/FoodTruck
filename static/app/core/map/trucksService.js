(function () {
    'use strict';

    angular.module('MyFoodTruckApp')

            .factory('trucksService', ['$http', function ($http) {
                    return {
                        getTrucks: getTrucks
                    };

            function getTrucks(location) {
                return $http({ method: 'POST',
                                url: 'http://192.168.2.12:8050/getTrucks/',
                                headers :{'Content-Type': 'application/json'},
                                data: { "location":location}
                        })
        
            }
            }]);
})();


