const express=require('express');
const router = express.Router();

const loginController = require('../controllers/loginCtrl');
const spotifyContorller = require('../controllers/spotifyCtrl');

router.get('/login',loginController.log);
router.get('/callback',loginController.auth);
router.get('/status',spotifyContorller.status);
router.get('/artist/:q',spotifyContorller.getArtist);
module.exports=router;
