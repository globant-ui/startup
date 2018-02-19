angular.module("moviesApp", [])
.controller("mainController", function ($scope) {
	$scope.movieList = movieArray;
	$scope.showDetails = false;
	$scope.editMode = false;
	$scope.addMovie = function () {
		$scope.movieList.push($scope.newMovie);
		$scope.newMovie = {};
	};
	$scope.clearAll = function () {
		$scope.movieList = [];
	};
	$scope.details = function () {
		if(!$scope.showDetails) {
			$scope.showDetails = true;
		}
		else {
			$scope.showDetails = false;
		}
	};
	$scope.editMovie = function (movieToEdit) {
		$scope.newMovie = movieToEdit;
		document.getElementById('btnFinish').style.visibility="visible";
		document.getElementById('btnSubmit').style.visibility="hidden";
		document.getElementById('btnClr').style.visibility="hidden";
		$scope.editMode = true;
	};
	$scope.finishEdit = function () {
		$scope.newMovie = {};
		document.getElementById('btnFinish').style.visibility="hidden";
		document.getElementById('btnSubmit').style.visibility="visible";
		document.getElementById('btnClr').style.visibility="visible";
		$scope.editMode = false;
	};
	$scope.removeMovie = function (movieToRemove) {
		$scope.movieList = $scope.movieList.filter(function (movieToCompare) {
			return movieToCompare.title !== movieToRemove;
		});
	};
});