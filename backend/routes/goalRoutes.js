const express = require('express') //common js module syntax
const router = express.Router()
const { getGoals, setGoal,updateGoal,deleteGoal } = require('../controllers/goalController')

router.route('/').get(getGoals).post(setGoal) //<--this gets rid of the ned for lines 12 and 19. They have the same routes, so we can chain these
router.route('/:id').put(updateGoal).delete(deleteGoal)

// router.get('/', (req,res)=>{ //we changed this from app.get('/api/goals' in server.js to router.get('/'. Why?
//     res.status(200).json({message:'Get goals'})
// })
//function above is replaced with: 
//router.get('/',getGoals)


// router.post('/', (req,res)=>{ 
//     res.status(200).json({message:'Set goals'})
// })
//function above is replaced with: 
//router.post('/',setGoal)


// router.put('/:id', (req,res)=>{ 
//     res.status(200).json({message:`Update goal ${req.params.id}`})
// })
//function above is replaced with: 
//router.put('/:id',updateGoal)


// router.delete('/:id', (req,res)=>{ 
//     res.status(200).json({message:`Delete goal ${req.params.id}`})
// })
//function above is replaced with: 
// router.delete('/:id',deleteGoal)


module.exports = router