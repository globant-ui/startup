const express=require('express');
const router = express.Router();

const loginController = require('../controllers/loginCtrl');
const spotifyContorller = require('../controllers/spotifyCtrl');

router.get('/status',spotifyContorller.status);
router.get('/login',loginController.log);
router.get('/callback',loginController.auth);
module.exports=router;
