<template>
  <div class="section tc">
      <!-- autoplay:自动播放 src：视频地址   enable-danmu：可以发送弹幕  danmu-list：弹幕列表  danmu-btn：是否显示弹幕的按钮-->
      <!-- initial-time:可以指定初始播放的位置  vslide-gesture:在非全屏模式下，是否开启亮度与音量调节手势 title；视频标题 -->
      <!-- enable-play-gesture：是否开启播放手势，即双击切换播放/暂停 vslide-gesture-in-fullscreen：在全屏模式下，是否开启亮度与音量调节手势 -->
      <!-- bindwaiting:视频出现缓冲时触发  binderror:视频播放出错时触发-->
    <video
    :autoplay="false"
      id="myVideo"
      src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400"
      enable-danmu
      :danmu-list="danmuList"
      danmu-btn
      controls
    ></video>
    <div class="btn-area">
      <!-- 替换视频按钮 -->
      <button type="primary" @click="bindButtonTap">获取视频</button>
      <input placeholder="发一条友善的弹幕" v-model="barrage" auto-focus />
      <button type="primary" @click="bindSendDanmu">发送弹幕</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barrage: "",
      videoContext: wx.createVideoContext("myVideo"),
      danmuList: [
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
    }]
    };
  },
  methods: {
    getRandomColor() {
      let rgb = [];
      for (let i = 0; i < 3; ++i) {
        let color = Math.floor(Math.random() * 256).toString(16);
        color = color.length == 1 ? "0" + color : color;
        rgb.push(color);
      }
      return "#" + rgb.join("");
    },
 
    bindButtonTap: function() {
      var that = this;
      wx.chooseVideo({
        sourceType: ["album", "camera"],
        maxDuration: 60,
        camera: ["front", "back"],
        success: function(res) {
          that.setData({
            src: res.tempFilePath
          });
        }
      });
    },
    // 点击发送弹幕
    bindSendDanmu: function() {
      this.videoContext.sendDanmu({
        text: this.barrage,
        color: this.getRandomColor()
      });
    }
  }
};
</script>

<style>
@import './style.scss';
</style>
