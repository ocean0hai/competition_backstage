//导入数据库模块
const db=require('../db/index')
//导入bcryptjs这个包
const bcrypt=require('bcryptjs')
// 导入生成Token的包
const jwt=require('jsonwebtoken')
//导入全局的配置文件
const config=require('../config')


exports.judge=(req,res)=>{
    
    const sqlstr='select * from judgeusers'
    db.query(sqlstr,(err,results)=>{
        // 查询数据失败
        if (err) return console.log(err.message)
        if(results.length !==1) return console.log(err.message);
        console.log(results);
    })
}

