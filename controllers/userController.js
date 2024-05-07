// controllers/userController.js
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Controller function to get all users
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.render('users/index', { user:users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Controller function to get a user by ID
async function getUserById(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Controller function to create a new user
async function createUser(req, res) {
    const { name, email , password } = req.body;
    
    const salt = await bcrypt.genSalt(10);
    try {
      const hashedPassword = await bcrypt.hash(password, salt);
    
      const newUser = await User.create({ "name":name, "email":email , "password":hashedPassword });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  

// Controller function to update a user by ID
async function updateUser(req, res) {
  const { id } = req.params;
  const { firstName, lastName } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    user.firstName = firstName;
    user.lastName = lastName;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Controller function to delete a user by ID
async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    await user.destroy();
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
