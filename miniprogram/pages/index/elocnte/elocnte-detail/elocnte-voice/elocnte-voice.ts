//全局唯一的背景音频管理器
const backgroundAudioManager = wx.getBackgroundAudioManager();
const innerAudioContext = wx.createInnerAudioContext();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isplay: false,
  },
  // musicData: {
  //   innerAudioContext: wx.createInnerAudioContext(),
  //   volume: 1,
  //   autoplay: false,
  //   paused: true,
  //   loop: true,
  //   src: '/pages/music/nibushizhenzhengdekuaile.mp3'
  // },
  play() {
    console.log(this.data.isplay);
    if(!this.data.isplay) {
      innerAudioContext.play();
      //backgroundAudioManager.play();
      innerAudioContext.onPlay(() => {
        console.log('开始播放');
        console.log(innerAudioContext.duration);
      });
      innerAudioContext.offPlay(() => {});
      innerAudioContext.onError((res: any) => {
        console.log(res.errMsg)
        console.log(res.errCode)
      });
    } else {
      innerAudioContext.pause();
      //backgroundAudioManager.pause();
    }
    this.setData({
      isplay: !this.data.isplay,
    });
  },
  previous() {
    innerAudioContext.src = '/pages/music/周杰伦 - 默 .mp3';
    innerAudioContext.play();
  },
  next() {
    innerAudioContext.src = '/pages/music/nibushizhenzhengdekuaile.mp3';
    innerAudioContext.play();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(param) {
    console.log(param.name);
    innerAudioContext.src = '/pages/music/周杰伦 - 默 .mp3';
    //backgroundAudioManager.src = '/pages/music/周杰伦 - 默 .mp3';
    //backgroundAudioManager.title = '默 - 周杰伦';
    //this.musicData.innerAudioContext.play();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    innerAudioContext.stop();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(opts): WechatMiniprogram.Page.ICustomShareContent {
    console.log(opts.target)
    return {}
  }
})