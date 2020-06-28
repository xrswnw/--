// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: 'xueran-obmuk',
traceUser: true,})

// 云函数入口函数
exports.main = async (event, context) => {
 return  cloud.database().collection('release').get({
success(res){
  return res
},
fail(err){
  return err
}



  })
}