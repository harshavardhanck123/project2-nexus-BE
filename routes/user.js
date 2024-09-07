// routes/user.js
const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
