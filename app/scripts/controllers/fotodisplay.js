(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name fotoAppApp.controller:FotodisplayCtrl
     * @description
     * # FotodisplayCtrl
     * Controller of the fotoAppApp
     */
    angular.module('fotoAppApp')
        .controller('FotodisplayCtrl', FotodisplayCtrl)


    function FotodisplayCtrl() {
        var ddo = {
            templateUrl: '../views/fotodisplay.html',
            restrict: 'E',
            scope: {

            },
            controller: FotodisplayCtrl,
            controllerAs: 'display',
            bindtoController: true
        };
        return ddo;
    }

    FotodisplayCtrl.$inject = ['PhotoListService'];

    function FotodisplayCtrl(PhotoListService) {
        var show = this;
        show.items = PhotoListService.getItems();
        show.removeItem = function(itemIndex) {
            PhotoListService.removeItem(itemIndex);
        }
    }


})();