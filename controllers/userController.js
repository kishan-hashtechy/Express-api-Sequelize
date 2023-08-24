const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const db = require("../models/index");
const jwt = require("jsonwebtoken");

// @desc Get user information
// @route GET /api/user
// @access private
const getUserInfo = asyncHandler(async (req, res) => {
    const data = db.User.findAll()
  res.status(200);
  res.json({ message: "Get User Information successfully Called", data});
});

// @desc Register a user
// @route POST /api/user/register
// @access public
const userRegister = asyncHandler(async (req, res) => {
  console.log(req?.body);
  const { firstName, lastName, email, password, mobile } = req?.body;
  if (!firstName || !lastName || !email || !password || !mobile) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await db.User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    mobile,
  });
  res.status(200).json({ message: "User has been created successfully", user });
});

// @desc Register a user
// @route POST /api/user/login
// @access public
const userLogin = asyncHandler(async (req, res) => {
  res.status(200);
  res.json({ message: "Get User Login successfully Called" });
});

module.exports = {
  getUserInfo,
  userRegister,
  userLogin,
};
