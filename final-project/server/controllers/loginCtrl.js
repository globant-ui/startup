const loginCtrl = {};
const querystring = require('querystring');
const request = require('request');


const config = require('../config');
const client_id = config.client_id;
const client_secret = config.client_secret;
const redirect_uri = config.redirect_uri;


var generateRandomString = function (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

loginCtrl.log = (req, res) => {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  var scope = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
};

loginCtrl.auth = (req, res) => {

  var code = req.query.code || null;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    json: true
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      config.token = access_token;
      console.log('Your Token is', config.token)
      res.redirect('http://localhost:4200/');
    } else {
      res.send({
        error: 'invalid_token'
      });
    }
  });

};

loginCtrl.getProfile = (req, res) => {
  var options = {
    url: 'https://api.spotify.com/v1/me',
    headers: {
      'Authorization': 'Bearer ' + config.token
    },
    json: true
  };
  request.get(options, function (error, response, body) {

    console.log('*····* You are logged in *····* ', '\n',
      'user id: ', body.id, '\n',
      'name : ', body.display_name)
    res.send(body)
  });

}
module.exports = loginCtrl;