(function() {
    'use strict';

    /**
     * @ngdoc component
     * @name fotoAppApp.component:contactAdd2
     * @description
     * # contactAdd2
     */
    angular.module('fotoAppApp')
        .component('contactAdd2', {
            templateUrl: '../views/contactadd2.html',
            controller: contactAdd2Ctrl,
            bindings: {
                myItems: '<items',
                myTitle: '@title',
                myLength: '@titlelength',
                myRemove: '&remove'
            }
        });
    contactAdd2Ctrl.$inject = ['$scope', '$element'];

    function contactAdd2Ctrl($scope, $element) {
        var $ctrl = this;
        $ctrl.olegMentioned = function() {
            {
                for (var i = 0; i < $ctrl.myItems.length; i++) {
                    var name = $ctrl.myItems[i].firstName;
                    if (name.toLowerCase().indexOf('oleg') !== -1) {
                        return true;
                    }
                }
                return false;
            };
        }
        $ctrl.remove = function(myIndex) {
            $ctrl.myRemove({ index: myIndex });
        };
        $ctrl.$onInit = function() {
            console.log("onInit started");
        };
        $ctrl.$onChanges = function(changeObj) {
            console.log("Changes are: ", changeObj);
        };
        $ctrl.$postLink = function() {
            $scope.$watch('$ctrl.olegMentioned()', function(newValue, oldValue) {
                console.log("$element is ", $element);
                if (newValue === true) {
                    var warningElem = $element.find('span.error'); //jquery finds and displays
                    warningElem.slideDown(1000);
                } else {
                    var warningElem = $element.find('span.error'); //jquery
                    warningElem.slideUp(1000);
                }
            });
        };
        $ctrl.$onCheck = function() {
            console.log('onCheck :', $onCheck);
        };
    }
})();