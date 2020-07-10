
Page({
  /**
   * 页面的初始数据
   */
  data: {
    recordOrMusic: false,
    recordHidden: true,
    musicHidden: true
  },
  recordPlay() {
    this.setData({
      recordOrMusic: this.data.recordOrMusic,
      recordHidden: !this.data.recordHidden,
      musicHidden: this.data.musicHidden
    });
  },
  musicPlay() {
    innerAudioContext.src = '/pages/music/周杰伦 - 默 .mp3';
    innerAudioContext.onCanplay(() => {
      const duration = innerAudioContext.duration;
      if(duration) {
        console.log('获取成功');
        let durationFormat = this.dateFormat(duration); console.log(durationFormat);
      } else {
        console.log('获取失败');
        setTimeout(() => {
          const duration = innerAudioContext.duration;console.log(duration);
          let durationFormat = this.dateFormat(duration);
          console.log(durationFormat);
        }, 1000);
      }
    });
    innerAudioContext.play();
    this.setData({
      recordOrMusic: this.data.recordOrMusic,
      recordHidden: this.data.recordHidden,
      musicHidden: !this.data.musicHidden
    });
  },
  musicPause() {
    innerAudioContext.pause();
    this.setData({
      recordOrMusic: this.data.recordOrMusic,
      recordHidden: this.data.recordHidden,
      musicHidden: !this.data.musicHidden
    });
  },
  start() {
    this.setData({
      recordOrMusic: false,
      recordHidden: this.data.recordHidden,
      musicHidden: this.data.musicHidden
    });
  },
  finish() {
    this.setData({
      recordOrMusic: false,
      recordHidden: this.data.recordHidden,
      musicHidden: this.data.musicHidden
    });
  },
  listening() {
    this.setData({
      recordOrMusic: true,
      recordHidden: this.data.recordHidden,
      musicHidden: this.data.musicHidden
    });
  },
  rerecording() {
    this.setData({
      recordOrMusic: false,
      recordHidden: this.data.recordHidden,
      musicHidden: this.data.musicHidden
    });
  },
  submit() {
    this.setData({
      recordOrMusic: false,
      recordHidden: this.data.recordHidden,
      musicHidden: this.data.musicHidden
    });
  },
  //格式化时间
  dateFormat(second: any) {
    let min: any = Math.floor(second / 60);
    min = min < 10 ? '0' + min : min;
    second = Math.floor(second % 60);
    second = second < 10 ? '0' + second : second;
    return min + ':' + second;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(param) {
    console.log(param);
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