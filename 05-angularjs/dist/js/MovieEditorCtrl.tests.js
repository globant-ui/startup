'use strict';

// Tests for MovieEditorCtrl
(function () {
  describe('Tests for MovieEditorCtrl', function()
  {
    var window = {location: {href: ''}};
    var scope, routeParams, timeout, createController;

    // Generate a Fake Movie to test with it...
    var TestMovie = {title: 'testTitle', year: '1900', genre: 'testGenre', desc: 'testDesc', imgUrl: 'http'};

    // Load Module
    beforeEach(module('startupControllers'));
    // Load Dependencies
    beforeEach(inject(function($rootScope, $controller, _$window_, _$timeout_,_LocalStorageService_, _MovieGeneratorService_)
    {
      scope = $rootScope.$new();
      createController = function () {
        return $controller('MovieEditorCtrl', {
          '$scope' : scope,
          '$routeParams' : {action: 'test', id: 0},
          '$window' : window,
          '$timeout' : _$timeout_,
          'LocalStorageService' :_LocalStorageService_,
          'MovieGeneratorService' : _MovieGeneratorService_
        });
      };
    }));

    // Tests start here
    it('Should Action = test & id = 0', function()
    {
      var controller = createController();
      expect(scope.action).toEqual('test');
      expect(scope.movieId).toEqual(0);
    });

    it('Should check editClick', function()
    {
      var controller = createController();
      scope.editClick();
      expect(window.location.href).toEqual('./#/edit/0');
    });

    it('Should check delClick', function()
    {
      var controller = createController();
      scope.delClick();
      expect(window.location.href).toEqual('./#/del/0');
    });

    it('Should create an item', function()
    {
      var controller = createController();
      var initLenght = scope.movies.length;
      scope.tItem = TestMovie;
      scope.addItem(true);
      expect(scope.movies.length).toEqual(initLenght + 1);
    });

    it('Should active delete', function ()
    {
      var controller = createController();
      scope.action = 'del';
      expect(window.location.href).toEqual('./');
    });

    it('Should edit an item', function ()
    {
      var controller = createController();
      scope.movies = [TestMovie];
      // Edit TestMovies
      TestMovie.title = 'modified';
      // Act
      scope.editClick(true);
      // Assert
      expect(scope.movies[0].title).toEqual('modified');

    });
  });
}());