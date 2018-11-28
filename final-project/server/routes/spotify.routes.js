const express=require('express');
const router = express.Router();

const loginController = require('../controllers/loginCtrl');
const spotifyContorller = require('../controllers/spotifyCtrl');

router.get('/login',loginController.log);
router.get('/callback',loginController.auth);
router.get('/profile',loginController.getProfile);
router.get('/status',spotifyContorller.status);

router.get('/Artist/:q',spotifyContorller.getArtist);
router.get('/artistProfile/:id',spotifyContorller.getArtistTopTracks);
router.get('/artisTop/:id',spotifyContorller.getArtist);
router.get('/new',spotifyContorller.getNewReleases);

module.exports=router;
