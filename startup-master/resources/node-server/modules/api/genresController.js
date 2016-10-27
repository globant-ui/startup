var moviesService = require('./moviesService');

module.exports = {
	listGenres: function(req, res) {
		res.status(200).send(moviesService.listGenres());
	}
};