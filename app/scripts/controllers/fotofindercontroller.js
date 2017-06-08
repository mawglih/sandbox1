(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name fotoAppApp.controller:FotofindercontrollerCtrl
     * @description
     * # FotofindercontrollerCtrl
     * Controller of the fotoAppApp
     */
    angular.module('fotoAppApp')
        .controller('FotofindercontrollerCtrl', FotofindercontrollerCtrl)


    FotofindercontrollerCtrl.$inject = ['PhotoListService'];

    function FotofindercontrollerCtrl(PhotoListService) {
        var photo = this;

        photo.path = "";
        photo.alter = "";

        photo.addItem = function() {
            PhotoListService.addItem(photo.path, photo.alter);
        }
        photo.removeItem = function(itemIndex) {
            PhotoListService.removeItem(itemIndex);
        }
    }


})();