angular.module("MovieApp")

.controller("DetailsController", DetailsController);

function DetailsController ($scope, $routeParams, AddEditRemoveService) {
	$scope.movieList = AddEditRemoveService.getAll();
	$scope.titleMovie = $scope.movieList[$routeParams.id-1].title;
	$scope.durationMovie = $scope.movieList[$routeParams.id-1].duration;
	$scope.yearMovie = $scope.movieList[$routeParams.id-1].year;
	$scope.genreMovie = $scope.movieList[$routeParams.id-1].genre;
	$scope.clasificationMovie = $scope.movieList[$routeParams.id-1].clasification;
	$scope.directorMovie = $scope.movieList[$routeParams.id-1].director;
	$scope.descriptionMovie = $scope.movieList[$routeParams.id-1].description;
}