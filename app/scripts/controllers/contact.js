(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name fotoAppApp.controller:ContactCtrl
     * @description
     * # ContactCtrl
     * Controller of the fotoAppApp
     */
    angular.module('fotoAppApp')
        .controller('ContactCtrl', ContactCtrl);

    ContactCtrl.$inject = ['AddPeopleToList'];

    function ContactCtrl(AddPeopleToList) {
        var contact = this;
        var origTitle = "List of Names is now contains"
        contact.items = AddPeopleToList.getItems();
        contact.warning = "Oleg name is detected!";
        contact.itemFirstName = "";
        contact.itemLastName = "";
        contact.itemPhone = "";
        contact.itemEmail = "";
        contact.itemCountry = "";

        contact.addItem = function() {
            AddPeopleToList.addItem(contact.itemFirstName, contact.itemLastName, contact.itemPhone,
                contact.itemEmail, contact.itemCountry);
            console.log("Name", contact.itemFirstName);
            this.title = origTitle + " " + contact.items.length + " names";
            this.titlelength = contact.items.length;
            console.log("Title", contact.title);
            console.log("length is: ", contact.titlelength);
        }

        contact.removeItem = function(itemIndex) {
            this.lastRemoved = "Last item removed was " + this.items[itemIndex].firstName;
            AddPeopleToList.removeItem(itemIndex);
            this.title = origTitle + " " + contact.items.length + " items";
            this.titlelength = contact.items.length;
            console.log("length is: ", contact.titlelength);
        };

    }
})();