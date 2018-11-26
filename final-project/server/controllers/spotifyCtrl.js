const spotifyCtrl = {};
const request = require('request');
const config = require('../config');
const fs = require('fs');



spotifyCtrl.status = (req, res) => {
    res.json({
        status: 'api is works',
        token: config.token,
    })

}

spotifyCtrl.getArtist = (req, res) => {
    artistName = req.params.q;

    var options = {
        url: 'https://api.spotify.com/v1/search?q=' + artistName + '&type=artist%2Cartist&limit=1&offset=1',
        headers: {
            'Authorization': 'Bearer ' + config.token
        },
        json: true

    };


    request.get(options, function (error, response, body) {

        let now = new Date();
        now_string = JSON.stringify(now);
        const file = './recentSearch.json';
        var data = { 

            time : now_string,
            searchParam : artistName
        }
        console.log(data)
        fs.appendFile(file, JSON.stringify(data), (err) => {
                if (err) throw err;
            }),
            console.log('the file has been updated')
            console.log(body);  
    });

}

module.exports = spotifyCtrl;