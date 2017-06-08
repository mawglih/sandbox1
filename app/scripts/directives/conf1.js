(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name fotoAppApp.directive:conf1
     * @description
     * # conf1
     */
    angular.module('fotoAppApp')
        .directive('conf1', conf1);

    function conf1() {
        var ddo = {
            templateUrl: '../views/conf1.html',
            restrict: 'E',
            scope: {
                myTitle: '@title',
                myControl: '<control1'
            },
            controller: conf1Ctrl,
            controllerAs: 'ctrl',
            bindtoController: true
        };
        return ddo;
    }

    function conf1Ctrl() {
        $(".rating-circle").hover(function() {
            $(this).addClass('rating-hover');
            $(this).prevAll().addClass('rating-hover');

        });
        $(".rating-circle").mouseleave(function() {
            $(this).removeClass('rating-hover');
        });
        $('.rating-circle').click(function() {
            $(this).prevAll().addClass('rating-chosen');
            $(this).addClass('rating-chosen');
            $(this).nextAll().removeClass('rating-chosen');
        });
    }

})();