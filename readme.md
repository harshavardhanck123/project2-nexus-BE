# Masala Delight Backend

This is the backend server for the Masala Delight application, which handles user authentication, restaurant data management, and other server-side functionalities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/masala-delight-backend.git
    cd masala-delight-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following variables:
    ```plaintext
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Usage

To use the backend server, you need to have Node.js and MongoDB installed on your machine. Start the server by running `npm start` and it will listen on the port specified in your `.env` file (default is `3000`).

## API Endpoints

### User Routes

- **Register a user:**
    ```http
    POST /users/register
    ```
    - Request body:
        ```json
        {
          "name": "John Doe",
          "email": "johndoe@example.com",
          "password": "password123"
        }
        ```

- **Login a user:**
    ```http
    POST /users/login
    ```
    - Request body:
        ```json
        {
          "email": "johndoe@example.com",
          "password": "password123"
        }
        ```

- **Logout a user:**
    ```http
    POST /users/logout
    ```

- **Get user details:**
    ```http
    GET /users/:id
    ```

## Environment Variables

The application uses the following environment variables:

- `PORT`: The port on which the server will run (default is `3000`).
- `MONGODB_URI`: The URI of the MongoDB database.
- `JWT_SECRET`: The secret key for JWT authentication.

## Dependencies

- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Mongoose](https://mongoosejs.com/): Elegant MongoDB object modeling for Node.js.
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken): JSON Web Token implementation (symmetric and asymmetric).
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js): Optimized bcrypt in plain JavaScript.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.