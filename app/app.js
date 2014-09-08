'use strict';

// Declare app level module which depends on views, and components
angular.module('tdd', [
  'ngRoute',
  'tdd.group',
  'tdd.cyclists',
  'firebase',
  'google-maps'
  ])

.run(function($rootScope) {
  $rootScope.baseUrl = 'https://tourdedrupal.firebaseio.com/';
})


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/group'});
}]);
