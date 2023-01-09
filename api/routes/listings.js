const express = require('express');
const router = express.Router();

const listingsController = require('../controllers/listings')

router.post('/', listingsController.createListing);
router.patch('/:id', listingsController.editListing);
router.get('/', listingsController.showAllListings);
router.get('/:id', listingsController.showListings);
router.get('/user/:id', listingsController.showUsersListings);
router.post('/category', listingsController.showCategoryListings);
router.post('/subcategory', listingsController.showSubcategoryListings);
router.post('/location', listingsController.showLocationListings);
router.post('/search', listingsController.searchListings);
router.get('/:id', listingsController.showTrendingListings);
router.get('/:id', listingsController.showSuggestedListings);

module.exports = router;
