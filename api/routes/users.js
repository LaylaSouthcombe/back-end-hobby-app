const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users')

router.get('/', usersController.showAllUsers);
//edit below route to return all info for a user incl listings, so basically what you would see on your home page excl interactions as this can be a diff call
router.get('/:id', usersController.findUserById);
router.post('/', usersController.createNewUser);
router.patch('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);
router.post('/activestate', usersController.changeActiveState);

module.exports = router;