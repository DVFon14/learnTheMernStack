const express = require('express') //common js module syntax
const router = express.Router()

router.get('/', (req,res)=>{ //we changed this from app.get('/api/goals' in server.js to router.get('/'. Why?
    res.status(200).json({message:'Get goals'})
})

router.post('/', (req,res)=>{ 
    res.status(200).json({message:'Set goals'})
})

router.put('/:id', (req,res)=>{ 
    res.status(200).json({message:`Update goal ${req.params.id}`})
})

router.delete('/:id', (req,res)=>{ 
    res.status(200).json({message:`Delete goal ${req.params.id}`})
})


module.exports = router