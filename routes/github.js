// routes/github.js
const express = require('express');
const { fetchGitHubUser } = require('../services/externalApi.service');
const router = express.Router();

router.get('/github/:username', async (req, res) => {
  try {
    const data = await fetchGitHubUser(req.params.username);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
