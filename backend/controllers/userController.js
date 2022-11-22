const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//register new user
//POST /api/users
//access is public
const registerUser = asyncHandler(async(req, res) => {
    const { name, email, password } =req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }
    
    res.json({message: 'Register User'})
})

//authenticate a user
//POST /api/users/login
//access is public
const loginUser = asyncHandler(async(req, res) => {
    res.json({message: 'Login User'})
})

//get user data
//GET /api/users
//access is public
const getMe = asyncHandler(async(req, res) => {
    res.json({message: 'User data display'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}