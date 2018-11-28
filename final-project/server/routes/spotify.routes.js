const express=require('express');
const router = express.Router();
const loginController = require('../controllers/loginCtrl');
const spotifyContorller = require('../controllers/spotifyCtrl');



router.get('/login',loginController.log);
router.get('/callback',loginController.auth);
router.get('/profile',loginController.getProfile);
router.get('/new',spotifyContorller.getNewReleases);
router.get('/Artist/:q',spotifyContorller.getArtist);

// save and send SearchHistory
router.post('/saveHistory',spotifyContorller.save);
router.get('/searchHistory/:artistName',spotifyContorller.sendSearchs);


module.exports=router;
