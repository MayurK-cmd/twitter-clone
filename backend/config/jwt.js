const jwt = require('jsonwebtoken');

const generateToken = (userId) => {                                                   //generates token
    return jwt.sign({ userId }, 'your_jwt_secret',{expiresIn: '1h'});
};

const verifyToken = (token) => {                                                       //verifies token
    return jwt.verify(token, 'your_jwt_token');
};
module.exports = {generateToken, verifyToken};