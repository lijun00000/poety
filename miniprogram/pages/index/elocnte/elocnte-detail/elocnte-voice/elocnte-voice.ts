Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  musicData: {
    innerAudioContext: wx.createInnerAudioContext(),
    volume: 1,
    autoplay: false,
    paused: true,
    loop: true,
    src: '/pages/music/nibushizhenzhengdekuaile.mp3'
  },
  previous() {
    if(this.musicData.innerAudioContext) {
      this.musicData.innerAudioContext.destroy();
      this.musicData.innerAudioContext = wx.createInnerAudioContext();
    }
    // this.musicData.autoplay = true;
    this.musicData.src = '/pages/music/周杰伦 - 默 .mp3';
    this.musicData.innerAudioContext.src = this.musicData.src;
    this.musicData.innerAudioContext.autoplay = this.musicData.autoplay;
    this.musicData.innerAudioContext.loop = this.musicData.loop;
    this.musicData.innerAudioContext.volume = this.musicData.volume;
    this.musicData.innerAudioContext.play();
    this.musicData.innerAudioContext.onPlay(() => {
      console.log('开始播放');
      console.log(this.musicData.innerAudioContext.duration);
    });
    this.musicData.innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    });
  },
  next() {
    if(this.musicData.innerAudioContext) {
      this.musicData.innerAudioContext.destroy();
      this.musicData.innerAudioContext = wx.createInnerAudioContext();
    }
    // this.musicData.autoplay = true;
    this.musicData.src = '/pages/music/nibushizhenzhengdekuaile.mp3';
    this.musicData.innerAudioContext.src = this.musicData.src;
    this.musicData.innerAudioContext.autoplay = this.musicData.autoplay;
    this.musicData.innerAudioContext.loop = this.musicData.loop;
    this.musicData.innerAudioContext.volume = this.musicData.volume;
    this.musicData.innerAudioContext.play();
    this.musicData.innerAudioContext.onPlay(() => {
      console.log('开始播放');
      console.log(this.musicData.innerAudioContext.duration);
    });
    this.musicData.innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    });
  },
  pause() {
    this.musicData.paused = false;
    console.log('暂停', this.musicData.paused);
    this.musicData.innerAudioContext.pause();
    this.musicData.innerAudioContext.offPlay(() => {});
    this.musicData.innerAudioContext.offError(() => {});
  },
  stop() {
    console.log('停止');
    this.musicData.innerAudioContext.stop();
    this.musicData.innerAudioContext.offPlay(() => {});
    this.musicData.innerAudioContext.offError(() => {});
  },
  play() {
    this.musicData.paused = true;
    console.log('播放', this.musicData.paused);
    // this.musicData.autoplay = true;
    this.musicData.innerAudioContext.play();
    this.musicData.innerAudioContext.onPlay(() => {
      console.log('开始播放');
      console.log(this.musicData.innerAudioContext.duration);
    });
    this.musicData.innerAudioContext.offPlay(() => {});
    this.musicData.innerAudioContext.onError((res) => {
      console.log(res.errMsg)
      console.log(res.errCode)
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(param) {
    console.log(param);
    this.musicData.src = '/pages/music/周杰伦 - 默 .mp3';
    this.musicData.innerAudioContext.src = this.musicData.src;
    this.musicData.innerAudioContext.play();
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
    this.musicData.innerAudioContext.stop();
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