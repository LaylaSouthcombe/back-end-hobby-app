const express = require('express');
const router = express.Router();

const User = require('../models/user')

// users index route
async function showAllUsers(req, res) {
    try {
        const users = await User.all
        res.json({users})
    } catch(err) {
        res.status(500).json({err})
    }
}

// users show route
async function findUserById(req, res) {
    try {
        const user = await User.findById(parseInt(req.params.id))
        res.json(user)
    } catch(err) {
        res.status(404).json({err})
    }
}

// Create user route
async function createNewUser(req, res) {
    try {
        const user = await User.create(req.body)
        res.json(user)
    } catch(err) {
        res.status(404).json({err})
    }
}

// users update route
async function updateUser(req, res) {
    try {
        const updatedUser = await User.update(parseInt(req.params.id), req.body)
        res.json({user: updatedUser})
    } catch(err) {
        res.status(500).json({err})
    }
}

// delete user route
async function deleteUser(req, res) {
    try {
        const user = await User.findById(parseInt(req.params.id))
        await user.destroy()
        res.status(204).json('User deleted')
    } catch(err) {
        res.status(500).json({err})
    }
}


module.exports = {showAllUsers, findUserById, createNewUser, updateUser, deleteUser};