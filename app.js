// 1．导入express
const express = require('express')
// 2．创建web服务器
const app = express()
//配置 cors 跨域
const cors=require('cors')
app.use(cors())

//配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}))

// 一定要在路由之前，应用级别的中间件
app.use((req, res, next) => {
	// status 默认值为 1，表示失败的情况
	// err 的值，可能是一个错误对象，也可能是一个错误的描述字符串
	res.cc = function (err, status = 1) {
	  res.send({
	  status,
	  message: err instanceof Error ? err.message : err,
	  })
	}
	next()
  })

//导入jwt相关的两个包
// 一定要在路由之前配置解析 Token 的中间件
//引入token秘钥，和有效时间
const config = require('./config')
//导入 express-jwt 包

const { expressjwt:expressJwt } = require("express-jwt")
//全局注册
//.unless({用正则指定不需要访问权限的路径}) 

app.use(expressJwt({ secret: config.jwtSecretKey, algorithms: ['HS256'] }).unless({ path:[/^\/api\//] }))




//登录与注册
const useLogin=require('./router/login')
app.use('/api',useLogin)

//管理
const useAdmin=require('./router/admin')
app.use('/admin',useAdmin)

//裁判
// const useJudge=require('./router/judge')
// app.use('/judge',useJudge)

//用户
// const useUsers=require('./router/users')
// app.use('/users',useUsers)


//定义一个错误级别的中间件,防止程序的崩溃
app.use(function (err,req,res,next) {
	console.log('发生了错误:'+err.message);
	res.send('Error!'+err.message)
})


// 3．调用app.listen(端口号，启动成功后的回调函数)，启动服务果
app.listen(80, () => {
	console.log( 'express server running at http://127.0.0.1')
})

