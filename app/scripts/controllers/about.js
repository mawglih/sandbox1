(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name fotoAppApp.controller:AboutCtrl
     * @description
     * # AboutCtrl
     * Controller of the fotoAppApp
     */
    angular.module('fotoAppApp')
        .controller('AboutCtrl', AboutCtrl);

    AboutCtrl.$inject = ['AddItem'];

    function AboutCtrl(AddItem) {
        var about = this;
        var origTitle = "List of Names is now"
        about.items = AddItem.getItems();
        about.itemName = "";
        about.itemQuantity = "";

        about.addItem = function() {
            AddItem.addItem(about.itemName, about.itemQuantity);
            console.log("Name", about.itemName);
            this.title = origTitle + " (" + about.items.length + " items)";
            this.titleLength = about.items.length;
            console.log("Title", about.title);
            console.log("length is: ", about.titleLength);
        }

        about.removeItem = function(itemIndex) {
            this.lastRemoved = "Last item removed was " + this.items[itemIndex].name;
            AddItem.removeItem(itemIndex);
            this.title = origTitle + " (" + about.items.length + " items )";
            this.titleLength = about.items.length;
            console.log("length is: ", about.titleLength);
        };
    }
})();