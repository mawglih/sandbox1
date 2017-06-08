(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name fotoAppApp.service:PhotoListService
     * @description
     * # PhotoListService
     * Service of the fotoAppApp
     */
    angular.module('fotoAppApp')
        .service('PhotoListService', PhotoListService);

    function PhotoListService() {
        var items = [];
        var service = this;

        service.addItem = function(itemPath, itemAlt) {
            var item = {
                path: itemPath,
                alt: itemAlt
            };
            items.push(item);
            console.log(item);
        }
        service.removeItem = function(itemIndex) {
            items.splice(itemIndex, 1);
        }
        service.getItems = function() {
            return items;
        }
        service.getOneItem = function() {
            return item;
        }

    }

})();