var express = require('express');
var path = require('path');
var _ = require('lodash');

var port = 8080 || process.env.PORT;
var server = express();

server.use(express.static(__dirname + '/dist'))

server.listen(port, function () {
    server.use('/', function(request, response){
        response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
});
