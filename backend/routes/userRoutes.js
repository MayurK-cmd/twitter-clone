const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontrollers');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/follow', authMiddleware, userController.followUser);

module.exports = router;