const asyncHandler = require('express-async-handler')

//get goals 
//route get/api/goals
//private access
const getGoals = asyncHandler((req,res) =>{
    res.status(200).json({message:'Get goals'})
})

//set goals 
//route POST/api/goals
//private access
const setGoal = asyncHandler((req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error(`Please add a txt field`)
    }
    res.status(200).json({message:'Set goals'})
})

//update goals 
//route put/api/goals/:id
//private access
const updateGoal = asyncHandler((req,res) =>{
    res.status(200).json({message:`update goal ${req.params.id}`})
})

//delete goals 
//route delete/api/goals/:id
//private access
const deleteGoal = asyncHandler((req,res) =>{
    res.status(200).json({message:`Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal
}