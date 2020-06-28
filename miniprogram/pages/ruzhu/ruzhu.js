const db = wx.cloud.database()
const shop = db.collection('shop')
Page({

  /**
   * 页面的初始数据
   */
  data: {


    im: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2449171074,3989439360&fm=26&gp=0.jpg",
    img:"",
    p1:"",
    p2:"",
     p3: "",
       p4: "",
        p5: "",
        
        money: 10000,
          
  },

  onClickButton:function(){
      db.collection('shop').add({
        data: {
       name:this.data.p1,
       class:this.data.p2,
       logo:this.data.img,
       name0:this.data.p3,
       num:this.data.p4,
       add:this.data.p5,
       time:this.data.money,
          createTime: db.serverDate(),
        },
        success: function (res) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
          console.log(res)
        }
      })
       
  },
mon0:function(){


this.setData({money:10000})
},
 mon1: function () {


  this.setData({
    money: 27000
  })
},
 mon2: function () {


  this.setData({
    money: 52000
  })
},
onChange0:function(e){
var p = e.detail
this.setData({p1:p})
  
},
onChange1: function (e) {
var p = e.detail
this.setData({
  p2: p
})
}, onChange2: function (e) {
  var p = e.detail
  this.setData({
    p3: p
  })
},
onChange3: function (e) {
  var p = e.detail
  this.setData({
    p4: p
  })
},
onChange4: function (e) {
  var p = e.detail
  this.setData({
    p5: p
  })
},


  xuanze:function(){

wx.chooseImage({
  count: '1', //最多可以选择的图片张数,
  success: res => {
 this.setData({
   im: res.tempFiles[0].path, img: res.tempFiles[0].path
 })
    console.log(res.tempFiles[0].path)

  }, //返回图片的本地文件路径列表 tempFilePaths,
  fail: () => {},
  complete: () => {}
});



  },
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