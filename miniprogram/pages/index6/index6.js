const db = wx.cloud.database()
const buttonCollection = db.collection(' button')
const photo = db.collection(' photo')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ren:true,
    wu: false,
     p5:null,
     p6:null,
    people:{
      name: null,
      phone:null

    },
    ceshi:"ture" ,
    add:null,
canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  shouye: function () {

    wx.redirectTo({
      url: '../index1/index1'
    });
    
  },
  chakan:function(e){

wx.previewImage({
  urls: [e.target.dataset.text] //需要预览的图片链接列表,
});

  },
  fabu0:function(){
if (this.data.p5 != null && this.data.p6 != null){
    wx.reLaunch({
      url: '../index3/index3',
    })}
    else{
      wx.showToast({
        title: '请先登录', //提示的内容,
        image: '../../image/失败_line.png', //图标,
        duration: 2000, //延迟时间,
        mask: true, //显示透明蒙层，防止触摸穿透,
        success: res => {}
      });
    }
    },
 onGetUserInfo: function (e) {
   if (!this.data.logged && e.detail.userInfo) {
     this.setData({
       logged: true,
       avatarUrl: e.detail.userInfo.avatarUrl,
       userInfo: e.detail.userInfo,
       ren:false,
        wu:true
        
     })
     this.onReady()
    

   }
 },
 
  onLoad: function (options) {
   
   let that = this
   wx.getSetting({
     success: function (res) {
       if (res.authSetting['scope.userInfo']) {
         // 已经授权，可以直接调用 getUserInfo 获取头像昵称
         wx.getUserInfo({
           success: function (res) {
             
             var avatarUrl = 'userInfo.avatarUrl';
             var nickName = 'userInfo.nickName';
             that.setData({
               p5: res.userInfo.avatarUrl,
               p6: res.userInfo.nickName,
               ren: false,
                wu: true
             })
              


           }
         })
       }
     }
   })

 db.collection('photo').get().then(res => {
   var that = this
   
   that.setData({
     img: res.data
   })

 })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
 let that = this
 db.collection('button').get().then(res => {
  var that=this
 that.setData({ js:res.data[0].hidden })
     
})
 wx.getSetting({
   success: function (res) {
     if (res.authSetting['scope.userInfo']) {
       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
       wx.getUserInfo({
         success: function (res) {

           var avatarUrl = 'userInfo.avatarUrl';
           var nickName = 'userInfo.nickName';
           that.setData({
             p5: res.userInfo.avatarUrl,
             p6: res.userInfo.nickName,
              ren: false,
                wu: true
           })


         }
       })
     }
   }
 })
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
     db.collection('photo').get().then(res => {
       var that = this

       that.setData({
         img: res.data
       })

     })
     

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