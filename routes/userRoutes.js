const express = require("express")
const router = express.Router()
const {
    getUserInfo,
    userRegister,
    userLogin
} = require("../controllers/userController")
const validateToken = require("../middleware/validateTokenHandler")


router.get('/', validateToken,getUserInfo)
router.post('/register', userRegister)
router.post('/login', userLogin)

module.exports = router