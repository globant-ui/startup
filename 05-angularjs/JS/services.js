var app = angular.module('MoviesServices',['ngStorage']);

app.service('LocalStorageService',['$localStorage',function($localStorage)
{
	//This doesn't use Angular $localStorage. It is using native localStorage.
	this.Return_MovieList=function(){ //It is not good idea include "Return" in the function name.
		var mlist='{"movieList":[';
		for(i=0; i<=localStorage.length-1; i++){
			key = localStorage.key(i);
			mlist=mlist+localStorage.getItem(key);
			if (i!=localStorage.length-1)
				mlist=mlist+',';
			}
		mlist=mlist+"]}";
		return movieList=(JSON.parse(mlist).movieList);
	}

	this.Return_RemoveMovie=function(index){ //Why remove return the list of movies.
		key = localStorage.key(index);
		localStorage.removeItem(key);
		movieList.splice(index,1);
		return movieList;
	}

	this.Return_AddMovie=function(movie){
		if (localStorage.length==0){
			localStorage.setItem("1",JSON.stringify(movie));
		}
		else{
			var index=localStorage.length-1;
			var pos= parseInt(localStorage.key(index))+1;
			localStorage.setItem(pos,JSON.stringify(movie));
		}
	}

	this.Return_MovieExists=function(movie){
		var flag=0;
		for (i=0; i<localStorage.length; i++){
		key = localStorage.key(i);
		mov=(JSON.parse(localStorage.getItem(key)));
		if (mov.title == movie.title)
			flag=1;
		}
	return flag;
	}

	this.Return_ModifyMovie=function(index,movie){
		key = localStorage.key(index);
		localStorage.setItem(key,JSON.stringify(movie));
	}

	this.Return_MovieDetails=function(index){ //It seems to be ShowMovie()
		key = localStorage.key(index);
		return movie=JSON.parse(localStorage.getItem(key));	
	}

	this.ShowMovie=function(index){ //It seems to be Return_MovieDetails()
		key=localStorage.key(index);
		return movie=JSON.parse(localStorage.getItem(key));	
	}
}]);