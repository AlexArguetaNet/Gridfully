const { Router } = require('express');
const controller = require('../controllers/user');

const router = Router();

router.get('/home/:userId', controller.getHomePage);
router.get('/logout', controller.logout);

module.exports = router;