const { Router } = require('express');
const authController = require('../controllers/authcontroller');

const router = Router();

// Routes for signing up and logging in

router.post('/signup', authController.signup_post);

router.post('/login', authController.login_post);

router.get('/logout',  authController.logout_get);

router.post('/renew-token', authController.renew_token_post);


module.exports = router;