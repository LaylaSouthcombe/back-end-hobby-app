const Listing = require('../models/listing')

//create new listing
async function createListing(req, res) {
    try {
        const listing = await Listing.createNewListing(req.headers.userid, req.body)
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
//edit listing
async function editListing(req, res) {
    try {
        console.log(req.params)
        const listing = await Listing.editListing(req.headers.userid, req.params.id, req.body)
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
// all listings show route
async function showAllListings(req, res) {
    try {
        const listing = await Listing.all
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
// listings show route
async function showListings(req, res) {
    try {
        const listing = await Listing.findById(parseInt(req.params.id))
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
// show users listings
async function showUsersListings(req, res) {
    try {
        const listing = await Listing.showUsersListing(req.params.id)
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
//show listings for a category
async function showCategoryListings(req, res) {
    try {
        const listing = await Listing.showCategoryListings(req.body.category_id)
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
//show listings for a subcategory
async function showSubcategoryListings(req, res) {
    try {
        const listing = await Listing.showSubcategoryListings(req.body.subcategory_id)
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
//show listings for a location
async function showLocationListings(req, res) {
    try {
        const listing = await Listing.showLocationListings(req.body.location)
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
//listing search results
async function searchListings(req, res) {
    try {
        const listing = await Listing.searchListings(req.body.searchterm)
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
//show trending listings
async function showTrendingListings(req, res) {
    try {
        const listing = await Listing.showTrendingListings()
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
//show suggested listings for a user
async function showSuggestedListings(req, res) {
    try {
        const listing = await Listing.showSuggestedListings(req.params.id)
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}

module.exports = {createListing, editListing, showAllListings, showListings, showUsersListings, showCategoryListings, showSubcategoryListings,showLocationListings, searchListings, showTrendingListings, showSuggestedListings};