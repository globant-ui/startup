const spotifyCtrl= {};
config= require('../config');

spotifyCtrl.status = (req,res)=>{
    res.json({
        status : 'api is works',
        token : config.token
    })
}

module.exports = spotifyCtrl;