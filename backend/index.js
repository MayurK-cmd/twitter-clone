const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const tweetRoutes = require('./routes/tweetRoutes');
const userRoutes = require('./routes/userRoutes');
require('./config/db');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tweet', tweetRoutes);
app.use('/api/user', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
