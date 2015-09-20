var app = angular.module('startupMovies', ['ngRoute', 'startupControllers']);

// Routing
app.config(['$routeProvider',function ($routeProvider)
  {
    $routeProvider.when('/view/:id', {
      templateUrl: 'dist/Views/movieDetailsView.html',
      controller: 'MovieDetailsCtrl'
    })
    .when('/:action/:id', {
      templateUrl: 'dist/Views/movieDetailsView.html',
      controller: 'MovieEditorCtrl'
    })
    .when('/:action', {
      templateUrl: 'dist/Views/movieDetailsView.html',
      controller: 'MovieEditorCtrl'
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
