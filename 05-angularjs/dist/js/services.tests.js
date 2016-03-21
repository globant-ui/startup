'use strict';

(function() {
  describe('Services Specs.', function() {
    // Var that holds the services
    var LocalStorageService;
    var MovieGeneratorService;

    // Start Module before tests
    beforeEach(module('startupServices'));

    // Get Services
    beforeEach(inject(function(_LocalStorageService_, _MovieGeneratorService_)
    {
      LocalStorageService = _LocalStorageService_;
      MovieGeneratorService = _MovieGeneratorService_;
    }));

    // Generate a Fake Movie to test with it...
    var TestMovie = {title: 'testTitle', year: '1900', genre: 'testGenre', desc: 'testDesc', imgUrl: 'http'};

    // Tests for LocalStorageService
    it('Should add a Movie to LocalStorage', function()
    {
      // Get Initial length...
      var initLenght = LocalStorageService.ReadAllMovies().length;

      // Push Movie into LocalStorage
      LocalStorageService.CreateMovie(TestMovie);

      // Assert if movie is added...
      expect(LocalStorageService.ReadAllMovies().length).toEqual(initLenght + 1);
    });

    it('Should Read the last item', function()
    {
      // Push a fake movie
      LocalStorageService.CreateMovie(TestMovie);
      // Get last item
      var lastItem = ((LocalStorageService.ReadAllMovies().length) - 1);
      var localMovie = LocalStorageService.ReadMovie(lastItem);
      // Assert title of last movie added
      expect(localMovie.title).toEqual(TestMovie.title);
    });

    it('Should Update the movie', function ()
    {
      // Push a fake movie
      LocalStorageService.CreateMovie(TestMovie);
      var ModifiedMovie = {title: 'editedTitle', year: '1999', genre: '.-', desc: '??', imgUrl: 'http://'};
      // Get last item
      var lastItem = ((LocalStorageService.ReadAllMovies().length) - 1);
      var localMovie = LocalStorageService.UpdateMovie(lastItem, ModifiedMovie);
      // Assert if movie is modified correctly
      expect(LocalStorageService.ReadMovie(lastItem)).toEqual(ModifiedMovie);
    });

    it('Should delete a movie', function ()
    {
      // Push a fake movie
      LocalStorageService.CreateMovie(TestMovie);
      // Get last item and length
      var lastItem = ((LocalStorageService.ReadAllMovies().length) - 1);
      var lengthWithMovie = LocalStorageService.ReadAllMovies().length;
      // Delete the movie
      LocalStorageService.DeleteMovie(lastItem);

      //Assert if movie is deleted
      expect(LocalStorageService.ReadAllMovies().length).toEqual(lengthWithMovie - 1);

    });

    // Tests for MovieGeneratorService
    it('Should Create an Empty Movie', function ()
    {
      // Recipe on MovieGeneratorService for Empty Movies
      var EmptyMovie = {title : '', year  : '', genre : '', desc  : '',
        imgUrl: 'http://img2.wikia.nocookie.net/__cb20130819212538/dragon-stones/images/f/fc/256x256.gif'
      };

      var CreatedMovie = MovieGeneratorService.GenerateEmpty();
      // Compare if
      expect(CreatedMovie).toEqual(EmptyMovie);
    });

    it('Should Create a Movie based on another Movie', function()
    {
      // Generate Movie
      var CreatedMovie = MovieGeneratorService.GenerateFromMovie(TestMovie);
      // Compare if equal
      expect(CreatedMovie).toEqual(TestMovie);
    });
  });
}());


