const User = require('../models/userModel');

const followUser = async (req, res) => {
    const { userIdToFollow } = req.body;
    const userId = req.user.userId; // From auth middleware
  
    try {
      const user = await User.findById(userId);
      const userToFollow = await User.findById(userIdToFollow);
  
      if (!userToFollow) return res.status(400).json({ message: 'User not found' });
  
      if (user.following.includes(userIdToFollow)) {
        return res.status(400).json({ message: 'You are already following this user' });
      }
  
      user.following.push(userIdToFollow);
      userToFollow.followers.push(userId);
  
      await user.save();
      await userToFollow.save();
  
      res.status(200).json({ message: 'Followed successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error following user', error: err });
    }
  };
  
  module.exports = { followUser };