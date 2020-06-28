const db = wx.cloud.database()
const _ = db.command
const renfu = db.collection('renfu')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageURL: "cloud://xueran-obmuk.7875-xueran-obmuk-1300913211/1587624805557.png",
     checked0: false,
      checked1: false,
       checked2: false,
        checked3: false,
          checked4: false,
          checked5: false,
           checked6: false,
             checked7: false,
             checked8: false,
           logo:"",
       m0: "",
    m1: "",
    m2: "",
    m3: "",
    m4: "",
    m5: "",
    m6: "",
    m7: "",
    m8: "",
             p5: false,
               p6: false,
       hd: true,
        hi: true,
        hiddenmodalput1: true, hiddenmodalput2: true, hiddenmodalput3: true, hiddenmodalput4: true,
          hiddenmodalput5: true, hiddenmodalput6: true, hiddenmodalput7: true, hiddenmodalput8: true,
          hiddenmodalput9: true,
          ms: ["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2449171074,3989439360&fm=26&gp=0.jpg"],
          img: null,
          Img: null,
          name: "",
          money: "",
          xinxi: "",
 tempFilePaths: [],
   images_fileID: [],
   


  },
  lunbo:function(){
 if (this.data.p6 == "汐画") {
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
    
       let tempFilePath = res.tempFilePaths;
       that.setData({
         tempFilePaths: tempFilePath
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
       console.log(images_fileID)
       db.collection('renfu').doc('37e26adb5eb67fbd0062db1d27d5ec99').update({
         // data 传入需要局部更新的数据
         data: {
           m1: images_fileID[0],
           m2: images_fileID[1],
           m3: images_fileID[2],
           m4: images_fileID[3],
         },

         success: function (res) {
           this.onPullDownRefresh()

         }
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



     }
   })

  }
  },
  chakan1:function(){
    wx.previewImage({
      urls: ["cloud://xueran-obmuk.7875-xueran-obmuk-1300913211/1587624805557.png"] 
    });
  },
     modalinput1: function () {
 if (this.data.p6 == "汐画") {
         this.setData({

           hiddenmodalput1: !this.data.hiddenmodalput1

         })}

       },
       modalinput2: function () {
 if (this.data.p6 == "汐画") {
         this.setData({

           hiddenmodalput2: !this.data.hiddenmodalput2

         })}

       }, modalinput3: function () {
 if (this.data.p6 == "汐画") {
         this.setData({

           hiddenmodalput3: !this.data.hiddenmodalput3

         })}

       }, modalinput4: function () {
 if (this.data.p6 == "汐画") {
         this.setData({

           hiddenmodalput4: !this.data.hiddenmodalput4

         })}

       },
       modalinput5: function () {

        if (this.data.p6 == "汐画") {
          this.setData({

           hiddenmodalput5: !this.data.hiddenmodalput5

         })}

       },
       modalinput6: function () {

         if (this.data.p6 == "汐画") {
           this.setData({

           hiddenmodalput6: !this.data.hiddenmodalput6

         })}

       }, modalinput7: function () {

        if (this.data.p6 == "汐画") {
          this.setData({

           hiddenmodalput7: !this.data.hiddenmodalput7

         })}

       },
       modalinput8: function () {

       if (this.data.p6 == "汐画") {
         this.setData({

           hiddenmodalput8: !this.data.hiddenmodalput8

         })}

       }, modalinput9: function () {

          if (this.data.p6 == "汐画") {
            this.setData({

           hiddenmodalput9: !this.data.hiddenmodalput9

         })}

       },
       input10: function (e) {
         this.setData({
           name: e.detail.value
         })


       },
       input11: function (e) {
         this.setData({
           money: e.detail.value
         })
       },
       input12: function (e) {
         this.setData({
           xinxi: e.detail.value
         })
       },
       input20: function (e) {
         this.setData({
           name: e.detail.value
         })


       },
       input21: function (e) {
         this.setData({
           money: e.detail.value
         })

       },
       input22: function (e) {
         this.setData({
           xinxi: e.detail.value
         })

       },
       input30: function (e) {
         this.setData({
           name: e.detail.value
         })


       },
       input31: function (e) {
         this.setData({
           money: e.detail.value
         })

       },
       input32: function (e) {
         this.setData({
           xinxi: e.detail.value
         })

       }, input40: function (e) {
         this.setData({
           name: e.detail.value
         })


       },
       input41: function (e) {
         this.setData({
           money: e.detail.value
         })

       },
       input42: function (e) {
         this.setData({
           xinxi: e.detail.value
         })

       },
       input50: function (e) {
         this.setData({
           name: e.detail.value
         })


       },
       input51: function (e) {
         this.setData({
           money: e.detail.value
         })

       },
       input52: function (e) {
         this.setData({
           xinxi: e.detail.value
         })

       },
       input60: function (e) {
         this.setData({
           name: e.detail.value
         })


       },
       input61: function (e) {
         this.setData({
           money: e.detail.value
         })

       },
       input62: function (e) {
         this.setData({
           xinxi: e.detail.value
         })

       }, input70: function (e) {
         this.setData({
           name: e.detail.value
         })


       },
       input71: function (e) {
         this.setData({
           money: e.detail.value
         })

       },
       input72: function (e) {
         this.setData({
           xinxi: e.detail.value
         })

       }, input80: function (e) {
         this.setData({
           name: e.detail.value
         })


       },
       input81: function (e) {
         this.setData({
           money: e.detail.value
         })

       },
       input82: function (e) {
         this.setData({
           xinxi: e.detail.value
         })

       }, input90: function (e) {
         this.setData({
           name: e.detail.value
         })


       },
       input91: function (e) {
         this.setData({
           money: e.detail.value
         })

       },
       input92: function (e) {
         this.setData({
           xinxi: e.detail.value
         })

       },
       xuanze: function () {

         wx.chooseImage({
           count: '1', //最多可以选择的图片张数,
           success: res => {
             this.setData({
               ms: res.tempFiles[0].path,
               img: res.tempFiles[0].path,
             })
           }, //返回图片的本地文件路径列表 tempFilePaths,
           fail: () => {},
           complete: () => {}
         });



       },
       cancel: function () {

         this.setData({

           hiddenmodalput1: true,
           hiddenmodalput2: true,
           hiddenmodalput3: true,
           hiddenmodalput4: true,
           hiddenmodalput5: true,
           hiddenmodalput6: true,
           hiddenmodalput7: true,
           hiddenmodalput8: true,
           hiddenmodalput9: true,
         });

       },



       //确认

       confirm1: function () {
         if (this.data.img != "null") {
           wx.cloud.uploadFile({
             cloudPath: (new Date()).getTime() + ".png", //自定义云存储路径
             filePath: this.data.img,
             success: res => {
               console.log(res)
               this.setData({
                   Img: res.fileID
                 }),

                 db.collection('renfu').doc('5e847ab25eb67fa6007bcf284479189f').update({
                   // data 传入需要局部更新的数据
                   data: {
                     image: this.data.Img,
                     name: this.data.name,
                     money: this.data.money,
                     ms:this.data.xinxi
                   },

                   success: function (res) {
                     this.onPullDownRefresh()

                   }
                 })
               this.setData({
                 ms: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2449171074,3989439360&fm=26&gp=0.jpg",
                 hiddenmodalput1: true

               })
               this.onPullDownRefresh()
               wx.showToast({
                 title: '成功',
                 icon: 'success',
                 duration: 2000
               })

               fail: res => {
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
         this.onPullDownRefresh()




       },
       confirm2: function () {
         if (this.data.img != "null") {
           wx.cloud.uploadFile({
             cloudPath: (new Date()).getTime() + ".png", //自定义云存储路径
             filePath: this.data.img,
             success: res => {
               console.log(res)
               this.setData({
                   Img: res.fileID
                 }),

                 db.collection('renfu').doc('5e847ab25eb67fa9007bcf7a4701712a').update({
                   // data 传入需要局部更新的数据
                   data: {
                     image: this.data.Img,
                     name: this.data.name,
                     money: this.data.money,
                        ms: this.data.xinxi,
                   },

                   success: function (res) {
                     this.onPullDownRefresh()

                   }
                 })
               this.setData({
                 ms: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2449171074,3989439360&fm=26&gp=0.jpg",
                 hiddenmodalput2: true

               })
               this.onPullDownRefresh()
               wx.showToast({
                 title: '成功',
                 icon: 'success',
                 duration: 2000
               })

               fail: res => {
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
         this.onPullDownRefresh()




       },
       confirm3: function () {
         if (this.data.img != "null") {
           wx.cloud.uploadFile({
             cloudPath: (new Date()).getTime() + ".png", //自定义云存储路径
             filePath: this.data.img,
             success: res => {
               console.log(res)
               this.setData({
                   Img: res.fileID
                 }),

                 db.collection('renfu').doc('05f2c36f5eb67fab006d74921fc737bf').update({
                   // data 传入需要局部更新的数据
                   data: {
                     image: this.data.Img,
                     name: this.data.name,
                       ms: this.data.xinxi,
                     money: this.data.money
                   },

                   success: function (res) {
                     this.onPullDownRefresh()

                   }
                 })
               this.setData({
                 ms: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2449171074,3989439360&fm=26&gp=0.jpg",
                 hiddenmodalput3: true

               })
               this.onPullDownRefresh()
               wx.showToast({
                 title: '成功',
                 icon: 'success',
                 duration: 2000
               })

               fail: res => {
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
         this.onPullDownRefresh()




       },
       confirm4: function () {
         if (this.data.img != "null") {
           wx.cloud.uploadFile({
             cloudPath: (new Date()).getTime() + ".png", //自定义云存储路径
             filePath: this.data.img,
             success: res => {
               console.log(res)
               this.setData({
                   Img: res.fileID
                 }),

                 db.collection('renfu').doc('37e26adb5eb67fad0062d9d45737b872').update({
                   // data 传入需要局部更新的数据
                   data: {
                     image: this.data.Img,
                     name: this.data.name,
                       ms: this.data.xinxi,
                     money: this.data.money
                   },

                   success: function (res) {
                     this.onPullDownRefresh()

                   }
                 })
               this.setData({
                 ms: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2449171074,3989439360&fm=26&gp=0.jpg",
                 hiddenmodalput4: true

               })
               this.onPullDownRefresh()
               wx.showToast({
                 title: '成功',
                 icon: 'success',
                 duration: 2000
               })

               fail: res => {
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
         this.onPullDownRefresh()




       }, confirm5: function () {
         if (this.data.img != "null") {
           wx.cloud.uploadFile({
             cloudPath: (new Date()).getTime() + ".png", //自定义云存储路径
             filePath: this.data.img,
             success: res => {
               console.log(res)
               this.setData({
                   Img: res.fileID
                 }),

                 db.collection('renfu').doc('5e847ab25eb67faf007bd0230f7a0ca2').update({
                   // data 传入需要局部更新的数据
                   data: {
                     image: this.data.Img,
                     name: this.data.name,
                       ms: this.data.xinxi,
                     money: this.data.money
                   },

                   success: function (res) {
                     this.onPullDownRefresh()

                   }
                 })
               this.setData({
                 ms: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2449171074,3989439360&fm=26&gp=0.jpg",
                 hiddenmodalput5: true

               })
               this.onPullDownRefresh()
               wx.showToast({
                 title: '成功',
                 icon: 'success',
                 duration: 2000
               })

               fail: res => {
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
         this.onPullDownRefresh()




       },
       confirm6: function () {
         if (this.data.img != "null") {
           wx.cloud.uploadFile({
             cloudPath: (new Date()).getTime() + ".png", //自定义云存储路径
             filePath: this.data.img,
             success: res => {
               console.log(res)
               this.setData({
                   Img: res.fileID
                 }),

                 db.collection('renfu').doc('e2297d935eb67fb30054d12f58c35cc7').update({
                   // data 传入需要局部更新的数据
                   data: {
                     image: this.data.Img,
                     name: this.data.name,
                       ms: this.data.xinxi,
                     money: this.data.money
                   },

                   success: function (res) {
                     this.onPullDownRefresh()

                   }
                 })
               this.setData({
                 ms: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2449171074,3989439360&fm=26&gp=0.jpg",
                 hiddenmodalput6: true

               })
               this.onPullDownRefresh()
               wx.showToast({
                 title: '成功',
                 icon: 'success',
                 duration: 2000
               })

               fail: res => {
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
         this.onPullDownRefresh()




       },
       confirm7: function () {
         if (this.data.img != "null") {
           wx.cloud.uploadFile({
             cloudPath: (new Date()).getTime() + ".png", //自定义云存储路径
             filePath: this.data.img,
             success: res => {
               console.log(res)
               this.setData({
                   Img: res.fileID
                 }),

                 db.collection('renfu').doc('982133855eb67fb60060f541179d17ba').update({
                   // data 传入需要局部更新的数据
                   data: {
                     image: this.data.Img,
                     name: this.data.name,
                       ms: this.data.xinxi,
                     money: this.data.money
                   },

                   success: function (res) {
                     this.onPullDownRefresh()

                   }
                 })
               this.setData({
                 ms: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2449171074,3989439360&fm=26&gp=0.jpg",
                 hiddenmodalput7: true

               })
               this.onPullDownRefresh()
               wx.showToast({
                 title: '成功',
                 icon: 'success',
                 duration: 2000
               })

               fail: res => {
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
         this.onPullDownRefresh()




       },
       confirm8: function () {
         if (this.data.img != "null") {
           wx.cloud.uploadFile({
             cloudPath: (new Date()).getTime() + ".png", //自定义云存储路径
             filePath: this.data.img,
             success: res => {
               console.log(res)
               this.setData({
                   Img: res.fileID
                 }),

                 db.collection('renfu').doc('37e26adb5eb67fb80062dab56f2059db').update({
                   // data 传入需要局部更新的数据
                   data: {
                     image: this.data.Img,
                       ms: this.data.xinxi,
                     name: this.data.name,
                     money: this.data.money
                   },

                   success: function (res) {
                     this.onPullDownRefresh()

                   }
                 })
               this.setData({
                 ms: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2449171074,3989439360&fm=26&gp=0.jpg",
                 hiddenmodalput8: true

               })
               this.onPullDownRefresh()
               wx.showToast({
                 title: '成功',
                 icon: 'success',
                 duration: 2000
               })

               fail: res => {
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
         this.onPullDownRefresh()




       },
       confirm9: function () {
         if (this.data.img != "null") {
           wx.cloud.uploadFile({
             cloudPath: (new Date()).getTime() + ".png", //自定义云存储路径
             filePath: this.data.img,
             success: res => {
               console.log(res)
               this.setData({
                   Img: res.fileID
                 }),

                 db.collection('renfu').doc('37e26adb5eb67fbc0062db1256ef19f3').update({
                   // data 传入需要局部更新的数据
                   data: {
                     image: this.data.Img,
                     name: this.data.name,
                       ms: this.data.xinxi,
                     money: this.data.money
                   },

                   success: function (res) {
                     this.onPullDownRefresh()

                   }
                 })
               this.setData({
                 ms: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2449171074,3989439360&fm=26&gp=0.jpg",
                 hiddenmodalput9: true

               })
               this.onPullDownRefresh()
               wx.showToast({
                 title: '成功',
                 icon: 'success',
                 duration: 2000
               })

               fail: res => {
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
         this.onPullDownRefresh()




       },
onChange0({ detail}) {

  if (this.data.p6 == "汐画"){

  this.setData({
    checked0: detail,
   // m0: detail,
    
  });}
},
onChange1({
  detail
}) {
  // 需要手动对 checked 状态进行更新
  if (this.data.p6 == "汐画") {
    this.setData({
    checked1: detail,
     m1: detail,
  });}
},
onChange2({
  detail
}) {
  // 需要手动对 checked 状态进行更新
  if (this.data.p6 == "汐画") {
    this.setData({
    checked2: detail,
     m2: detail,
  });}
},
onChange3({
  detail
}) {
  // 需要手动对 checked 状态进行更新
  if (this.data.p6 == "汐画") {
    this.setData({
    checked3: detail,
    m3: detail,
  });}
},
onChange4({
  detail
}) {
  // 需要手动对 checked 状态进行更新
   if (this.data.p6 == "汐画") {
     this.setData({
    checked4: detail,
    m4: detail,
  });}
},
onChange5({
  detail
}) {
  // 需要手动对 checked 状态进行更新
   if (this.data.p6 == "汐画") {
     this.setData({
    checked5: detail,
    m5: detail,
  });}
}, onChange6({
  detail
}) {
  // 需要手动对 checked 状态进行更新
  if (this.data.p6 == "汐画") {
    this.setData({
    checked6: detail,
    m6: detail,
  });}
}, onChange7({
  detail
}) {
  // 需要手动对 checked 状态进行更新
 if (this.data.p6 == "汐画") {
   this.setData({
    checked7: detail,
    m7: detail,
  });}
}, onChange8({
  detail
}) {
  // 需要手动对 checked 状态进行更新
  if (this.data.p6 == "汐画") {
    this.setData({
    checked8: detail,
    m8: detail,
  });}
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    db.collection('renfu').get({}).then(res => {

      this.setData({
        s1: res.data[0],
        s2: res.data[1],
        s3: res.data[2],
        s4: res.data[3],
        s5: res.data[4],
        s6: res.data[5],
        s7: res.data[6],
        s8: res.data[7],
        s9: res.data[8],
        s10: res.data[9],
       
        m0: res.data[10].hidd1,
        m1: res.data[10].hidd2,
        m2: res.data[10].hidd3,
        m3: res.data[10].hidd4,
        m4: res.data[10].hidd5,
        m5: res.data[10].hidd6,
        m6: res.data[10].hidd7,
        m7: res.data[10].hidd8,
        m8: res.data[10].hidd9,
      })
     
    })
    


      let that = this
     
     
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function (res) {
console.log(res);
                var avatarUrl = 'userInfo.avatarUrl';
                var nickName = 'userInfo.nickName';
                 if (res.userInfo.nickName == "汐画") {
                   that.setData({
                      hi: false,
                     hd: false
                   })
                 }
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

     db.collection('renfu').get({}).then(res => {

       this.setData({
         s1: res.data[0],
         s2: res.data[1],
         s3: res.data[2],
         s4: res.data[3],
         s5: res.data[4],
         s6: res.data[5],
         s7: res.data[6],
         s8: res.data[7],
         s9: res.data[8],
         s10:res.data[9],

         m0: res.data[10].hidd1,
         m1: res.data[10].hidd2,
         m2: res.data[10].hidd3,
         m3: res.data[10].hidd4,
         m4: res.data[10].hidd5,
         m5: res.data[10].hidd6,
         m6: res.data[10].hidd7,
         m7: res.data[10].hidd8,
         m8: res.data[10].hidd9,
       })
  
     })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
     db.collection('renfu').get({}).then(res => {

       this.setData({
         s1: res.data[0],
         s2: res.data[1],
         s3: res.data[2],
         s4: res.data[3],

         s5: res.data[4],
         s6: res.data[5],
         s7: res.data[6],
         s8: res.data[7],
         s9: res.data[8],
         s10: res.data[9],

         m0: res.data[10].hidd1,
         m1: res.data[10].hidd2,
         m2: res.data[10].hidd3,
         m3: res.data[10].hidd4,
         m4: res.data[10].hidd5,
         m5: res.data[10].hidd6,
         m6: res.data[10].hidd7,
         m7: res.data[10].hidd8,
         m8: res.data[10].hidd9,
       })
    
     })

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
    db.collection('renfu').get({}).then(res => {

      this.setData({
        s1: res.data[0],
        s2: res.data[1],
        s3: res.data[2],
        s4: res.data[3],

        s5: res.data[4],
        s6: res.data[5],
        s7: res.data[6],
        s8: res.data[7],
        s9: res.data[8],
            s10: res.data[9]
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