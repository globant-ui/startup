'use strict';

/**
 * @ngdoc function
 * @name spotifyApp.controller:SearchResultCtrl
 * @description
 * # SearchResultCtrl
 * Controller of the spotifyApp
 */

angular.module('spotifyApp')
.controller('searchResultCtrl', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {
    var artistUrl = 'https://api.spotify.com/v1/artists/${$stateParams.artistId}'
    $http({
  		method: 'GET',
  		url: artistUrl
	}).then(function successCallback(response) {
    $scope.artist = response.data;
    console.log(response.data);
    
  })
}]);