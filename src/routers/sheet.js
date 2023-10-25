const { Router } = require('express');
const controller = require('../controllers/sheet');

const router = Router();

router.get('/', controller.getSheet);
router.put('/update', controller.updateSheet);

module.exports = router;