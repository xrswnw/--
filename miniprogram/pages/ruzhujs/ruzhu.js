const db = wx.cloud.database()
const shop = db.collection('shop')
const photoCollection = db.collection('photo')
Page({

  /**
   * 页面的初始数据
   */
  data: {
     png0: null,
       png1: null, //["cloud://xueran-obmuk.7875-xueran-obmuk-1300913211/1587624805557.png", "cloud://xueran-obmuk.7875-xueran-obmuk-1300913211/1587624816829.png", "cloud://xueran-obmuk.7875-xueran-obmuk-1300913211/1587624823311.png", "cloud://xueran-obmuk.7875-xueran-obmuk-1300913211/1587624829469.png"],
       png2: null,
       png3: null,
       png4: null,
      
       nmae:null,
       phone:null,
       money:null,
  },

  ru:function(){
    wx.navigateTo({ url: '../renfu/index' });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     db.collection('photo').get().then(res => {

       this.setData({
         png0: res.data[0].tu,
         png1: res.data[1].tu,
         png2: res.data[2].tu,
         png3: res.data[3].tu,
       })

     })
wx.cloud.callFunction({
  name: "downs",
}).then(res => {
  console.log(res)
  this.setData({
    shop: res.result.data
  })
})
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