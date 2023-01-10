const Interaction = require('../models/interaction')

// interactions route
async function showUsersInteractions(req, res) {
    try {
        const interactions = await Interaction.showUsersInteractions(req.headers.userid)
        res.status(200).json(interactions)
    } catch(err) {
        res.status(500).json({err})
    }
}

// interactions create or update
async function createOrUpdateInteraction(req, res) {
    try {
        const interaction = await Interaction.createOrUpdateInteraction(req.headers.userid, req.body)
        res.status(201).json(interaction)
    } catch(err) {
        res.status(404).json({err})
    }
}

module.exports = {showUsersInteractions, createOrUpdateInteraction};