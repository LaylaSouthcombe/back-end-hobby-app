const express = require('express');
const router = express.Router();

const listingsController = require('../controllers/listings')

router.get('/:id', listingsController.showListing);


module.exports = router;