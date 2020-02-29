const express = require('express');
const path = require('path');
const productConstroller = require('../controllers/products')

const router = express.Router();

router.get('/', productConstroller.getAllProduct);

module.exports = router;