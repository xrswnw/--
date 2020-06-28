Page({
  data: {
    
    ming: ["求职招聘", "生活服务", "二手租借", "批发采购", "顺风车", "房屋租售", "家居建材", "商务服务", ],
    actionSheetHidden: true,
    actionSheetHidden1: true,
    actionSheetHidden2: true,
    actionSheetHidden3: true,
  },
  jueze: function () {
    this.setData({
      actionSheetHidden: false
    })
  },
  jueze1: function () {
    this.setData({
      actionSheetHidden1: false
    })
  },
  jueze2: function () {
    this.setData({
      actionSheetHidden2: false
    })
  },
  jueze3: function () {
    this.setData({
      actionSheetHidden3: false
    })
  },
  listenerActionSheet: function () {
    this.setData({
      actionSheetHidden: true
    })
  },
  listenerActionSheet1: function () {
    this.setData({
      actionSheetHidden1: true
    })
  },
   listenerActionSheet2: function () {
     this.setData({
       actionSheetHidden2: true
     })
   },
   listenerActionSheet3: function () {
     this.setData({
       actionSheetHidden3: true
     })
   },
 
  click0: function () {
    wx.navigateTo({ url: "../qiuzhi/fabu" });

  },
  click01: function () {
    wx.navigateTo({
      url: "../zhaopin/fabu"
    });

  },
  click1: function () {
    wx.navigateTo({ url: "../shunfeng/che" });

  },
  click11: function () {
    wx.navigateTo({ url: "../shunfeng/ren" });

  },
  click2: function () {
    wx.navigateTo({
      url: "../fangwu/shou"
    });

  },
  click21: function () {
    wx.navigateTo({
      url: "../fangwu/gou"
    });

  },
  click3: function () {
    wx.navigateTo({
      url: "../shenghuo/ren"
    });

  },
  click31: function () {
    wx.navigateTo({
      url: "../shenghuo/wu"
    });

  },
  click32: function () {
    wx.navigateTo({
     url: "../shenghuo/shi"
    });

  },







  bindPickerChange: function (e) {
    console.log(e),
      this.setData({ index: e.detail.value })

  },

  onLoad: function (options) { let that = this
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
  onReady: function () {
   
  },
  onShow: function () {
  
  },
  onHide: function () {
   
  },
  onUnload: function () {
  
  },
  onPullDownRefresh: function () {
 
  },
  onReachBottom: function () {
  
  },
  onShareAppMessage: function () {

  }
})