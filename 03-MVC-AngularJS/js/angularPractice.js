angular.module("moviesApp", [])
.controller("mainController", function ($scope) {
	$scope.movieList = [jleague, thepruge, avengers, hpotter];
	$scope.addMovie = function () {
		$scope.movieList.push($scope.newMovie);
		$scope.newMovie = {};
	};
	$scope.clearAll = function () {
		$scope.movieList = [];
	};
	$scope.editMovie = function (movieToEdit) {
		document.getElementById('name').value = movieToEdit.title;
		document.getElementById('year').value = movieToEdit.year;
		document.getElementById('duration').value = movieToEdit.duration;
		document.getElementById('btnEdit').style.visibility="visible";
		document.getElementById('btnSubmit').style.visibility="hidden";
		document.getElementById('btnClr').style.visibility="hidden";
	};
	$scope.addEditMovie = function () {
		document.getElementById('name').value = "";
		document.getElementById('year').value = "";
		document.getElementById('duration').value = "";
		document.getElementById('btnEdit').style.visibility="hidden";
		document.getElementById('btnSubmit').style.visibility="visible";
		document.getElementById('btnClr').style.visibility="visible";
		$scope.addMovie();	
	};
	$scope.removeMovie = function (movieToRemove) {
		$scope.movieList = $scope.movieList.filter(function (movieToCompare) {
			return movieToCompare.title !== movieToRemove;
		});
	};
});

function Movie(title, year, duration) {
	this.title = title;
	this.year = year;
	this.duration = duration;
}

var jleague = new Movie("Justice League", 2017, 120);
var thepruge = new Movie("The Purge", 2013, 84);
var avengers = new Movie("The Avengers", 2012, 142);
var hpotter = new Movie("Harry Potter and the Prisoner of Azkaban", 2004, 141);