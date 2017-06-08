(function() {
    'use strict';

    /**
     * @ngdoc component
     * @name fotoAppApp.component:conf2
     * @description
     * # conf2
     */
    angular.module('fotoAppApp')
        .component('conf2', {
            templateUrl: '../views/conf2.html',
            controller: conf2Ctrl,
            bindings: {
                control2: '<',
                myTitle: '@title3',
                myLength: '@title4',
                onRemove: '&'
            }
        });

    conf2Ctrl.$inject = ['$scope', '$element'];

    function conf2Ctrl($scope, $element) {
        var $ctrl = this;



        var $circle = $('<div></div>').clone();
        $($circle).addClass('rating-circle1');
        console.log('$circle', $circle);
        $('#update-max-value').click(function() {
            var valMax = $('#max-value').val();
            console.log("valMax", valMax);
            for (var i = 1; i <= valMax; i++) {
                $('#rating-container1').append($circle.clone());
            }
        });
        $(document).on('mouseenter', 'div.rating-circle1', function() {
            $(this).addClass('rating-hover');
            $(this).prevAll().addClass('rating-hover');

        });
        $(document).on('mouseleave', 'div.rating-circle1', function() {
            $(this).removeClass('rating-hover');
        });
        $(document).on('click', 'div.rating-circle1', function() {
            $(this).prevAll().addClass('rating-chosen');
            $(this).addClass('rating-chosen');
            $(this).nextAll().removeClass('rating-chosen');
            var nextT = $(this).nextAll().length;
            var childrenL = $('#rating-container1').children().length;
            console.log('next', nextT);
            console.log('update', childrenL);
            var selected = childrenL - nextT;
            console.log('selected', selected);
            var URL = 'http://jquery-edx.azurewebsites.net/api/Rating';
            var uplObj = { value: selected, maxValue: childrenL };
            console.log('uplObj', uplObj);
            console.log('url', URL);
            $('#execute').click(function() {
                $.post(URL, uplObj).done(function(data) {
                    console.log('data', data.message);
                    $('#output').text(data.message);
                });
            });
        });

    }
})();
//div class = "rating-circle" > < /div>