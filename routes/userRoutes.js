// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for getting all users
router.get('/users', userController.getAllUsers);

// Route for getting a single user by ID
router.get('/users/:id', userController.getUserById);

// Route for creating a new user
router.post('/users', userController.createUser);

// Route for updating a user by ID
router.put('/users/:id', userController.updateUser);

// Route for deleting a user by ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
