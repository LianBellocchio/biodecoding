const User = require('../models/User');

const signup = async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  res.json({ success: true });
};

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

module.exports = { signup, getUsers };
