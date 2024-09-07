
const User = require('../models/user');

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

module.exports = { createUser };
