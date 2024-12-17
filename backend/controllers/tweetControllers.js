const Tweet = require('../models/tweetModel');

const createTweet = async (req, res) => {
    const {content} = req.body;
    const userId=req.user.userId;

    try{
        const newTweet = new Tweet({user: userId, content});
        await newTweet.save();

    } catch(err){
        res.status(500).json({message: 'Error creating tweet', error: err});
    }

};

const getTweets =  async(req, res) => {
    try{
        const tweets = await Tweet.find().populate('user', 'username').sort({createdAt: -1});
        res.status(200).json(tweets);
    } catch(err){
        res.status(500).json({message: 'Error fetching the tweets', error: err});
    }
};

module.exports= { createTweet, getTweets};