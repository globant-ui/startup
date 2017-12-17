angular.module("MovieApp")

.service("AddEditRemoveService", AddEditRemoveService);

function AddEditRemoveService() {
	this.nextID = movieArray.length+1;
	if(movieArray.length > 0) {
		this.movies = movieArray;
	}
	else {
		this.movies = [];
	}

	this.getAll = function () {
		return this.movies;
	}
	this.add = function (newMovie) {
		newMovie.id = this.nextID;
		this.movies.push(newMovie);
		this.nextID++;
	}
	this.clear = function () {
		this.movies = [];
		this.nextID = 1;
		return this.getAll();
	}
	this.remove = function (movieToRemove) {
		this.movies = this.movies.filter(function (movieToCompare) {
			return movieToCompare.title !== movieToRemove.title;
		});
		return this.getAll();
	};
}