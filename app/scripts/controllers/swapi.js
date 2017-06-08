(function() {
    'use strict';

    /**
     * @ngdoc function
     * @name fotoAppApp.controller:SwApi
     * @description
     * # SwApi
     * Controller of the fotoAppApp
     */
    angular.module('fotoAppApp')
        .controller('SwApi', SwApi);


    SwApi.$inject = ['$scope', 'GetSwapi', '$q'];

    function SwApi($scope, GetSwapi, $q) {
        var swapi = this;
        $scope.ships = [
            { name1: 'CR-90 Corvette', id: '2' },
            { name1: 'V-wing', id: '75' },
            { name1: 'Bellbulab-22 Starfighter', id: '74' },
            { name1: 'Jedi Interceptor', id: '65' },
            { name1: 'Star Destroyer', id: '3' },
            { name1: 'Trade Federation Cruiser', id: '59' },
            { name1: 'Solar Sailer', id: '58' },
            { name1: 'Republic Atack Cruiser', id: '63' },
            { name1: 'A-wing', id: '28' },
            { name1: 'B-wing', id: '29' },
            { name1: 'Naboo Fighter', id: '39' },
            { name1: 'Millenium Falcon', id: '10' }
        ];

        //var promise1, promise2;
        $scope.selectedShipChanged = function() {
            console.log("ship id is ", $scope.selectedShip.id);
            $("#p2, #pa2, #c2, #s2, #p1, #pa1, #c1, #s1").removeClass('bg-danger');

            var myId = $scope.selectedShip.id;
            console.log(myId);

            var promise = GetSwapi.getShips(myId);
            promise.then(function(response) {
                swapi.ship1 = response.data;
                //promise1 = response.data;
                console.log(swapi.ship1);
                var name = swapi.ship1.name;
                var cargo = swapi.ship1.cargo_capacity;
                console.log(name + ' has capacity of ' + cargo);

            }).catch(function(error) {
                console.log('error2 occured', error);
            });
        };

        $scope.selectedShipChanged2 = function() {
            console.log("ship id is ", $scope.selectedShip2.id);
            $("#p2, #pa2, #c2, #s2, #p1, #pa1, #c1, #s1").removeClass('bg-danger');

            var myId = $scope.selectedShip2.id;
            console.log(myId);

            var promise = GetSwapi.getShips(myId);
            promise.then(function(response) {
                swapi.ship2 = response.data;
                //promise2 = response.data;
                console.log(swapi.ship2);
                var name = swapi.ship2.name;
                var cargo = swapi.ship2.cargo_capacity;
                console.log(name + ' has capacity of ' + cargo);

            }).catch(function(error) {
                console.log('error2 occured', error);
            });
        };

        $scope.CompareShips = function() {
            //console.log(swapi.ship1.max_atmosphering_speed, swapi.ship2.max_atmosphering_speed);
            //console.log(typeof(swapi.ship1.max_atmosphering_speed));
            //cost
            let cost1 = parseInt(swapi.ship1.cost_in_credits);
            let cost2 = parseInt(swapi.ship2.cost_in_credits);
            if (cost1 > cost2) {
                console.log(swapi.ship1.name + " is more expensive than " + swapi.ship2.name);
                $("#p1").addClass('bg-danger');
            } else if (cost1 == cost2) {
                console.log("same shit");
            } else {
                console.log(swapi.ship2.name + " is more expensive than " + swapi.ship1.name);
                $("#p2").addClass('bg-danger');
            }
            //speed
            let speed1 = parseInt(swapi.ship1.max_atmosphering_speed);
            let speed2 = parseInt(swapi.ship2.max_atmosphering_speed);
            if (speed1 > speed2) {
                console.log(swapi.ship1.name + " is faster than " + swapi.ship2.name);
                $("#s1").addClass('bg-danger');
            } else if (speed1 == speed2) {
                console.log("same shit");
            } else {
                console.log(swapi.ship2.name + " is faster than " + swapi.ship1.name);
                $("#s2").addClass('bg-danger');
            }
            //cargo size
            let cargo1 = parseInt(swapi.ship1.cargo_capacity);
            let cargo2 = parseInt(swapi.ship2.cargo_capacity);
            if (cargo1 > cargo2) {
                console.log(swapi.ship1.name + "'cargo capacity is bigger than " + swapi.ship2.name);
                $("#c1").addClass('bg-danger');
            } else if (cargo1 == cargo2) {
                console.log("same shit");
            } else {
                console.log(swapi.ship2.name + "'cargo capacity is bigger than " + swapi.ship1.name);
                $("#c2").addClass('bg-danger');
            }
            //number passengers
            let passengers1 = parseInt(swapi.ship1.passengers);
            let passengers2 = parseInt(swapi.ship2.passengers);
            if (passengers1 > passengers2) {
                console.log(swapi.ship1.name + " can carry more passengers " + swapi.ship2.name);
                $("#pa1").addClass('bg-danger');
            } else if (passengers1 == passengers2) {
                console.log("same shit");
            } else {
                console.log(swapi.ship2.name + " can carry more passengers " + swapi.ship1.name);
                $("#pa2").addClass('bg-danger');
            }
        };

    }
})();