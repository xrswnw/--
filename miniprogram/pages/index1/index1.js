/*var sub = function (val) {
  if (val.length == 0 || val == undefined) {
    return;
  }
  if (val.length > 17) {
    return val.substring(0, 17) + "...";
  } else {
    return val;
  }
}
module.exports.sub = sub;*/
var app=getApp();
const db = wx.cloud.database()
const releaseCollection = db.collection('release')
const photoCollection = db.collection('photo')
const mssCollection = db.collection('mss')
const buttonCollection = db.collection(' button')
const xiaohuaCollection = db.collection('xiaohua')
Page({

  /**
   * 页面的初始数据
   */
   data: {
     js:"true",
     cs:"white",
     p5:null,
     p6:null,
     cha:"",
    ming: ["求职招聘", "生活服务", "二手租借", "批发采购", "顺风车", "房屋租售", "家居建材", "商务服务",],
    png0: null,
    png1:null, //["cloud://xueran-obmuk.7875-xueran-obmuk-1300913211/1587624805557.png", "cloud://xueran-obmuk.7875-xueran-obmuk-1300913211/1587624816829.png", "cloud://xueran-obmuk.7875-xueran-obmuk-1300913211/1587624823311.png", "cloud://xueran-obmuk.7875-xueran-obmuk-1300913211/1587624829469.png"],
    png2: null,
    png3: null,
    png4: null,
    number1:[],
    zuixin: false,
     img:null,
    number:"null",
    jihe:null,
      activeNames: ['1'],
  mag:[],
    userInfo: null,
    hasUserInfo: false,
    more: null,
  },
 
 
  chakan:function(){
  if(this.data.cha!=1){
this.setData({
  cha: 1
})}
  else{
    this.setData({
      cha: 0
    })
  }
  
  },
  copy:function(e){
  var self = this;
wx.setClipboardData({
  data: e.target.dataset.text, 
  success: function (res) {
 wx.showModal({
    title: '提示',
    content: '复制成功',
  success: function (res) {
     if (res.confirm) {
      console.log('确定')
       } else if (res.cancel) {
        console.log('取消')} }})}});
  },
geren:function(){

  wx.navigateTo({ url: '../index6/index6' });
},

  fabu0:function(){

 if (this.data.p5 != null && this.data.p6 != null) {
   wx.reLaunch({
     url: '../index3/index3',
   })
 } else {
   wx.showToast({
     title: '请先登录', //提示的内容,
     image: '../../image/失败_line.png', //图标,
     duration: 2000, //延迟时间,
     mask: true, //显示透明蒙层，防止触摸穿透,
     success: res => {}
   });
 }
  },
  yulan:function(e){

  var number = e.currentTarget.dataset.text
  wx.previewImage({
    current: '', // 当前显示图片的http链接
    urls: [number] // 需要预览的图片http链接列表
  }) 
 
  },

  xiaohua:function(){

 
  let zuixin= ture
 

  },
  tonghua:function(e){
  
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
   showAllAction: function () {
     this.setData({
       isShowAllContent: !this.data.isShowAllContent
     })
   },
  onLoad: function (options) {
   
    wx.cloud.callFunction({
      name: "down",
    }).then(res => {
     // console.log(res)
    this.setData({
      xx: res.result.data
    })
    })
  db.collection('photo').get().then(res => {

    this.setData({
      png0:res.data[0].tu,
      png1: res.data[1].tu,
      png2: res.data[2].tu,
      png3: res.data[3].tu,
    })

  })
  db.collection('button').get().then(res => {
    var that=this
   that.setData({ js:res.data[0].hidden })
       
  })


    mssCollection.get().then(res => {
       this.setData({
         mag: res.data
       })
       console.log(res)

     })
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
  
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
 wx.cloud.callFunction({
   name: "down",
 }).then(res => {
   
   this.setData({
     xx: res.result.data
   })
   console.log(res.result.data[0])
 })
  db.collection('xiaohua').get().then(res => {
   
   this.setData({xiaohua:res.data})

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
      name: "down",
    }).then(res => {
      // console.log(res)
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
        path: '/pages/index1/index1' , //分享的页面所需要的id
        imageUrl: e.target.dataset.text.image //分享界面的图片
      }

  }
})
/**
<view class="tiao" hover-class="none" hover-stop-propagation="false">
<view wx:for='{{xx}}' wx:if="{{index<60}}" wx:key="key">
<view hidden="{{zuixin}}" class="mp" hover-class="none" hover-stop-propagation="false">
<view class="xx">
	<image class="tou" src='{{item.tou}}'></image>
<view >
<view style="font-size: small;" >{{item.name}}</view>
<view class="biaoshi">{{item.biaoshi}}</view>
</view>
<view class="ic"><v-book number="{{item.num}}" /><view >
<button  data-text='{{item}}' open-type="share">分享</button></view>
<image style="height:80rpx;width: 80rpx;" bindtap="tonghua" data-text="{{item.num}}" class=" icon1"src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3230099242,3567665174&fm=26&gp=0.jpg">
</image></view></view><view selectable="true" class=" info{{cha===1?1:''}}" bindtap="chakan"><text bindlongpress="copy" data-text='{{item.massage}}' selectable="true">{{item.massage}}</text>
</view>
	<view class="xx" data-text='{{item.image}}'  hover-class="none" hover-stop-propagation="false">
				<image class="img"  wx:if="{{item.image[0] != null}}" data-text='{{item.image[0]}}' bindtap="yulan" src="{{item.image[0]}}"></image>
				<image class="img"   wx:if="{{item.image[1] != null}}"data-text='{{item.image[1]}}'  bindtap="yulan" src="{{item.image[1]}}"></image>
				<image class="img"   wx:if="{{item.image[2] != null}}"data-text='{{item.image[2]}}'  bindtap="yulan" src="{{item.image[2]}}"></image>
				<image class="img" wx:if="{{item.image[3] != null}}" data-text='{{item.image[3]}}'  bindtap="yulan" src="{{item.image[3]}}"></image>
				<image class="img"  wx:if="{{item.image[4] != null}}"  data-text='{{item.image[4]}}'  bindtap="yulan" src="{{item.image[4]}}"></image>
				<image class="img"  wx:if="{{item.image[5] != null}}"   data-text='{{item.image[5]}}'  bindtap="yulan" src="{{item.image[5]}}"></image>
				<image class="img"   wx:if="{{item.image[6] != null}}"  data-text='{{item.image[6]}}'  bindtap="yulan" src="{{item.image[6]}}"></image>
				<image class="img"  wx:if="{{item.image[7] != null}}"   data-text='{{item.image[7]}}'  bindtap="yulan" src="{{item.image[7]}}"></image>
				<image class="img" wx:if="{{item.image[8] != null}}"  data-text='{{item.image[8]}}'  bindtap="yulan" src="{{item.image[8]}}"></image></view>
<view class="t">
	<text >{{item.add}} {{item.createTime}} </text></view></view></view></view> */