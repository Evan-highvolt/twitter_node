const router = require('express').Router();
const {signup, signupForm} = require('../controllers/user.conrollers');
// routes pour inscrire un utilisateur
router.get('/signup/form', signupForm);
router.post('/signup', signup)

module.exports = router;