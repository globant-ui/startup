var ctrls = angular.module('startupControllers', []);

// Movie Details Controller
ctrls.controller('MovieDetailsCtrl', ['$scope', '$routeParams', function($scope, $routeParams)
{
    // Get Index of Movie
    $scope.movieId = $routeParams.id;
}]);

// Movie List Controller
ctrls.controller('MovieListCtrl', ['$scope', function($scope)
{

}]);