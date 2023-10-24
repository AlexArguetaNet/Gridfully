const { Router } = require('express');
const controller = require('../controllers/sheet');

const router = Router();

router.get('/', controller.getSheet);

module.exports = router;