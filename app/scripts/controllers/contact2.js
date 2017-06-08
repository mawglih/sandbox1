(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name fotoAppApp.controller:Contact2Ctrl
     * @description
     * # Contact2Ctrl
     * Controller of the fotoAppApp
     */
    angular.module('fotoAppApp')
        .controller('Contact2Ctrl', Contact2Ctrl);

    Contact2Ctrl.$inject = ['AddPeopleToList2'];

    function Contact2Ctrl(AddPeopleToList2) {
        var contact = this;
        var origTitle = "List of Names is now contains"
        contact.items = AddPeopleToList2.getItems();
        contact.warning = "Oleg name is detected!";
        contact.itemFirstName = "";
        contact.itemLastName = "";
        contact.itemPhone = "";
        contact.itemEmail = "";
        contact.itemCountry = "";

        contact.addItem = function() {
            AddPeopleToList2.addItem(contact.itemFirstName, contact.itemLastName, contact.itemPhone,
                contact.itemEmail, contact.itemCountry);
            console.log("Name", contact.itemFirstName);
            this.title = origTitle + " " + contact.items.length + " names";
            this.titlelength = contact.items.length;
            console.log("Title", contact.title);
            console.log("length is: ", contact.titlelength);
        }

        contact.removeItem = function(itemIndex) {
            this.lastRemoved = "Last person removed was " + this.items[itemIndex].firstName +
                " " + this.items[itemIndex].lastName;
            AddPeopleToList2.removeItem(itemIndex);
            this.title = origTitle + " " + contact.items.length + " items";
            this.titlelength = contact.items.length;
            console.log("length is: ", contact.titlelength);
        };

    }
})();