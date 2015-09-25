var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.names = [];

  $scope.addMovie = function (name, director, year, gender) {
  	$scope.names.push(name, director, year, gender);
  	delete $scope.aname;
  	delete $scope.adirector;
  	delete $scope.ayear;
  	delete $scope.agender;
  };

  $scope.pop = function () {
  	$scope.names.pop();
  };

}]);