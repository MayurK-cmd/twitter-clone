const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweetControllers');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, tweetController.createTweet);
router.get('/', tweetController.getTweets);

module.exports = router;
