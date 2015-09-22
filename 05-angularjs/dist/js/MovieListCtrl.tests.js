'use strict';

// Tests for MovieListCtrl
(function () {
  describe('Tests for MovieListCtrl.', function ()
  {
    var scope, createController;

    // Load Module
    beforeEach(module('startupControllers'));
    // Load Dependencies
    beforeEach(inject(function($rootScope, $controller)
    {
      scope = $rootScope.$new();
      createController = function ()
      {
        return $controller('MovieListCtrl', {
          '$scope' : scope,
          'LocalStorageService' : {ReadAllMovies: function() {return [
            {title: 'testTitle', year: '1900', genre: 'testGenre', desc: 'testDesc', imgUrl: 'http'} ];}}
        });
      };
    }));

    // Tests start here
    it('Should have a list of items', function ()
    {
      var controller = createController();
      expect(scope.movies.length).toEqual(1);
      expect(scope.movies[0].title).toEqual('testTitle');
    });
  });
}());

