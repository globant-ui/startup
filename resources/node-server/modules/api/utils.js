module.exports = {
	alwaysTrue: function() {
		return true;
	},
	searchString: function (string) {
		var string = string.toLowerCase();
		return function(movie) {
			return movie.title.toLowerCase().indexOf(string) != -1 ||
				movie.director.toLowerCase().indexOf(string) != -1 ||
				movie.actors.toLowerCase().indexOf(string) != -1 ||
				movie.plot.toLowerCase().indexOf(string) != -1;
		};
	},
	matchGenre: function (genre) {
		return function(movie) {
			return movie.genre.split(', ').indexOf(genre) != -1;
		};
	},
	orderBy: function (order) {
		switch(order) {
			case 'rating':
				return function(a, b) {
					return b.rating - a.rating;
				};
			case 'released':
				return function(a, b) {
					return (new Date(b.released)) - (new Date(a.released));
				};
		}
		return null;
	},
	distinct: function(value, index, self) {
		return self.indexOf(value) === index;
	}
};
