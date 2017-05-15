'use strict';

angular.module('spotifyApp')
.controller('trackCtrl', ['$scope', '$http', 'searchService','$stateParams', function ($scope, $http, searchService,$stateParams) {
  
    $scope.tracks = [];
    $scope.text=$stateParams.albumId;
    console.log($scope.text);

    function getResult(){
 		var searchUrl = 'https://api.spotify.com/v1/albums/' + $scope.text + '/tracks';
 		searchService.getResults(searchUrl, $http).then(function successCallback(data){
 			$scope.tracks = data.items;
 		})
    }

    getResult();
   console.log($scope.tracks);
  }]);