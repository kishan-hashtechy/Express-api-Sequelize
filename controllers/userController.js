const asyncHandler = require("express-async-handler")
const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

// @desc Get user information
// @route GET /api/user
// @access private
const getUserInfo = asyncHandler(async (req, res) => {
    res.status(200)
    res.json({ message: "Get User Information successfully Called" })
})

// @desc Register a user
// @route POST /api/user/register
// @access public
const userRegister = asyncHandler(async (req, res) => {
    console.log(req?.body)
    const { firstname, lastname, email, password, mobile, city } = req?.body
    if (!firstname || !lastname || !email || !password || !mobile || !city) {
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const userAvailable = await User.findAll({
        where: {
            email: email
        }
    })
    if (userAvailable) {
        res.status(409)
        throw new Error("Duplicate record found")
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
        firstname,
        lastname,
        email,
        password,
        mobile,
        city
    })

    console.log(user)
    // res.status(200)
    // res.json({messsage: "Get User Register successfully Called"})
})

// @desc Register a user
// @route POST /api/user/login 
// @access public
const userLogin = asyncHandler(async (req, res) => {
    res.status(200)
    res.json({ message: "Get User Login successfully Called" })
})


module.exports = {
    getUserInfo,
    userRegister,
    userLogin
}