//get goals 
//route get/api/goals
//private access
const getGoals = (req,res) =>{
    res.status(200).json({message:'Get goals'})
}

//set goals 
//route POST/api/goals
//private access
const setGoal = (req,res) =>{
    res.status(200).json({message:'Set goals'})
}

//update goals 
//route put/api/goals/:id
//private access
const updateGoal = (req,res) =>{
    res.status(200).json({message:`update goal ${req.params.id}`})
}

//delete goals 
//route delete/api/goals/:id
//private access
const deleteGoal = (req,res) =>{
    res.status(200).json({message:`Delete goal ${req.params.id}`})
}

module.exports = {
    getGoals, 
    setGoal,
    updateGoal,
    deleteGoal
}