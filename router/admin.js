const express = require('express')
const router = express.Router()

const admin_handler=require('../router_handler/admin')

//manage
router.post('/requestdata',admin_handler.requestdata)//请求数据

router.delete('/delete',admin_handler.delete)//删除

router.post('/add',admin_handler.add)//增加

router.post('/update',admin_handler.update)//更新数据
router.post('search',admin_handler.search)




module.exports = router