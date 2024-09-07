// tests/userApi.test.js
const request = require('supertest');
const app = require('../app'); // Your Express app
const User = require('../models/user');

// Mock the User model
jest.mock('../models/user');

describe('POST /api/users', () => {
  it('should create a user successfully', async () => {
    const userData = { name: 'John Doe', email: 'john@example.com', password: '123456' };

    // Mock the save function to resolve with the user data
    User.prototype.save = jest.fn().mockResolvedValue(userData);

    const response = await request(app)
      .post('/api/users')
      .send(userData)
      .expect(201); // Expect a 201 status code for successful creation

    // Assertions
    expect(response.body).toEqual(userData); // The response body should contain the user data
    expect(User.prototype.save).toHaveBeenCalled(); // Ensure the save method was called
  });

  it('should return 500 if saving the user fails', async () => {
    const userData = { name: 'Jane Doe', email: 'jane@example.com', password: 'abcdef' };

    // Mock the save function to reject with an error
    User.prototype.save = jest.fn().mockRejectedValue(new Error('Save failed'));

    const response = await request(app)
      .post('/api/users')
      .send(userData)
      .expect(500); // Expect a 500 status code for server error

    // Assertions
    expect(response.body).toHaveProperty('error', 'Save failed'); // Response should contain error message
    expect(User.prototype.save).toHaveBeenCalled(); // Ensure the save method was called
  });
});

//This approach can be extended to test other API endpoints (GET, PUT, DELETE) in a similar manner by mocking the necessary Mongoose methods (e.g., find, findById, remove).