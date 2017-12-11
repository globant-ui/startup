function MoviesListController($scope, $element, $attrs) {
  var ctrl = this;

  ctrl.list = [
  { id: 1, name: "JuRaZicK ParC", director: "Velociraptor", year: "1997"},
  { id: 2, name: "Titanoc", director: "Leonardo CaprioDi", year: "1943"},
  { id: 3, name: "Game of Toilets", director: "Martin Toilet", year: "2003"},
  { id: 4, name: "Piratas del Casino", director: "Johnny Diip", year: "2011"},
  { id: 5, name: "Jarry Poter", director: "Nicolas Jaula", year: "2017"}
  ];

  ctrl.updateMovie = function(movie, prop, value) {
    movie[prop] = value;
  };

  ctrl.deleteMovie = function(movie) {
    console.log("LLEGUE");
    var idx = ctrl.list.indexOf(movie);
    if (idx >= 0) {
      ctrl.list.splice(idx, 1);
    }
  };

  $scope.addMovie = function() {
    var movie_id = ctrl.list.length; 
    movie_id++;
    const movie = { id: movie_id, name: $scope.addName, director: $scope.addDirector, year: $scope.addYear };
    ctrl.list.push(movie);
  };
}

var app = angular.module('movieApp');

app.controller('MoviesListController', ['$scope', MoviesListController]);

app.component('moviesList', {
  templateUrl: 'moviesList.html',
  bindings: {
    movies: '='
  }
});