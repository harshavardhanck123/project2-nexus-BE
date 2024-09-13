// tests/userService.test.js
const User = require('../models/user');
const { createUser } = require('../services/user.service');

// Mock the User model
jest.mock('../models/user');

describe('User Service - createUser', () => {
  it('should create a user successfully', async () => {
    const userData = { name: 'John Doe', email: 'john@example.com', password: '123456' };

    // Mock the save function to resolve with a user object
    User.prototype.save = jest.fn().mockResolvedValue(userData);

    const result = await createUser(userData);

    // Assertions
    expect(User.prototype.save).toHaveBeenCalled();
    expect(result).toEqual(userData);
  });

  it('should throw an error if save fails', async () => {
    const userData = { name: 'Jane Doe', email: 'jane@example.com', password: 'abcdef' };

    // Mock the save function to throw an error
    User.prototype.save = jest.fn().mockRejectedValue(new Error('Save failed'));

    await expect(createUser(userData)).rejects.toThrow('Save failed');
  });
});
