'use strict';

angular.module('spotifyApp')
.controller('albumCtrl', ['$scope', '$http', 'searchService','$stateParams', function ($scope, $http, searchService,$stateParams) {
  
    $scope.albums = [];
    $scope.text=$stateParams.artistId;
    console.log($scope.text);

    function getResult(){
 		var searchUrl = 'https://api.spotify.com/v1/artists/' + $scope.text + '/albums';
 		searchService.getResults(searchUrl, $http).then(function successCallback(data){
 			$scope.albums = data.items;
 		})
    }

    getResult();
   console.log($scope.albums);
  }]);