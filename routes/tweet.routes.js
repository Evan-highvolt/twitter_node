const { createTweet, deleteTweet, displayTweet, updateTweet } = require('../controllers/tweet.controller')
const router = require('express').Router()

router.post('/new', createTweet); // creation d'un tweet
router.get('/delete/:tweetId', deleteTweet); // supprimer un tweet
router.get('/edit/:tweetId', displayTweet); // affiche le tweet pour la modification
router.post('/edit/:tweetId', updateTweet); // Mise a jour du tweet

module.exports = router