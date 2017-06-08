(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name fotoAppApp.directive:fotoFinder
     * @description
     * # fotoFinder
     */
    angular.module('fotoAppApp')
        .directive('fotoFinder', Fotofinder);

    function Fotofinder() {
        var ddo = {
            templateUrl: '../views/fotofinder.html',
            restrict: 'E',
            scope: {
                prop: '<',
                title: '@title'
            },
            controller: FotoFinderCtrl,
            controllerAs: 'photo',
            bindtoController: true,
            link: FotofinderLink
        };
        return ddo;
    }

    function FotofinderLink(scope, element, attrs, controller) {
        console.log("Link scope is: ", scope);
        console.log("Controller instance is: ", controller);
        console.log("Element is: ", element);

    }

    function FotoFinderCtrl(PhotoListService) {
        var photo = this;

        photo.path = "";
        photo.alter = "";

        photo.addItem = function() {
            PhotoListService.addItem(photo.path, photo.alter);
        }
        photo.removeItem = function(itemIndex) {
            PhotoListService.removeItem(itemIndex);
        }
        photo.getOneItem = function() {
            PhotoListService.getOneItem;
        }
    }


})();