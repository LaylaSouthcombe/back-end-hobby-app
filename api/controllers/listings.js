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
async function showAllListing(req, res) {
    try {
        const listing = await Listing.all
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
// listings show route
async function showListing(req, res) {
    try {
        const listing = await Listing.findById(parseInt(req.params.id))
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
// show users listings
async function showUsersListing(req, res) {
    try {
        const listing = await Listing.showUsersListing(req.params.id)
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
//show listings for a category
async function showCategoryListing(req, res) {
    try {
        const listing = await Listing.showCategoryListings(req.body.category)
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
//show listings for a location
async function showLocationListing(req, res) {
    try {
        const listing = await Listing.showLocationListings(req.body.location)
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
//listing search results
async function searchListing(req, res) {
    try {
        const listing = await Listing.searchListings(req.body.searchterm)
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
//show trending listings
async function showTrendingListing(req, res) {
    try {
        const listing = await Listing.showTrendingListings()
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}
//show suggested listings for a user
async function showSuggestedListing(req, res) {
    try {
        const listing = await Listing.showSuggestedListings(req.params.id)
        res.status(200).json(listing)
    } catch (err) {
        res.status(400).send({err})
    }
}

module.exports = {createListing, editListing, showAllListing, showListing, showUsersListing, showCategoryListing, showLocationListing, searchListing, showTrendingListing, showSuggestedListing};