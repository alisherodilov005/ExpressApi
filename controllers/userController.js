// controllers/userController.js
const User = require('../models/user');

// Controller function to get all users
async function getAllUsers(req, res) {
  try {
    const users = await User.findAll();
    res.json(users);
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
    const { firstName, lastName } = req.body;
    
    // Validate that firstName is present and not empty
    if (!firstName) {
      return res.status(400).json({ message: "First name is required" });
    }
  
    try {
      const newUser = await User.create({ firstName, lastName });
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
