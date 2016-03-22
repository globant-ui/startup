var app=angular.module('MoviesApp',['ngRoute','MoviesControllers','MoviesServices']);

app.config(["$routeProvider",function ($routeProvider) {
	
	$routeProvider
	.when('/',{
		templateUrl: 'Templates/MList_View.html',
		controller: 'MListController'
	})

	.when('/add',{
		templateUrl: 'Templates/MAdd_View.html',
		controller: 'MAddController'
	})

	.when('/modify/:id',{
		templateUrl: 'Templates/MModify_View.html',
		controller: 'MModifyController'
	})

	.when('/details/:id',{
		templateUrl:'Templates/MDetails_View.html',
		controller: 'MDetailsController'
	})

	.otherwise({redirectTo: '/'});

}]);


app.run(['$templateCache', function ($templateCache)
{
	/* This doesn't work */
	/* All templates should be loaded at the beggining of the app. */
  $templateCache.get('./Templates/MAdd_View.html');
  $templateCache.get('./Templates/MDetails_View.html');
  $templateCache.get('./Templates/MList_View.html');
  $templateCache.get('./Templates/MModify_View.html');
}]);