angular.module("MovieApp")

.controller("DetailsController", DetailsController);

function DetailsController ($scope, $routeParams, AddEditRemoveService) {
	$scope.movieList = AddEditRemoveService.getAll();
	var i = 0;
	while($scope.movieList[i].id != $routeParams.id) {
		i++;
	}
	$scope.titleMovie = $scope.movieList[i].title;
	$scope.durationMovie = $scope.movieList[i].duration;
	$scope.yearMovie = $scope.movieList[i].year;
	$scope.genreMovie = $scope.movieList[i].genre;
	$scope.clasificationMovie = $scope.movieList[i].clasification;
	$scope.directorMovie = $scope.movieList[i].director;
	$scope.descriptionMovie = $scope.movieList[i].description;
}