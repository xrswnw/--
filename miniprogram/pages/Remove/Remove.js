const db = wx.cloud.database()
const photo = db.collection('photo')
Page({

  /**
   * 页面的初始数据
   */
    data: {
      msg:"",
      fileList: [
        
      ]
    }

  ,
  updown: function (name) {
    var that = this
    //让用户选择或拍摄一张照片
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        //选择完成会先返回一个临时地址保存备用
        const tempFilePaths = res.tempFilePaths
        //将照片上传至云端需要刚才存储的临时地址
        wx.cloud.uploadFile({
          cloudPath: (new Date()).getTime() + ".png",
          filePath: tempFilePaths[0],
          success(res) {
            //上传成功后会返回永久地址
            console.log(res.fileID)
          }
        })
      }
    })
  },
   
  up:function(){

    db.collection('ceshi').add({
      data:{
      'description': 'eat an apple',
      'createTime': db.serverDate()}
    
    }).then(res=>{
      console.log(res)
    })

  },
  uploadToCloud() {
    wx.cloud.init();
    const { fileList } = this.data;
    if (!fileList.length) {
      wx.showToast({ title: '请选择图片', icon: 'none' });
    } else {
      const uploadTasks = fileList.map((file, index) => this.uploadFilePromise(`my-photo${index}.png`, file));
      Promise.all(uploadTasks)
        .then(data => {
          wx.showToast({ title: '上传成功', icon: 'none' });
          const newFileList = data.map(item => { url: item.fileID });
          this.setData({ cloudPath: data, fileList: newFileList });
        })
        .catch(e => {
          wx.showToast({ title: '上传失败', icon: 'none' });
          console.log(e);
        });
    }
  },

uploadFilePromise(fileName, chooseResult) {
    return wx.cloud.uploadFile({
      cloudPath: fileName,
      filePath: chooseResult.path
    });
  },
down:function(){
  wx.cloud.callFunction({
   name:"pifa",
}).then(res=>{
    console.log(res)
  })




}
,  delete:function(){
wx.cloud.callFunction({
 name:"remove",

}).then(res=>{
  console.log(res)
})

  },
  ceshi:function(e){


this.setData({
  msg: e.detail.value
})
console.log(this.data.msg)

  },
msg:   function () {
  var that = this;
  wx.cloud.init();
  wx.cloud.callFunction({
    name: 'msg',
    data: {
      text: "野生大熊猫，野生穿山甲好吃"
    }
  }).then((res) => {
    if (res.result.code == "200") {
      console.log(res)

    } else {
      console.log(res)
      //执行不通过
      wx.showToast({
        title: '包含敏感字哦。',
        icon: 'none',
        duration: 3000
      })
    }
  })
},

 /* msg:function(){

wx.cloud.callFunction({
  name: "msg",
  data: {
    content:
  }
}).then(
  msgRes => {
    console.log(msgRes)
   console.log(1111111) //内容正常
  }
).catch(error => {
  wx.showToast({
    title: '文字含有违法违规内容',
    icon: 'none',
    duration: 1500
  })
})

  },*/
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})