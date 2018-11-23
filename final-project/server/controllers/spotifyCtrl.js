const spotifyCtrl = {};
const querystring = require('querystring');
const request = require('request');
const config = require('../config');
//const fs = require('fs');



spotifyCtrl.status = (req, res) => {
    res.json({
        status: 'api is works',
        token: config.token,
    })
}

spotifyCtrl.getArtist = (req, res) => {
    var options = {
        url: 'https://api.spotify.com/v1/search?q=Muse&type=track%2Cartist&market=US&limit=10&offset=5',
        headers: {'Authorization': 'Bearer ' + config.token},
        json: true
    };  
    request.get(options, function (error, response, body) {
        console.log(body)
    });
    res.redirect('http://localhost:3000/status');
}

module.exports = spotifyCtrl;