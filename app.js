// app.js
const express = require('express');
const mongoose = require('mongoose');
const userRouter= require('./routes/user')
const githubRouter = require('./routes/github');
const routes=require('./routes/userRoutes')
const app = express();
app.use(express.json());


app.use('/api', userRouter);
app.use('/api', githubRouter);
app.use('/api',routes)

// Prevent database connection during test runs
if (process.env.NODE_ENV !== 'test') {
  mongoose
    .connect('mongodb://localhost:27017/authTest')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));
}

module.exports = app;
