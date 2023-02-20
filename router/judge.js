const express = require('express')
const router = express.Router()

const judge_handler=require('../router_handler/judges')

router.post('/judges',judge_handler)

module.exports=router

