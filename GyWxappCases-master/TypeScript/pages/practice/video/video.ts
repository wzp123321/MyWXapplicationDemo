var sourceType = [ ['camera'], ['album'], ['camera', 'album'] ]
var camera = [ ['front'], ['back'], ['front', 'back'] ]
var duration = Array.apply(null, {length: 60}).map(function (n: any, i: number) {
  return i + 1
})

Page({
  data: {
    sourceTypeIndex: 2,
    sourceType: ['拍摄', '相册', '拍摄或相册'],

    cameraIndex: 2,
    camera: ['前置', '后置', '前置或后置'],

    durationIndex: 59,
    duration: duration.map(function (t: number) { return t + '秒'}),

    src: ''
  },
  sourceTypeChange: function (e: any) {
    this.setData({
      sourceTypeIndex: e.detail.value
    })
  },
  cameraChange: function (e: any) {
    this.setData({
      cameraIndex: e.detail.value
    })
  },
  durationChange: function (e: any) {
    this.setData({
      durationIndex: e.detail.value
    })
  },
  chooseVideo: function () {
    var that = this
    wx.chooseVideo({
      sourceType: sourceType[this.data.sourceTypeIndex],
      camera: camera[this.data.cameraIndex],
      duration: duration[this.durationIndex],
      success: function (res: any) {
        console.log(res)
        that.setData({
          src: res.tempFilePath
        })
      }
    })
  }
})
