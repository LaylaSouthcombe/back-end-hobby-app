const express = require('express');
const router = express.Router();

const usersController = require('../controllers/interactions')

router.get('/', usersController.showUsersInteractions);
router.post('/', usersController.createOrUpdateInteraction);

module.exports = router;