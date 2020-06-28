// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: 'xueran-obmuk',
traceUser: true,})
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('release').where({
    name:'汐画'
  }).remove()
}