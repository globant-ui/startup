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
app.run(['$templateCache', '$http', function($templateCache, $http) {
  $http.get('dist/Views/movieListView.html', {cache: $templateCache});
  $http.get('dist/Views/movieDetailsView.html', {cache: $templateCache});
}]);

// Service that manage Local Storage
app.service('LocalStorageService',['$localStorage', function($localStorage) {
  var data = $localStorage.$default({movies:[]});

  this.ListAllMovies = function()
  {
    return data.movies;
  };
  this.CreateMovie = function (movie)
  {
    data.movies.push(movie);
  };
  this.ReadMovie = function(index)
  {
    if (arguments[0] !== undefined)
    {
      return data.movies[index];
    }
    else
    {
      return undefined;
    }
  };
  this.UpdateMovie = function(index, movie)
  {
    data.movies[index] = movie;
  };
  this.DeleteMovie = function(index)
  {
    data.movies.splice(index, 1);
  };
}]);

// Service that generates a empty (or with data )
app.service('MovieGenerator', function()
{
  this.Generate = function()
  {
    return {
      title:  (arguments[0].title   !== undefined) ? arguments[0].title   : '',
      year:   (arguments[0].year    !== undefined) ? arguments[0].year    : '',
      genre:  (arguments[0].genre   !== undefined) ? arguments[0].genre   : '',
      desc:   (arguments[0].desc    !== undefined) ? arguments[0].desc    : '',
      imgUrl: (arguments[0].imgUrl  !== undefined) ? arguments[0].imgUrl  :
        'http://img2.wikia.nocookie.net/__cb20130819212538/dragon-stones/images/f/fc/256x256.gif'
    };
  };
});