var app=angular.module('MoviesControllers',[])

app.controller('MListController', ['$scope','$location','$routeParams','$timeout', function ($scope,$location,$routeParams,$timeout) {

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
		var mlist = '{"movieList":['  ;
		for(i=0; i<=localStorage.length-1; i++){
			key = localStorage.key(i);
			mlist=mlist+localStorage.getItem(key);
			if (i!=localStorage.length-1)
				mlist=mlist+',';
		}
		mlist=mlist+"]}";
		$scope.movieList=(JSON.parse(mlist).movieList);
		$scope.alert=false;
	}

	$scope.RemoveMovie=function(index){
		key = localStorage.key(index);
		localStorage.removeItem(key);
		$scope.movieList.splice(index,1);
		$scope.alert=true;
		$timeout(function(){
		$scope.alert=false;
		},500);
	}

	
	$scope.getList();
	
}]);

app.controller('MAddController', ['$scope','$location','$timeout',function ($scope,$location,$timeout){
	
	$scope.SaveMovie=function(movie){
		
		if (localStorage.length == 0){
			localStorage.setItem("1",JSON.stringify(movie));
		}
		else{
			var flag=0;
			for (i=0; i<localStorage.length; i++){
				key = localStorage.key(i);
				mov=(JSON.parse(localStorage.getItem(key)));
				if (mov.title == movie.title)
				{
					flag = 1;
				}
			}
			if (flag == 1){
				$scope.movieExists=true;
				$timeout(function(){
				$scope.movieExists=false;
				},4000);
			}
			else
			{
				var index=localStorage.length-1;
				var pos= parseInt(localStorage.key(index))+1;
				localStorage.setItem(pos,JSON.stringify(movie));
				$scope.alert=true;
				$timeout(function(){
				$location.path('/')
				},1500);
			}
	}
}
}]);

app.controller('MDetailsController',['$scope','$routeParams',function($scope,$routeParams){
	
	key = localStorage.key($routeParams.id);
	$scope.movie=JSON.parse(localStorage.getItem(key));	

}]);

app.controller('MModifyController',['$scope','$routeParams','$location','$timeout',function($scope,$routeParams,$location,$timeout){

	key = localStorage.key($routeParams.id);
	$scope.movie=JSON.parse(localStorage.getItem(key));
	$scope.ModifyMovie=function(movie){
		localStorage.setItem(key,JSON.stringify(movie));
		$scope.alert=true;
		$timeout(function(){
		$location.path('/')
		},1500);
	}
}]);

