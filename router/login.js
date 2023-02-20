const express = require('express')
const router = express.Router()

const login_handler=require('../router_handler/login.js')



// 3.挂在具体路由
router.post( '/login',login_handler.login)

router.post('/register',login_handler.register)
// 4.向外到处路由对象
module.exports = router
