const spotifyCtrl = {};
const request = require('request');
const config = require('../config');
const fs = require('fs');



spotifyCtrl.status = (req, res) => {
    res.json({
        status: 'api is works',
        token: config.token,
        artist_id: artistID
    })

}

spotifyCtrl.getArtist = (req, res) => {
    artistName = req.params.q;
    var options = {
        url: 'https://api.spotify.com/v1/search?q=' + artistName + '&type=artist%2Cartist&limit=5&offset=3',
        headers: {
            'Authorization': 'Bearer ' + config.token
        },
        json: true
    };
    request.get(options, function (error, response, body) {
        res.send(body["artists"])
    });
}

spotifyCtrl.getArtistProfile = (req, res) => {
    Id = req.params.id;
    
    var options = {
        url: 'https://api.spotify.com/v1/artists/' + Id,
        headers: {
            'Authorization': 'Bearer ' + config.token
        },
        json: true
    };

    request.get(options, function (error, response, body) {
        res.send(body)
        }
    );
}

spotifyCtrl.getArtistTopTracks = (req, res) => {
    Id = req.params.id;
    var options = {
        url: 'https://api.spotify.com/v1/artists/' + Id + '/top-tracks?country=us',
        headers: {
            'Authorization': 'Bearer ' + config.token
        },
        json: true
    };

    request.get(options, function (error, response, body) {
        res.send(body)
        }
    );
}

spotifyCtrl.getNewReleases = (req, res) => {
    Id = req.params.id;
    var options = {
        url: 'https://api.spotify.com/v1/artists/' + Id + '/top-tracks?country=us',
        headers: {
            'Authorization': 'Bearer ' + config.token
        },
        json: true
    };

    request.get(options, function (error, response, body) {
        res.send(body)
        }
    );
}
module.exports = spotifyCtrl;