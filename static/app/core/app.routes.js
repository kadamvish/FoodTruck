(function () {
    'use strict';

    angular.module('MyFoodTruckApp')

            .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
    
        $urlRouterProvider.otherwise('/home');
        $stateProvider

                .state('home', {
                    url: '/home',
                    views: {
                        'header': {
                            templateUrl: 'core/navigation/headerView.html',
                            controller: 'HeaderController'
                        },
                        'content': {
                            templateUrl: 'core/map/mapView.html',
                            controller: 'MapController',
                            controllerAs: 'MapCtrl'
                        },
                        'footer': {
                            templateUrl: 'core/navigation/footerView.html',
                            controller: 'FooterController'
                        }
                    }
                })
                
                
    }
})();
