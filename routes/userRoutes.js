const express = require("express")
const router = express.Router()
const {
    getUserInfo,
    userRegister,
    userLogin
} = require("../controllers/userController")


router.get('/', getUserInfo)
router.post('/register', userRegister)
router.post('/login', userLogin)

module.export = router