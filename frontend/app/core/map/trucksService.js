(function () {
    'use strict';

    angular.module('MyFoodTruckApp')

            .factory('trucksService', ['$http', function ($http) {
                    return {
                        getTrucks: getTrucks
                    };

            function getTrucks(location) {
                return $http({ method: 'POST',
                                url: 'http://dry-wave-60344.herokuapp.com/getTrucks/',
                                headers :{'Content-Type': 'application/json'},
                                data: { "location":location}
                        })
        
            }
            }]);
})();


