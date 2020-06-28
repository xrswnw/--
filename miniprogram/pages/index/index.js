//index.js
const app = getApp()
Page({
	data:{
	url1:"",
	url2:""
},


Video:function(){
wx.chooseVideo({
	sourceType: ['album', 'camera'],
	maxDuration: 600,
	camera: 'back',
	success(res) {
		console.log(res.tempFilePath),
		this.setData({
			url2: res.tempFilePath
		})

	}
})
},
upload:function(){
 let that=this
wx.chooseImage({
	count: 9, // 最多可以选择的图片张数，默认9
	sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
	sourceType: ['album', 'camera'],
                                                                // album 从相册选图，camera 使用相机，默认二者都有
	success: function(res){
	console.log(res)
		that.up(res.tempFilePaths[0]);
	
//that.setData({url1:res.tempFilePaths})
},
	fail: function() {
		// fail
	},
	complete: function() {
		// complete
	}
})
},
up:function(e){
 wx.cloud.uploadFile({
 	cloudPath: new Date().getTime() + '.png', // 上传至云端的路径
 	filePath: e, // 小程序临时文件路径
 	success: res => {
 		// 返回文件 ID
 		console.log("上传成功", res.fileID)
 	},
 	fail: console.error
 })
},
dowm:function(){
wx.cloud.downloadFile({
	fileID: '', // 文件 ID
	success: res => {
		// 返回临时文件路径
		console.log(res.tempFilePath)
	},
	fail: console.error
})

},
 


	onLoad:function(options){
		// 生命周期函数--监听页面加载
		
	},
	onReady:function(){
		// 生命周期函数--监听页面初次渲染完成
		
	},
	onShow:function(){
		// 生命周期函数--监听页面显示
		
	},
	onHide:function(){
		// 生命周期函数--监听页面隐藏
	},
	onUnload:function(){
		// 生命周期函数--监听页面卸载
		
	},
	onPullDownRefresh: function() {
		// 页面相关事件处理函数--监听用户下拉动作
		
	},
	onReachBottom: function() {
		// 页面上拉触底事件的处理函数
		
	},
	onShareAppMessage: function() {
		// 用户点击右上角分享
		
	}
})