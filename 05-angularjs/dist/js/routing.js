var app = angular.module('startupMovies', ['ngRoute', 'ngStorage',  'startupControllers']);

// Routing
app.config(['$routeProvider',function ($routeProvider)
  {
    $routeProvider

    // Routing for all urls that follow the next format: ./xxxx/xx (./edit/1, ./del/1 ).
    .when('/:action/:id', {
      templateUrl: 'dist/Views/movieDetailsView.html',
      controller: 'MovieEditorCtrl'
    })
    // Routing for all urls that follow the next format: ./xxxx (./add ).
    .when('/:action', {
      templateUrl: 'dist/Views/movieDetailsView.html',
      controller: 'MovieEditorCtrl'
    })
    // Route by default, shows the movie list
    .when('/', {
        templateUrl: 'dist/Views/movieListView.html',
        controller: 'MovieListCtrl'
    })
    // If route is invalid, redirect to default route.
    .otherwise({
        redirectTo: '/'
      });
  }]);

// Preload Templates using templateCache
app.run(function($templateCache, $http) {
  $http.get('dist/Views/movieListView.html', {cache: $templateCache});
  $http.get('dist/Views/movieDetailsView.html', {cache: $templateCache});
});