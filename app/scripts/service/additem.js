(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name fotoAppApp.service:AddItem
     * @description
     * # AddItem
     * Service of the fotoAppApp
     */
    angular.module('fotoAppApp')
        .service('AddItem', AddItem);

    function AddItem() {
        var items = [];
        var service = this;

        service.addItem = function(itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
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