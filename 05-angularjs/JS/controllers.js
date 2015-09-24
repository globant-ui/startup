var app=angular.module('MoviesControllers',['MoviesServices','ngStorage']);


app.controller('MListController', ['$scope','$location','$timeout','LocalStorageService', function ($scope,$location,$timeout,LocalStorageService) {


	$scope.goToDetails=function(index){
		$location.path('/details/'+index);
	}

	$scope.goToAdd=function(){
		$location.path('/add');
	}

	$scope.goToModify=function(index){
		$location.path('/modify/'+index);
	}

	$scope.getList=function(){
		$scope.movieList=LocalStorageService.Return_MovieList();
		$scope.alert=false;
	}

	$scope.RemoveMovie=function(index){
		$scope.movieList=LocalStorageService.Return_RemoveMovie(index);
		$scope.alert=true;
		$timeout(function(){//Use this to display a message that the movie was eliminated
			$scope.alert=false;
			},500);
	}

	$scope.getList();
	
}]);

app.controller('MAddController', ['$scope','$location','$timeout','LocalStorageService',function ($scope,$location,$timeout,LocalStorageService){
	
	$scope.SaveMovie=function(movie){
		var flag=LocalStorageService.Return_MovieExists(movie);//Verifies existing movie
		if (flag==0){
			$scope.movieList=LocalStorageService.Return_AddMovie(movie);
				$scope.alert=true;
				$timeout(function(){//Use this to display a message that the movie was added
					$location.path('/')//Back to the list of movies
					},1500);
			}
		else{
				$scope.movieExists=true;
				$timeout(function(){//Use this to display a message that the movie already exists
					$scope.movieExists=false;
					},4000);
			}
	}
}]);

app.controller('MDetailsController',['$scope','$routeParams','LocalStorageService','$location',function($scope,$routeParams,LocalStorageService,$location){
	
	$scope.movie=LocalStorageService.Return_MovieDetails($routeParams.id);
	$scope.goToList=function(){
		$location.path('/');
	}

}]);

app.controller('MModifyController',['$scope','$routeParams','$location','$timeout','LocalStorageService',function($scope,$routeParams,$location,$timeout,LocalStorageService){

	$scope.movie=LocalStorageService.ShowMovie($routeParams.id);
	$scope.ModifyMovie=function(movie){
		$scope.movie=LocalStorageService.Return_ModifyMovie($routeParams.id,movie);
		$scope.alert=true;
		$timeout(function(){//Use this to display a message that the movie was modified
			$location.path('/')//Back to the list of movies
			},1500);
	}
}]);