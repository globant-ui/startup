angular.module("moviesApp", [])
.controller("mainController", function ($scope) {
	$scope.movieList = movieArray;
	$scope.addMovie = function () {
		$scope.movieList.push($scope.newMovie);
		$scope.newMovie = {};
	};
	$scope.clearAll = function () {
		$scope.movieList = [];
	};
	$scope.editMovie = function (movieToEdit) {
		$scope.newMovie = movieToEdit;
		document.getElementById('btnFinish').style.visibility="visible";
		document.getElementById('btnSubmit').style.visibility="hidden";
		document.getElementById('btnClr').style.visibility="hidden";
		/*document.getElementById('details').style.visibility="hidden";
		document.getElementById('edit').style.visibility="hidden";
		document.getElementById('remove').style.visibility="hidden";*/
	};
	$scope.finishEdit = function () {
		$scope.newMovie = {};
		document.getElementById('btnFinish').style.visibility="hidden";
		document.getElementById('btnSubmit').style.visibility="visible";
		document.getElementById('btnClr').style.visibility="visible";
		/*document.getElementById('details').style.visibility="visible";
		document.getElementById('edit').style.visibility="visible";
		document.getElementById('remove').style.visibility="visible";*/
	};
	$scope.removeMovie = function (movieToRemove) {
		$scope.movieList = $scope.movieList.filter(function (movieToCompare) {
			return movieToCompare.title !== movieToRemove;
		});
	};
});