'use strict';

angular.module('tdd.cyclists', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cyclists', {
    templateUrl: 'cyclists/cyclists.html',
    controller: 'CyclistsCtrl'
  });
}])

.controller('CyclistsCtrl', [function() {

}]);