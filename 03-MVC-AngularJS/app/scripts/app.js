'use strict';


var myApp = angular.module('spotifyApp', [
    'ui.router',
	'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch'
]);

myApp.config(function($stateProvider, $urlRouterProvider) {
        
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    });


    $stateProvider.state('album', {
        url: '/artist/:artistId',
        templateUrl: 'views/album.html',
        controller: 'albumCtrl',

    });

    $stateProvider.state('track', {
        url: '/album/:albumId',
        templateUrl: 'views/album.html',
        controller: 'trackCtrl',
    });
});