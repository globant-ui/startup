var ctrls = angular.module('startupControllers', ['ngStorage']);


// Movie Editor Controller
ctrls.controller('MovieEditorCtrl', ['$scope', '$routeParams', '$window', '$localStorage',
  function ($scope, $routeParams, $window, $localStorage, $timeout)
{
  // Get Action Parameters
  $scope.action = $routeParams.action;
  // Get Param id
  $scope.movieId = $routeParams.id;
  // Bind data to controller from LocalStorage
  $scope.data = $localStorage.$default({movies:[]});

  // Check if action is view
  if ($scope.action === 'view')
  {
    // Action to clicks
    $scope.editClick = function() { $window.location.href = './#/edit/' + $scope.movieId; };
    $scope.delClick = function() { $window.location.href = './#/del/' + $scope.movieId; };
  }

  // Check if action is delete, it will automatically delete the item
  else if ($scope.action === 'del')
  {
    // Delete Item from Source
    $scope.data.movies.splice($scope.movieId, 1);
    // Redirect to List
    $window.location.href = './';
  }

  // Check if action is edit, and define needed methods and fields
  else if ($scope.action === 'edit')
  {
    // We use a transitory item because don't want a
    // realtime-binding and only want to save when user
    // press 'Save' and the content is valid!.
    $scope.tItem =
    {
      title : $scope.data.movies[$scope.movieId].title,
      year  : $scope.data.movies[$scope.movieId].year,
      genre : $scope.data.movies[$scope.movieId].genre,
      desc  : $scope.data.movies[$scope.movieId].desc,
      imgUrl: $scope.data.movies[$scope.movieId].imgUrl
    };

    // Define editItem Method
    $scope.editItem = function (state)
    {
      // Validate Only if is true
      if (state === true)
      {
        // Pass Transitory Item to data
        $scope.data.movies[$scope.movieId].title = $scope.tItem.title;
        $scope.data.movies[$scope.movieId].year = $scope.tItem.year;
        $scope.data.movies[$scope.movieId].genre = $scope.tItem.genre;
        $scope.data.movies[$scope.movieId].imgUrl = $scope.tItem.imgUrl;
        $scope.data.movies[$scope.movieId].desc = $scope.tItem.desc;

        // Back To View, with a timeout of 200msec to finish saving
        $timeout(function(){
          $window.location.href = './#/view/' + $scope.movieId;
        },200);
      }
    };
  }

  // Check if action is add, and define needed methods and fields
  else if ($scope.action === 'add')
  {
    // We use a transitory item because don't want a
    // realtime-binding and only want to save when user
    // press 'Save' and the content is valid!.
    $scope.tItem =
    {
      title : '',
      year  : 0,
      genre : '',
      desc: '',
      imgUrl: 'http://img2.wikia.nocookie.net/__cb20130819212538/dragon-stones/images/f/fc/256x256.gif'
    };

    // Define addItem Method
    $scope.addItem = function (state)
    {
      // Add only if is valid
      if (state === true)
      {
        // Push item to Data
        $scope.data.movies.push($scope.tItem);

        // Go Back to List
        $window.location.href = './';
      }
    };
  }
}]);

// Movie List Controller
ctrls.controller('MovieListCtrl', ['$scope', '$localStorage', function ($scope, $localStorage)
{
  // Bind data to controller from LocalStorage
  $scope.data = $localStorage.$default({movies:[]});
}]);
