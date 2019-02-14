var express = require('express');
var router = express.Router();
var controller = require('../controllers/ProductController');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/:product', controller.create);
router.delete('/:id', controller.delete);
router.put('/product', controller.put);

module.exports = router;
