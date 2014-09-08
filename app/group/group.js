'use strict';

angular.module('tdd.group', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/group', {
    templateUrl: 'group/group.html',
    controller: 'GroupCtrl'
  });
}])

.controller('GroupCtrl', ['$scope', '$rootScope', '$firebase', function($scope, $rootScope, $firebase) {
	$scope.map = {
	    center: {
	        latitude: 51.4478472,
	        longitude: 0.024741
	    },
	    zoom: 8
	};

	$scope.polyline = 
            {
                id: 1,
                path: [
                    {
                        latitude: 51.53,
                        longitude: 0.53
                    },
                    {
                        latitude: 51.53,
                        longitude: 0.54
                    },
                    {
                        latitude: 51.52,
                        longitude: 0.51
                    },
                    {
                        latitude: 51.54,
                        longitude: 0.51
                    }
                ],
                stroke: {
                    color: '#6060FB',
                    weight: 3
                },
                editable: true,
                draggable: true,
                geodesic: true,
                visible: true,
                icons: [{
                    icon: {
                        path: google.maps.SymbolPath.BACKWARD_OPEN_ARROW
                    },
                    offset: '25px',
                    repeat: '50px'
                }]
            };

	var userRef = new Firebase($rootScope.baseUrl).child('yanniboi');
    $scope.pings = $firebase(userRef).$asArray();

    var test = '';


    $scope.path = [];

    /*$scope.test = $firebase(userRef);

    $scope.test.$on("loaded", function() {
   		var keys = $scope.test.$getIndex();

  		angular.forEach(keys, function(key) {
     		console.log(key, $scope.test[key]);
    		$scope.path.push({
            	latitude: $scope.test[key].lat,
            	longitude: $scope.test[key].lng
        	});

        	var test = '';
        });
  	});*/



}]);