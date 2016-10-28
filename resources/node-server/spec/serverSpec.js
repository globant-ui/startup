var request = require("request");
var server = require("../server.js");
var base_url = "http://localhost:8000";

describe("NodeJS Server API", function() {
	describe("GET / (public)", function() {
		it("should returns status code 200", function(done) {
			request.get(base_url, function(error, response, body) {
				expect(response.statusCode).toBe(200);
				done();
			});
		});
	});

	describe("Movies API", function() {
		describe("GET /api/movies", function() {
			it("should list all movies", function(done) {
				request.get(base_url + '/api/movies', function(error, response, body) {
					expect(response.statusCode).toBe(200);
					var data = JSON.parse(body);
					expect(data.length).toEqual(10);
					done();
				});
			});
		});

		describe("GET /api/movies?search=hanks", function() {
			it("should search for movies with tom hanks", function(done) {
				request.get(base_url + '/api/movies?search=hanks', function(error, response, body) {
					expect(response.statusCode).toBe(200);
					var data = JSON.parse(body);
					expect(data.length).toEqual(2);
					expect(data[0].title).toEqual('Toy Story');
					expect(data[1].title).toEqual('Forrest Gump');
					done();
				});
			});
		});

		describe("GET /api/movies?search=hanks&genre=Animation", function() {
			it("should search for a movie on a specific genre", function(done) {
				request.get(base_url + '/api/movies?search=hanks&genre=Animation', function(error, response, body) {
					expect(response.statusCode).toBe(200);
					var data = JSON.parse(body);
					expect(data.length).toEqual(1);
					expect(data[0].title).toEqual('Toy Story');
					done();
				});
			});
		});

		describe("GET /api/movies?search=mo&genre=Drama&order=rating&limit=3", function() {
			it("should search for a movie, order and truncate results", function(done) {
				request.get(base_url + '/api/movies?search=mo&genre=Drama&order=rating&limit=3', function(error, response, body) {
					expect(response.statusCode).toBe(200);
					var data = JSON.parse(body);
					expect(data.length).toEqual(3);
					expect(data[0].title).toEqual('Fight Club');
					expect(data[1].title).toEqual('Forrest Gump');
					expect(data[2].title).toEqual('Apoclaypse Now');
					done();
				});
			});
		});

		describe("GET /api/movies?order=released&limit=5", function() {
			it("should get the last 5 premier movies", function(done) {
				request.get(base_url + '/api/movies?order=released&limit=5', function(error, response, body) {
					expect(response.statusCode).toBe(200);
					var data = JSON.parse(body);
					expect(data.length).toEqual(5);
					expect(data[0].title).toEqual('The Hangover Part II');
					expect(data[1].title).toEqual('Inglourious Basterds');
					expect(data[2].title).toEqual('Funny People');
					expect(data[3].title).toEqual('The Pianist');
					expect(data[4].title).toEqual('Shrek');
					done();
				});
			});
		});

		describe("GET /api/movies?order=rating&limit=3", function() {
			it("should get the top 3 popular movies", function(done) {
				request.get(base_url + '/api/movies?order=rating&limit=3', function(error, response, body) {
					expect(response.statusCode).toBe(200);
					var data = JSON.parse(body);
					expect(data.length).toEqual(3);
					expect(data[0].title).toEqual('A clockwork Orange');
					expect(data[1].title).toEqual('Fight Club');
					expect(data[2].title).toEqual('Shrek');
					done();
				});
			});
		});

		describe("GET /api/movies/1", function() {
			it("should get movie id 1", function(done) {
				request.get(base_url + '/api/movies/1', function(error, response, body) {
					expect(response.statusCode).toBe(200);
					var data = JSON.parse(body);
					expect(data.id).toEqual(1);
					done();
				});
			});
		});

		describe("GET /api/genres", function() {
			it("should list all genres", function(done) {
				request.get(base_url + '/api/genres', function(error, response, body) {
					expect(response.statusCode).toBe(200);
					var data = JSON.parse(body);
					expect(data.length).toEqual(9);
					expect(data[0]).toEqual('Comedy');
					expect(data[1]).toEqual('Drama');
					expect(data[2]).toEqual('Animation');
					done();
				});
			});
		});

		describe("POST /api/movies", function() {
			it("should create movie and return new id", function(done) {
				var newId = 11;
				var newMovie = {
					title: "Lorem ipsum",
					year:"2016",
					released:"2016-04-29T00:00:00.0Z",
					genre:"Comedy, Drama",
					director:"John Doe",
					actors:"Foo Bar, Dolor Sit",
					plot:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor ipsum ut elit dignissim vestibulum. Nulla ullamcorper mauris in eros luctus luctus. Praesent id posuere tellus, et malesuada felis.",
					poster:"https://s-media-cache-ak0.pinimg.com/236x/63/35/b3/6335b33481b913f437b4e395cf71f9b6.jpg",
					rating: 2
				};

				var options = {
					method: 'post',
					body: newMovie,
					json: true,
					url: base_url + '/api/movies'
				};

				request(options, function(error, response, body) {
					expect(response.statusCode).toBe(201);
					var data = body;
					expect(data.id).toEqual(newId);

					request.get(base_url + '/api/movies/' + newId, function(error, response, body) {
						expect(response.statusCode).toBe(200);
						var data = JSON.parse(body);
						expect(data.id).toEqual(newId);
						expect(data.title).toEqual(newMovie.title);
						expect(data.year).toEqual(newMovie.year);
						expect(data.genre).toEqual(newMovie.genre);
						expect(data.director).toEqual(newMovie.director);
						expect(data.actors).toEqual(newMovie.actors);
						expect(data.plot).toEqual(newMovie.plot);
						expect(data.poster).toEqual(newMovie.poster);
						expect(data.rating).toEqual(newMovie.rating);
						done();
					});
				});
			});

			it("should not create movie with invalid data", function(done) {
				var newId = 12;
				var newMovie = {
					year:"2016",
					genre:"Comedy, Drama",
					rating: 2
				};

				var options = {
					method: 'post',
					body: newMovie,
					json: true,
					url: base_url + '/api/movies'
				};

				request(options, function(error, response, body) {
					expect(response.statusCode).toBe(400);

					request.get(base_url + '/api/movies/' + newId, function(error, response, body) {
						expect(response.statusCode).toBe(404);
						done();
					});
				});
			});

			it("should create new genre", function(done) {
				var newId = 12;
				var newMovie = {
					title: "Lorem ipsum",
					year:"2016",
					released:"2016-04-29T00:00:00.0Z",
					genre:"CustomGenre",
					director:"John Doe",
					actors:"Foo Bar, Dolor Sit",
					plot:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor ipsum ut elit dignissim vestibulum. Nulla ullamcorper mauris in eros luctus luctus. Praesent id posuere tellus, et malesuada felis.",
					poster:"https://s-media-cache-ak0.pinimg.com/236x/63/35/b3/6335b33481b913f437b4e395cf71f9b6.jpg",
					rating: 2
				};

				var options = {
					method: 'post',
					body: newMovie,
					json: true,
					url: base_url + '/api/movies'
				};

				request(options, function(error, response, body) {
					expect(response.statusCode).toBe(201);
					var data = body;
					expect(data.id).toEqual(newId);

					request.get(base_url + '/api/genres', function(error, response, body) {
						expect(response.statusCode).toBe(200);
						var data = JSON.parse(body);
						expect(data.length).toEqual(10);
						done();
					});
				});
			});
		});
	});

	describe("Closing server", function() {
		it("should not respond", function(done) {
			server.closeServer();
			request.get(base_url, function(error, response, body) {
				expect(response).toEqual(undefined);
				done();
			});
		});
	});
});