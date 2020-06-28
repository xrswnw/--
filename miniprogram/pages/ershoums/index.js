const db = wx.cloud.database()
const ershouCollection = db.collection('ershou')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: {},
    number: "null",
    jihe: {},

    userInfo: {},
    hasUserInfo: false,
    more: [],
  },

  tonghua: function (e) {

    var number = e.target.dataset.text
    wx.makePhoneCall({
      phoneNumber: number
    })
  },
  /*  s: function () {
     
      releaseCollection.get().then(res => {
        var xxx=res.data
    
        this.setData({xx:xxx.reverse()})
       
      })
    },
  
   /**
    * 
    * 生命周期函数--监听页面加载
    */
  onLoad: function (options) {
   
    wx.cloud.callFunction({
      name: "ershou",
    }).then(res => {
      // console.log(res)
      this.setData({
        xx: res.result.data
      })
    })


  },
   yulan: function (e) {
     var number = e.target.dataset.text
     wx.previewImage({
       current: '', // 当前显示图片的http链接
       urls: [number] // 需要预览的图片http链接列表
     })

   },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.cloud.callFunction({
      name: "ershou",
    }).then(res => {
      console.log(res)
      this.setData({
        xx: res.result.data
      })
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
    wx.cloud.callFunction({
      name: "ershou",
    }).then(res => {
     console.log(res)
      this.setData({
        xx: res.result.data
      })
      wx.stopPullDownRefresh()
    })
    /*var Num = this.data.number
           releaseCollection.get().then(res => {
        var xxx=res.data
      
       this.setData({xx: xxx.reverse()})
     

         wx.stopPullDownRefresh()
      })*/
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
     console.log(e.target.dataset.text.massage)
     console.log(e.target.dataset.text.image)
     return {
       title: e.target.dataset.text.massage,
       path: '/pages/qiuzhims/index', //分享的页面所需要的id
       imageUrl: e.target.dataset.text.image //分享界面的图片
     }


  }
})