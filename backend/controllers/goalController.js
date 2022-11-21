const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

//get goals 
//route get/api/goals
//private access
const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

//set goals 
//route POST/api/goals
//private access
const setGoal = asyncHandler(async (req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error(`Please add a txt field`)
    }
    res.status(200).json({message:'Set goals'})
})

//update goals 
//route put/api/goals/:id
//private access
const updateGoal = asyncHandler(async (req,res) =>{
    res.status(200).json({message:`update goal ${req.params.id}`})
})

//delete goals 
//route delete/api/goals/:id
//private access
const deleteGoal = asyncHandler(async (req,res) =>{
    res.status(200).json({message:`Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal
}