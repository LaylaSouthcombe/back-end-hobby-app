const express = require('express');
const router = express.Router();

const Listing = require('../models/listing')

// listings show route
async function showListing(req, res) {
    try {
        const listing = await Listing.findById(parseInt(req.params.id))
        res.json("listing")
    } catch (err) {
        res.status(400).send({err})
    }
}

// listings dogs route
// router.get('/:id/users', async (req, res) => {
//     try {
//         const listing = await Listing.findById(parseInt(req.params.id))
//         console.log(listing)
//         const dogs = await listing.dogs
//         console.log(dogs)
//         res.json(dogs)
//     } catch(err) {
//         res.status(404).send({err}) 
//     }
// })

module.exports = {showListing};