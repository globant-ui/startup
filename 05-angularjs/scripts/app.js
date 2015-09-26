var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function MainCtrl($scope, $http) {
  $scope.movies = [{
     'title': 'Star Wars',
    'year': '1977',
    'description': 'Luke Skywalker joins forces with a Jedi Knight, \
    a cocky pilot, a wookiee and two droids to save the universe \
    from the Empire\'s world-destroying battle-station, while also \
    attempting to rescue Princess Leia from the evil Darth Vader.',
    'genre': 'Fantasy',
    'director': 'George Lucas'
    },
     {
    'title': 'Terminator 2',
    'year': '1991',
    'description': 'A cyborg, identical to the one who failed \
    to kill Sarah Connor, must now protect her young son, \
    John Connor, from a more advanced cyborg, made out of \
    liquid metal.',
    'genre': 'Action',
    'director': 'James Cameron'
    },
     {
    'title': 'Back to the Future',
    'year': '1985',
    'description': 'A young man is accidentally sent 30 years \
    into the past in a time-traveling DeLorean invented by \
    his friend, Dr. Emmett Brown, and must make sure his \
    high-school-age parents unite in order to save his own \
    existence.',
    'genre': 'Adventure',
    'director': 'Robert Zemeckis'
    }

  ]

  $scope.addMovie = function (title, director, year, gender) {
  	$scope.movies.push(title, director, year, gender);
  	delete $scope.atitle;
  	delete $scope.adirector;
  	delete $scope.ayear;
  	delete $scope.agender;
  };

  $scope.pop = function () {
  	$scope.movies.pop();
  };

}]);