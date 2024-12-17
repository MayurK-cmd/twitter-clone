const jwt = require('../config/jwt');
const User = require('../models/userModel');

const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
  
    if (!token) {
      return res.status(403).json({ message: 'Authorization required' });
    }
  
    try {
      const decoded = jwt.verifyToken(token);
      req.user = { userId: decoded.userId };
      next();
    } catch (err) {
      res.status(401).json({ message: 'Invalid token' });
    }
  };
  
  module.exports = authenticateUser;