(function() {
    'use strict';
    /**
     * @ngdoc overview
     * @name fotoAppApp
     * @description
     * # fotoAppApp
     *
     * Main module of the application.
     */
    angular
        .module('fotoAppApp', ['ui.router'])
        .config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/main.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html'
            })
            .state('conference', {
                url: '/conference',
                templateUrl: 'views/conference.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html'
            })
            .state('swapi', {
                url: '/swapi',
                templateUrl: 'views/swapi.html'
            })
            .state('contact2', {
                url: '/contact2',
                templateUrl: 'views/contact2.html'
            });
    }

})();