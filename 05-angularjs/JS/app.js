var app=angular.module('MoviesApp',['ngRoute','MoviesControllers']);

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

app.run(['$templateCache', '$http', function ($templateCache, $http)
{
  $http.get('./Templates/MAdd_View.html', {cache: $templateCache});
  $http.get('./Templates/MDetails_View.html', {cache: $templateCache});
  $http.get('./Templates/MList_View.html', {cache: $templateCache});
  $http.get('./Templates/MModify_View.html', {cache: $templateCache});
}]);