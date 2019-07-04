// pages/component/index.js.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuList: [{
      name: '基础能力',
      APIList: [{
        zhName: '微信登录',
        enName: 'login',
        url: '../login/login'
      }, {
        zhName: '获取用户信息',
        enName: 'getUserInfo',
        url: '../get-user-info/get-user-info'
      }, {
        zhName: '发起支付',
        enName: 'RequestPayment',
        url: '../request-payment/request-payment'
      }],
      opened: false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  // 跳转查看全部课程
  jumpAllClass() {
    wx.navigateTo({
      url: '../../pages/class/index?id=1',
    })
  },
  clickRequest() {
    wx.request({
      url: 'https://cnodejs.org/api/v1/topics',
      method: 'GET',
      data: {},
      header: {
        "content-type": "application/json"
      },
      success(res) {
        console.log(res.data)
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  tapMenuItem: function (e) {
    var menuItem = this.data.menuList[parseInt(e.currentTarget.id)]
    if (menuItem.url) {
      wx.navigateTo({ url: menuItem.url })
    } else {
      var changeData = {}
      var opened = menuItem.opened

      changeData['menuList[' + e.currentTarget.id + '].opened'] = !opened
      this.setData(changeData)
    }
  }
})