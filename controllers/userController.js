const asyncHandler = require("express-async-handler")

// @desc Get user information
// @route GET /api/user
// @access private
const getUserInfo = asyncHandler(async (req, res) => {
    res.status(200)
    res.json("Get User Information successfully Called")
})

// @desc Register a user
// @route POST /api/user/register
// @access public
const userRegister = asyncHandler(async (req, res) => {
    res.status(200)
    res.json("Get User Register successfully Called")
})

// @desc Register a user
// @route POST /api/user/login 
// @access public
const userLogin = asyncHandler(async (req, res) => {
    res.status(200)
    res.json("Get User Login successfully Called")
})


module.exports = {
    getUserInfo,
    userRegister,
    userLogin
}