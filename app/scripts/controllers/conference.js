(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name fotoAppApp.controller:ConferenceCtrl
     * @description
     * # ConferenceCtrl
     * Controller of the fotoAppApp
     */
    angular.module('fotoAppApp')
        .controller('ConferenceCtrl', ConferenceCtrl);

    function ConferenceCtrl() {
        var conf = this;
        var origTitle = 'Contoso Web Developer Conference';
        conf.title = origTitle + ' (task 1 in JQuery lectures)';
        conf.title3 = origTitle + ' (task 2 in JQuery lectures)';

        console.log(conf.title);
        console.log(conf.title3);

        /*conf.control1 = function() {
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
        };*/
    }

})();