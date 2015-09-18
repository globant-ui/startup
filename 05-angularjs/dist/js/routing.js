var app = angular.module('startupMovies', ['ngRoute', 'startupControllers']);

// Routing
app.config(['$routeProvider',
  function ($routeProvider)
  {
    $routeProvider.when('/movie/:id', {
      templateUrl: 'dist/Views/movieDetailsView.html',
      controller: 'MovieDetailsCtrl'
    })
    .when('/', {
        templateUrl: 'dist/Views/movieListView.html',
        controller: 'MovieListCtrl'
    })
    .otherwise({
        redirectTo: '/'
      });
  }]);

// Preload Templates using templateCache
app.run(function($templateCache, $http) {
  $http.get('dist/Views/movieListView.html', {cache: $templateCache});
  $http.get('dist/Views/movieDetailsView.html', {cache: $templateCache});
});