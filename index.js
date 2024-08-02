const express = require("express")
const morgan = require('morgan')
const cors = require('cors')
const cookieParser=require('cookie-parser')
const mongoose = require('mongoose')
const userRouter=require('./routes/userRoutes')
const PORT=3000
const app = express()
const config = require('./utils/config')

app.use(express.json())

app.use(morgan('dev'))
app.use(cookieParser())

const corsOptions={
    origin: 'http://localhost:5173', // Replace with your frontend's URL
  credentials: true, // This allows the server to accept cookies from the frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
}

app.use(cors(corsOptions));

app.use('/users',userRouter)

app.get('/', (req, res) => {
    res.send("Hello")
});

app.listen(PORT,()=>{
    console.log(`Server is connected and running on http://127.0.0.1:${PORT}`)
})

mongoose.connect(config.URI)
    .then(()=>{
        console.log("connected to MongoDB")
    })
    .catch((e) => {
        console.log("Error connecting to MongoDB", e.message);
      })