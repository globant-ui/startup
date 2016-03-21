'use strict';
var app = angular.module('startupControllers', ['ngStorage', 'startupServices']);


// Movie Editor Controller
app.controller('MovieEditorCtrl', ['$scope', '$routeParams', '$window',
  '$timeout', 'LocalStorageService', 'MovieGeneratorService',
  function ($scope, $routeParams, $window,  $timeout, LocalStorageService, MovieGeneratorService )
{
  // Get Action and idParams
  $scope.action = $routeParams.action;
  $scope.movieId = $routeParams.id;

  // Bind data to controller from LocalStorage
  $scope.movies = LocalStorageService.ReadAllMovies();

  // We use a transitory item because don't want a realtime-binding and only want to save when user
  // press 'Save' and the content is valid!.
  // Use if statement. It is difficult to understand.
  $scope.tItem = (($scope.movieId !== undefined)&&($scope.movieId < LocalStorageService.ReadAllMovies().length)) ?
    MovieGeneratorService.GenerateFromMovie(LocalStorageService.ReadMovie($scope.movieId)) : MovieGeneratorService.GenerateEmpty();

  // Action to clicks, apply on View
  $scope.editClick = function() { $window.location.href = './#/edit/' + $scope.movieId; };// <a> in the view, might be better
  $scope.delClick = function() { $window.location.href = './#/del/' + $scope.movieId; };// <a> in the view, might be better

  // Update a Movie
  $scope.editItem = function (state)
  {
    // Validate Only if is true
    if (state === true)
    {
      // Pass Transitory Item to data
      LocalStorageService.UpdateMovie($scope.movieId, $scope.tItem);

      // Back To View, with a timeout of 200msec to finish saving
      $timeout(function(){ //What is the purpose of this timeout?
        $window.location.href = './#/view/' + $scope.movieId;
      },200);
    }
  };

  // Create a Movie
  $scope.addItem = function (state)
  {
    // Add only if is valid
    if (state === true)
    {
      // Push item to Data
      LocalStorageService.CreateMovie($scope.tItem);

      // Go Back to List
      $window.location.href = './';
    }
  };

  // Check if action is delete, it will automatically delete the item
  if ($scope.action === 'del')//It has to be inside a function
  {
    // Delete Item from Source
    LocalStorageService.DeleteMovie($scope.movieId);
    // Redirect to List
    $window.location.href = './';
  }
}]);

// Movie List Controller
app.controller('MovieListCtrl', ['$scope', 'LocalStorageService', function ($scope, LocalStorageService)
{
  // Bind data to controller from LocalStorage
  $scope.movies = LocalStorageService.ReadAllMovies();
}]);
