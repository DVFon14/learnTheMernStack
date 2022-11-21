const express = require('express') //common js module syntax
const router = express.Router()

router.get('/', (req,res)=>{ //we changed this from app.get('/api/goals' in server.js to router.get('/'. Why?
    res.status(200).json({message:'Get goals'})
})

module.exports = router