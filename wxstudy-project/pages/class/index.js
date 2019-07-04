var app = getApp()
// pages/class/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login: false,
    userInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 输出页面跳转携带的参数
    console.log(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  loginbtn() {
    const _this = this;
    // 微信登录 获取code
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          // wx.request({
          //   url: 'https://test.com/onLogin',
          //   data:{
          //     code:res.code
          //   },
          //   success(res)
          //   {
          //     console.log(res)
          //   }
          // })
          // 获取用户信息
          wx.getUserInfo({
            success: function(res) {
              app.globalData.userInfo = res.userInfo;
              app.globalData.islogin = true;
              _this.setData({
                login: true,
                userInfo: res.userInfo
              })
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  onPullDownRefresh: function() {
    console.log('onPullDownRefresh', new Date())
  },
  stopPullDownRefresh: function() {
    wx.stopPullDownRefresh({
      complete: function(res) {
        console.log(res, new Date())
      }
    })
  },
  showNavigationBarLoading: function() {
    wx.showNavigationBarLoading()
  },
  hideNavigationBarLoading: function() {
    wx.hideNavigationBarLoading()
  }
})