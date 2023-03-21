const { createTweet, deleteTweet, editTweet, updateTweet, showTweet, tweetLike } = require('../controllers/tweet.controller')
const router = require('express').Router()

router.post('/new', createTweet); // creation d'un tweet
router.get('/like/:tweetId', tweetLike)
router.get('/delete/:tweetId', deleteTweet); // supprimer un tweet
router.get('/edit/:tweetId', editTweet); // affiche le tweet pour la modification
router.post('/edit/:tweetId', updateTweet); // Mise a jour du tweet
router.get('/:tweetId', showTweet);

module.exports = router