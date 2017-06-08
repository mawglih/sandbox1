(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name fotoAppApp.directive:fotoDisplay
     * @description
     * # fotoDisplay
     */
    angular.module('fotoAppApp')
        .directive('fotoDisplay', fotoDisplay);

    function fotoDisplay() {
        var ddo = {
            templateUrl: '../views/fotodisplay.html',
            restrict: 'E',
            scope: {
                title: '@title'
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