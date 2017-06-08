(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name fotoAppApp.service:AddPeopleToList2
     * @description
     * # AddPeopleToList2
     * Service of the fotoAppApp
     */
    angular.module('fotoAppApp')
        .service('AddPeopleToList2', AddPeopleToList2);

    function AddPeopleToList2() {
        var items = [];
        var service = this;

        service.addItem = function(itemFirstName, itemLastName, itemPhone, itemEmail, itemCountry) {
            var item = {
                firstName: itemFirstName,
                lastName: itemLastName,
                phone: itemPhone,
                email: itemEmail,
                country: itemCountry

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