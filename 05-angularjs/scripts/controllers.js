
movieList.controller('AppCtrl', function AppCtrl ($scope) {
    $scope.movies = [{
      title: 'Star Wars',
      year: '1977',
      description: 'Luke Skywalker joins forces with a Jedi Knight, \
    a cocky pilot, a wookiee and two droids to save the universe \
    from the Empire\'s world-destroying battle-station, while also \
    attempting to rescue Princess Leia from the evil Darth Vader.',
    genre: 'Fantasy',
    director: 'George Lucas'
    },
    {
      title: 'Terminator 2',
      year: '1991',
      description: 'A cyborg, identical to the one who failed \
    to kill Sarah Connor, must now protect her young son, \
    John Connor, from a more advanced cyborg, made out of \
    liquid metal.',
    genre: 'Action',
    director: 'James Cameron'
    },
     {
      title: 'Back to the Future',
      year: '1985',
      description: 'A young man is accidentally sent 30 years \
    into the past in a time-traveling DeLorean invented by \
    his friend, Dr. Emmett Brown, and must make sure his \
    high-school-age parents unite in order to save his own \
    existence.',
    genre: 'Adventure',
    director: 'Robert Zemeckis'
    }
    ];
  });

movieList.controller('InfoCtrl',
  function InfoCtrl($scope, $routeParams) {
    $scope.movie = $scope.movies[$routeParams.id];
  });

movieList.controller('AddCtrl',
  function AddCtrl($scope, $location) {
    $scope.movie = {};
    $scope.add = function () {
      $scope.movies.push($scope.movie);
      $location.url('/');
    };
  });

movieList.controller('EditCtrl',
  function EditCtrl($scope, $routeParams, $location) { 
    $scope.movie = $scope.movies[$routeParams.id];
    $scope.edit = function () {
      $scope.movies[$routeParams.id] = $scope.movies;
      $location.url('/');
    };
  });

movieList.controller('RemoveCtrl',
  function RemoveCtrl($scope, $routeParams, $location) {
    $scope.movie = $scope.movies[$routeParams.id];
    $scope.remove = function () {
      $scope.movies.splice($routeParams.id, 1);
      $location.url('/');
    };
    $scope.back = function () {
      $location.url('/');
    };
  });