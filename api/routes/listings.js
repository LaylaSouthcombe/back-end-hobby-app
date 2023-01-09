const express = require('express');
const router = express.Router();

const listingsController = require('../controllers/listings')

router.post('/', listingsController.createListing);
router.patch('/:id', listingsController.editListing);
router.get('/', listingsController.showAllListing);
router.get('/:id', listingsController.showListing);
router.get('/user/:id', listingsController.showUsersListing);
router.post('/category', listingsController.showCategoryListing);
router.post('/location', listingsController.showLocationListing);
router.post('/search', listingsController.searchListing);
router.get('/:id', listingsController.showTrendingListing);
router.get('/:id', listingsController.showSuggestedListing);

module.exports = router;