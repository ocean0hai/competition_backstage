const mysql=require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'competition',
  })
  
console.log('数据库正在运行！')
module.exports = db
//查询是否连接成功
// db.query('select * from allusers', (err, results) => {
//   //查询数据失败
//     if (err) return console.log(err.message)
//   //查询数据成功
//     console.log(results)
// })

// 向外共享 db 数据库连接对象