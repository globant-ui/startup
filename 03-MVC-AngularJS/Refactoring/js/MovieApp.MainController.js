angular.module("MovieApp")

.controller("MainController", MainController);

function MainController ($scope, $location, AddEditRemoveService) {
	$scope.movieList = AddEditRemoveService.getAll();
	$scope.editMode = false;

	$scope.addMovie = function () {
		AddEditRemoveService.add($scope.newMovie);
		$scope.newMovie = {};
	};
	$scope.clearAll = function () {
		$scope.movieList = AddEditRemoveService.clear();
		$location.url("/");
	};
	$scope.editMovie = function (movieToEdit) {
		$scope.newMovie = movieToEdit;
		$scope.editMode = true;
	};
	$scope.finishEdit = function () {
		$scope.newMovie = {};
		$scope.editMode = false;
	};
	$scope.removeMovie = function (movieToRemove) {
		$scope.movieList = AddEditRemoveService.remove(movieToRemove);
	};
	$scope.detailsMovie = function (movieToShow) {
		$location.url("/details"+movieToShow.id);
	};
}