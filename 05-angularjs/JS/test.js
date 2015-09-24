(function (){

	describe('MovieListController Test',function()
	{
		var scope,createController;

		beforeEach(module('MoviesControllers'));

		beforeEach(inject(function($rootScope,$controller)
		{
			scope=$rootScope.$new();
			createController=function()
			{
				return $controller('MListController',{
					'$scope': scope,
					'LocalStorageService':{
						Return_MovieList:function(){
						return [{title: 'Testing', year: '2015', type: 'Testing_type', description: 'Testing_desc'}];
						},
					
						Return_RemoveMovie:function(){
							return [];
						}
					}
				});
			};
		}));

		it('Return movieList',function()
		{
			var cont=createController();
			expect(scope.movieList.length).toEqual(1);
			expect(scope.movieList[0].title).toEqual('Testing');
		});

		it('Remove a movie',function(){
			var cont=createController();
			scope.RemoveMovie();
			expect(scope.movieList.length).toEqual(0);
		});

	});

	describe('MAddController Test',function()
	{
		var scope, createController;

		beforeEach(module('MoviesControllers'));

		beforeEach(inject(function($rootScope,$controller)
		{
			scope=$rootScope.$new();
			createController=function()
			{
				return $controller('MAddController',{
					'$scope': scope,
					'LocalStorageService':{
						Return_AddMovie:function(){
							return [{title: 'Testing', year: '2015', type: 'Testing_type', description: 'Testing_desc'}];
						},
						Return_MovieExists:function(){
							return 0;
						}
					}
				});
			}
		}));

		it('Add a movie',function(){
			var cont=createController();
			scope.SaveMovie();
			expect(scope.movieList.length).toEqual(1);
			expect(scope.movieList[0].title).toEqual('Testing');
		});

	});

	describe('MModifyController Test',function()
	{
		var scope, createController,routeParams;

		beforeEach(module('MoviesControllers'));

		beforeEach(inject(function($rootScope,$controller)
		{
			scope=$rootScope.$new();
			createController=function()
			{
				return $controller('MModifyController',{
					'$scope': scope,
					'$routeParams':1,
					'LocalStorageService':{
						Return_ModifyMovie:function(){
							return {title: 'Testing_2', year: '2015', type: 'Testing_type', description: 'Testing_desc'};
						},
						ShowMovie:function(){
							return {title: 'Testing', year: '2015', type: 'Testing_type', description: 'Testing_desc'};
						}
					}
				});
			}
		}));

		it('Modify a movie',function(){
			var cont=createController();
			scope.movie={title: 'Testing', year: '2015', type: 'Testing_type', description: 'Testing_desc'};
			scope.ModifyMovie();
			expect(scope.movie.title).toEqual('Testing_2');

		});
	});

	describe('MDetailsController Test',function()
	{
		var scope, createController,routeParams;

		beforeEach(module('MoviesControllers'));

		beforeEach(inject(function($rootScope,$controller)
		{
			scope=$rootScope.$new();
			createController=function()
			{
				return $controller('MDetailsController',{
					'$scope': scope,
					'$routeParams':1,
					'LocalStorageService':{
						Return_MovieDetails:function(){
							return {title: 'Testing', year: '2015', type: 'Testing_type', description: 'Testing_desc'};
						}
					}
				});
			}
		}));

		it('Movie details',function(){
			var cont=createController();
			expect(scope.movie.title).toEqual('Testing');
			expect(scope.movie.year).toEqual('2015');
			expect(scope.movie.type).toEqual('Testing_type');
			expect(scope.movie.description).toEqual('Testing_desc');

		});
	});
}());