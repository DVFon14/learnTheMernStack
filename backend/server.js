const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 3000

connectDB()

const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes')) //'/api/goals' is for the URL and './routes/goalRoutes' tells our code to look into our VS folders
app.use(errorHandler)

app.listen(port, ()=> console.log(`Server started at ${port}`))
