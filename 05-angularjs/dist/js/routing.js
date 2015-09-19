var app = angular.module('startupMovies', ['ngRoute', 'startupControllers', 'IntStorage']);

// Routing
app.config(['$routeProvider',function ($routeProvider)
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

// Html Storage
app.factory('IntStorage', function($window, $rootScope)
{
  angular.element($window).on('storage', function(event)
  {
    if (event.key === 'movieStorage')
    {
      $rootScope.apply();
    }
  });
  return {
    setData: function(value)
    {
      $window.localStorage && $window.localStorage.setItem('movieStorage', value);
      return this;
    },
    getData: function()
    {
      return $window.localStorage && $window.localStorage.getItem('movieStorage');
    }
  };
});


// Preload Templates using templateCache
app.run(function($templateCache, $http) {
  $http.get('dist/Views/movieListView.html', {cache: $templateCache});
  $http.get('dist/Views/movieDetailsView.html', {cache: $templateCache});
});
