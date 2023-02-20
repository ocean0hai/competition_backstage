const express = require('express')
const router = express.Router()

const user_handler=require('../router_handler/users')

router.post('/users',user_handler)

module.exports=router

