'use strict';

angular.module('spotifyApp')
.controller('HomeCtrl', ['$scope', '$http', 'searchService', function ($scope, $http, searchService) {
  
    $scope.artists = [];
    $scope.busqueda = "";

   $scope.getResults = function(){
 		var searchUrl = 'https://api.spotify.com/v1/search?q=' + $scope.busqueda + '&type=artist';
 		searchService.getResults(searchUrl, $http).then(function successCallback(data){
 			$scope.artists = data.artists.items;
 		});
    };


  }]);