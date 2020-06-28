// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: 'xueran-obmuk',
traceUser: true,})
const db = cloud.database()// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('shenghuo').orderBy('createTime','desc').where({
      biaoshi:"失物招领"
    }).get(({
      success(res){
        return res
      },
      fail(err){
        return err
      }
      
      
      
        })
      
      
    )
  } catch (e) {
    console.error(e);
  }
  
}