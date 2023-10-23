const { Router } = require('express');
const controller = require('../controllers/index');

const router = Router();

router.get('/', controller.getLandingPage);
router.post('/login', controller.login);
router.post('/create-account', controller.createAccount);

module.exports = router;