const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const { request } = require('http')

const protect = asyncHandler(async(req, res, next)=>{
    let token 

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //Get token from header
            token = req.headers.authorization.split(' ')[1] //split turns into array

            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get user from the token id
            req.user = await User.findById(decoded.id).select('-password') //wont include password
            next()

        } catch (error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = {protect}