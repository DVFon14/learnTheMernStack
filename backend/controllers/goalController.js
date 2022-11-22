const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

//get goals 
//route get/api/goals
//private access
const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find({user: req.user.id}) //<without the {} inside find, we'd get all the goals in the database, rather than only the goals of a specified user

    res.status(200).json(goals)
})

//set goals 
//route POST/api/goals
//private access
const setGoal = asyncHandler(async (req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error(`Please add a text field`)
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id,
    })
    res.status(200).json(goal)
})

//update goals 
//route put/api/goals/:id
//private access
const updateGoal = asyncHandler(async (req,res) =>{
    const goal = await Goal.findById(req.params.id) //findById is a method. We get that id by using req.params
  
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
    })

    res.status(200).json(updatedGoal)

})

//delete goals 
//route delete/api/goals/:id
//private access
const deleteGoal = asyncHandler(async (req,res) =>{
    const goal = await Goal.findById(req.params.id) //findById is a method. We get that id by using req.params
  
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal
}