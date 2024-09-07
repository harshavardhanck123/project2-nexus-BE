// services/externalApiService.js
const axios = require('axios');

const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from GitHub');
  }
};

module.exports = { fetchGitHubUser };
