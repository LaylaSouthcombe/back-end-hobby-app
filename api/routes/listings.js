const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users')

router.get('/', usersController.showAllUsers);
router.get('/:id', usersController.findUserById);
router.post('/', usersController.createNewUser);
router.patch('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;