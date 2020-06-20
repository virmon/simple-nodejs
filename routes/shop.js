const path = require('path');

const express = require('express');

const productController = require('../controllers/products');

// const rootDir = require('../util/path');
// const adminData = require('./admin');

const router  = express.Router();

/*
* Add new middleware function
* the passed function will be executed for every incoming request
* receives 3 arguments: req, res, next
*/
router.get('/', productController.getProducts);

module.exports = router;