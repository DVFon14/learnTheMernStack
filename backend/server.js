const express = require('express')
const dotenv = require('dotenv').config
const port = process.env.PORT || 3000

const app = express()

//app.use('/api/goals', require('./routes/goalRoutes')) //'/api/goals' is for the URL and './routes/goalRoutes' tells our code to look into our VS folders

app.get('/api/goals', (req,res)=>{ //we changed this from app.get('/api/goals' in server.js to router.get('/'. Why?
    res.status(200).json({message:'Get goals'})
})

app.listen(port, ()=> console.log(`Server started at ${port}`))
