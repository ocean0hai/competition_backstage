//导入数据库模块
const db=require('../db/index')
//导入bcryptjs这个包
const bcrypt=require('bcryptjs')
// 导入生成Token的包
const jwt=require('jsonwebtoken')
//导入全局的配置文件
const config=require('../config')

exports.requestdata=(req,res)=>{
  const {talbename,competition} =req.body
  let sqlstr=`select * from ${talbename}`
  if(!type) sqlstr+=`where competition=${competition}`
  let hhh
  db.query(sqlstr, (err, results) => {
    // 查询数据失败
    if (err) return console.log(err.message)
    //查询数据成功
    res.send({
      results
    })
  })
}

exports.delete=(req,res)=>{
  db.query('select * from allusers', (err, results) => {
    // 查询数据失败
    if (err) return console.log(err.message)
    //查询数据成功
    res.send({
      results
    })
  })
}

exports.update=(req,res)=>{
  db.query('select * from allusers', (err, results) => {
     // 查询数据失败
     if (err) return console.log(err.message)
     //查询数据成功
     res.send({
       results
     })
  })
}
exports.add=(req,res)=>{
  db.query('select * from allusers', (err, results) => {
     // 查询数据失败
     if (err) return console.log(err.message)
     //查询数据成功
     res.send({
       results
     })
   })  
}

exports.search=(req,res)=>{
  db.query('select * from allusers', (err, results) => {
     // 查询数据失败
     if (err) return console.log(err.message)
     //查询数据成功
     res.send({
       results
     })
   })  
}