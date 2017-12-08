var app = angular.module('app', []);

app.controller('MoviesCtrl', ['$scope', function($scope) {

  $scope.movies = [
  { id: 1, name: "JuRaZicK ParC", director: "Velociraptor", year: "1997"},
  { id: 2, name: "Titanoc", director: "Leonardo CaprioDi", year: "1943"},
  { id: 3, name: "JuRaZicK ParC", director: "Velociraptor", year: "2003"},
  { id: 4, name: "Piratas del Casino", director: "Johnny Diip", year: "2011"},
  { id: 5, name: "Jarry Poter", director: "Nicolas Jaula", year: "2017"}
  ];

  $scope.addMovie = function() {
    var movie_id = $scope.movies.length; 
    movie_id++;
    $scope.movies.push({ id: movie_id, name: $scope.addName, director: $scope.addDirector, year: $scope.addYear });
  };

  $scope.deleteMovie = function(index) {
    $scope.movies.splice(index, 1);
  };

}]);