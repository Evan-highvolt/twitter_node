const router = require('express').Router();
const { ensureAuthenticated } = require('../config/security.config.js');
const {signup, signupForm, uploadImage, displayProfile, userList, followers, unfollowers} = require('../controllers/user.controller.js');

// routes pour inscrire un utilisateur
router.get('/', ensureAuthenticated, userList);
router.get('/unfollow/:userId', unFollowUser);
router.get('/follow/:userId', followUser);
router.get('/signup/form', signupForm);
router.post('/signup', signup)
router.post('/update/image', ensureAuthenticated, uploadImage);
router.get('/:username', ensureAuthenticated, displayProfile);

module.exports = router;