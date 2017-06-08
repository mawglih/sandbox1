(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name fotoAppApp.service:GetSwapi
     * @description
     * # GetSwapi
     * Service of the fotoAppApp
     */
    angular.module('fotoAppApp')
        .service('GetSwapi', GetSwapi)
        .constant('API', 'https://swapi.co/api/starships/');

    GetSwapi.$inject = ['$http', 'API']

    function GetSwapi($http, API) {
        var service = this;
        service.getShips = function(id) {
            var response = $http({
                url: (API + id)
            });
            return response;
        }
    }

})();