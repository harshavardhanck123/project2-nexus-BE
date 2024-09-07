// tests/githubApi.test.js
const request = require('supertest');
const app = require('../app'); // Your Express app
const axios = require('axios');

// Mock axios to avoid real API calls
jest.mock('axios');

describe('GET /api/github/:username', () => {
  it('should fetch GitHub user data successfully', async () => {
    const mockGitHubUserData = {
      login: 'octocat',
      id: 583231,
      avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4',
      url: 'https://api.github.com/users/octocat',
    };

    // Mock axios.get to resolve with mockGitHubUserData
    axios.get.mockResolvedValue({ data: mockGitHubUserData });

    const response = await request(app)
      .get('/api/github/octocat')
      .expect(200);

      console.log('Response Body:', response.body);
    // Assertions
    expect(response.body).toEqual(mockGitHubUserData);
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/octocat');
  });

  it('should return 500 if the GitHub API call fails', async () => {
    // Mock axios.get to reject with an error
    axios.get.mockRejectedValue(new Error('GitHub API request failed'));

    const response = await request(app)
      .get('/api/github/octocat')
      .expect(500);

    // Assertions
    expect(response.body).toHaveProperty('error', 'Failed to fetch data from GitHub');
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/octocat');
  });
});
