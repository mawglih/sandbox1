(function() {
    'use strict';

    /**
     * @ngdoc component
     * @name fotoAppApp.component:myQuestionaire
     * @description
     * # myQuestionaire
     */
    angular.module('fotoAppApp')
        .component('myQuestionaire', {
            templateUrl: '../views/quest.html',
            controller: QuestionaireComponentController,
            bindings: {
                items: '<',
                myTitle: '@title1',
                myLength: '@title2',
                onRemove: '&'
            }
        });

    QuestionaireComponentController.$inject = ['$scope', '$element'];

    function QuestionaireComponentController($scope, $element) {
        var $ctrl = this;



        $ctrl.OlegInList = function() {
            for (var i = 0; i < $ctrl.items.length; i++) {
                var name = $ctrl.items[i].name;
                if (name.toLowerCase().indexOf("oleg") !== -1) {
                    return true;
                }
            }
            return false;
        };

        $ctrl.remove = function(myIndex) {
            $ctrl.onRemove({ index: myIndex });
        };
        $ctrl.$onInit = function() {
            console.log("We are in $onInit()");
        }
        $ctrl.$onChanges = function(changeObj) {
            console.log("Changes: ", changeObj);
        }
        $ctrl.$postLink = function() {
            $scope.$watch('$ctrl.OlegInList()', function(newValue, oldValue) {
                console.log($element);
                if (newValue === true) {
                    var warningElem = $element.find('div.error');
                    warningElem.slideDown(900);
                } else {
                    var warningElem = $element.find('div.error');
                    warningElem.slideUp(900);
                }
            });
        };
    }
})();