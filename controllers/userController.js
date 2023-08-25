const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const db = require("../models/index");
const jwt = require("jsonwebtoken");

// @desc Get user information
// @route GET /api/user
// @access private
const getUserInfo = asyncHandler(async (req, res) => {
  const data = await db.User.findAll();
  res
    .status(200)
    .json({ message: "Get User Information successfully Called", data });
});

// @desc Register a user
// @route POST /api/user/register
// @access public
const userRegister = asyncHandler(async (req, res) => {
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
  const { email, password } = req?.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  let user = await db.User.findOne({
    where: { email },
  });

  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = await  jwt.sign(
      {
        user: {
          username: user.firstName,
          email: user.email,
          mobile: user.mobile,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1m" }
    );
    res.status(200).json({ message: "success", accessToken});
  }else{
    res.status(401)
    throw new Error("Email or password is not valid")
  }
});

module.exports = {
  getUserInfo,
  userRegister,
  userLogin,
};
