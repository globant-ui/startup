var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var api = require('./modules/api');
var colors = require('colors');
var port = 8000;
var delay = 1000; // Explicit delay time in miliseconds for simulating real server time response.

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.type('json');
	setTimeout(next, delay);
});

app.use('/api', api);

app.use(function(err, req, res, next) {
	res.status(500).send({ error: '500: Internal Server Error' });
	console.log(('Error: ' + err).red);
});

app.use(function(req, res) {
	res.status(404).send({ error: '404: Not found' });
	console.log(('Not found: ' + req.method + ' - ' + req.url).yellow);
});

var server = app.listen(port, function() {
	console.log(("App listening on http://localhost:" + port + '/').green);
});

module.exports.closeServer = function() {
	server.close();
	console.log('Server closed'.grey);
};