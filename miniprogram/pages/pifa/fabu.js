

var app = getApp();
var QQMapWX = require('../../qqmap-wx-jssdk');
var qqmapsdk;
const db = wx.cloud.database()
const release = db.collection('release')
const pifa = db.collection('pifa')
Page({

  data: {
    
    p1 :null  ,
    p2 :  null,
    p3 :   null,
    p4 : null,
    p5: null,
    p6: null,
     tempFilePaths: [],
       images_fileID: [],
        nation: '',
          province: '',
          city: '',
          district: '',
          street:"",
canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
    
  ChooseImg: function () {
      let that = this;
      wx.chooseImage({
        count: 9, // 默认最多9张图片，可自行更改
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: res => {
          wx.showToast({
            title: '选择成功，上传',
            icon: 'loading',
            mask: true,
            duration: 1000
          })
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          let tempFilePath = res.tempFilePaths;
          that.setData({
            tempFilePaths: tempFilePath
          })
        }
      })
    },
    //预览图片
    PreviewImg: function (e) {
      let index = e.target.dataset.index;
      let that = this;
      wx.previewImage({
        current: that.data.tempFilePaths[index],
        urls: that.data.tempFilePaths,
      })
    },
    //长按删除图片
    DeleteImg: function (e) {
      var that = this;
      var tempFilePaths = that.data.tempFilePaths;
      var index = e.currentTarget.dataset.index; //获取当前长按图片下标
      wx.showModal({
        title: '提示',
        content: '确定要删除此图片吗？',
        success: function (res) {
          if (res.confirm) {
            //console.log('点击确定了');
            tempFilePaths.splice(index, 1);
          } else if (res.cancel) {
            //console.log('点击取消了');
            return false;
          }
          that.setData({
            tempFilePaths
          });
        }
      })
    }, 
  
  primary: function () {
if (this.data.p1 != null && this.data.p2 != null && this.data.p3 != null && this.data.p5 != null)
{
  wx.cloud.init();
  wx.cloud.callFunction({
      name: 'msg',
      data: {
        text: this.data.p1 //“大熊猫100元一斤，肉质鲜美，好吃不贵”
      }
    }).then((res) => {
        if (res.result.code == "200") {
    db.collection('release').add({
     data: {
         massage:this.data.p1,
         num: this.data.p2,
         add: this.data.p3,
         tou: this.data.p5, 
         name: this.data.p6, 
         image: this.data.p4,
         biaoshi:"批发采购",
         createTime: db.serverDate({
           offset: 8 * 60 * 60 * 1000
         })
         },
      success: function (res) {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
        console.log(res)}
 })
 db.collection('pifa').add({
   data: {
     massage: this.data.p1,
     num: this.data.p2,
     add: this.data.p3,
     tou: this.data.p5,
     name: this.data.p6,
     image: this.data.p4,
     createTime: db.serverDate({
       offset: 8 * 60 * 60 * 1000
     })
   },
   success: function (res) {
     wx.showToast({
       title: '成功',
       icon: 'success',
       duration: 2000
     })
    wx.reLaunch({
    url: '../index1/index1'
    });
    }



    })


    }
    else {
      console.log(res)
      //执行不通过
      wx.showToast({
        title: '包含敏感字哦。',
        icon: 'none',
        duration: 3000
      })
    }
    })
    }
  else {
     
      wx.showToast({
        title: '信息未完整',
       image: '../../image/失败_line.png',
        duration: 2000
      })
    
  }
    },
  input1: function (e) {
    
      this.setData({ p1: e.detail })
  },
input2: function (e) {
 
  this.setData({
    p2: e.detail
  })
}, 
  input4: function (e) {

    this.getAddressDetail();


  },
   



  UploadBtntap: function (e) {
   var that = this;
    
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              // console.log(res);
            //  var avatarUrl = 'userInfo.avatarUrl';
             // var nickName = 'userInfo.nickName';
            that.setData({
                p5: res.userInfo.avatarUrl,
                p6: res.userInfo.nickName,
              })


            }
          })
        }
      }
    })
    var count = 0;
    var h = this.data.tempFilePaths.length;
    if (h != 0) {
      this.setData({
        images_fileID: []
      })
    }
    for (var i = 0; i < h; i++) {
      //上传文件
      var imageUrl = this.data.tempFilePaths[i].split("/");
      var name = imageUrl[imageUrl.length - 1];
      var images_fileID = this.data.images_fileID;
      wx.cloud.uploadFile({
        cloudPath: (new Date()).getTime() + ".png", //自定义云存储路径
        filePath: this.data.tempFilePaths[i],
        success: res => {
          images_fileID.push(res.fileID);
          this.setData({
           p4: images_fileID
          })
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          })
      
          fail: res => {
            count++;
            wx.hideToast();
            wx.showModal({
              title: '错误提示',
              content: '上传图片失败',
              showCancel: false,
              success: function (res) {}
            })
          }
        }
      });
    }
  },
//weizhi: function (e) { var that = this; that.setData({ p3 : e.target.dataset.text})},
  onLoad: function () {
      // 实例化API核心类
      qqmapsdk = new QQMapWX({
        key: 'AWWBZ-D4WWR-YD5WD-WG426-OA255-2IBGM'
      });
    },
    formSubmit(e) {
      var _this = this;
      qqmapsdk.reverseGeocoder({
    
        location: e.detail.value.reverseGeo || '', //获取表单传入的位置坐标,不填默认当前位置,示例为string格式
        success: function (res) { //成功后的回调
          console.log(res);
          var res = res.result;
          var mks = [];
          
          mks.push({ 
            title: res.address,
            id: 0,
            latitude: res.location.lat,
            longitude: res.location.lng,
            iconPath: './resources/placeholder.png', //图标路径
            width: 20,
            height: 20,
            callout: { //在markers上展示地址名称，根据需求是否需要
              content: res.address,
              color: '#000',
              display: 'ALWAYS'
            }
          });
          _this.setData({ //设置markers属性和地图位置poi，将结果在地图展示
            markers: mks,
            poi: {
              latitude: res.location.lat,
              longitude: res.location.lng}
  })
  _this.setData({p3:mks[0].title})
      
        },
        fail: function (error) {
          console.error(error);
        },
        complete: function (res) {
          console.log(res);
        }
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