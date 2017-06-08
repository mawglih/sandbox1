(function() {
    'use strict';

    /**
     * @ngdoc directive
     * @name fotoAppApp.directive:contactAdd
     * @description
     * # contactAdd
     */
    angular.module('fotoAppApp')
        .directive('contactAdd', ContactAdd);

    function ContactAdd() {
        var ddo = {
            templateUrl: '../views/contactAdd.html',
            restrict: 'E',
            scope: {
                myTitle: '@title',
                myTitleLength: '@titlelength',
                myItems: '<items',
                myRemove: '&remove'
            },
            controller: contactAddCtrl,
            controllerAs: 'contact',
            bindToController: true,
            link: ContactAddLink,
            transclude: true
        };
        return ddo;
    }


    function contactAddCtrl() {
        var show = this;

        show.olegMentioned = function() {
            {
                for (var i = 0; i < show.myItems.length; i++) {
                    var name = show.myItems[i].firstName;
                    if (name.toLowerCase().indexOf('oleg') !== -1) {
                        return true;
                    }
                }
                return false;
            };
        }
    }

    function ContactAddLink(scope, element) {
        scope.$watch('contact.olegMentioned()', function(newValue, oldValue) {
            console.log('Old value: ', oldValue);
            console.log('New value: ', newValue);
            if (newValue === true) {
                displayOlegWarning();
            } else {
                removeOlegWarning();
            }
        });

        function displayOlegWarning() {
            var warningElem = element.find('div.error');
            warningElem.slideDown(900);
        }

        function removeOlegWarning() {
            var warningElem = element.find('div.error');
            warningElem.slideUp(900);
        }
    }



})();