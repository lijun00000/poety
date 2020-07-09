Page({
  /**
   * 页面的初始数据
   */
  data: {
    animationData: {}
  },
  goToPlay() {
    wx.navigateTo({
      url: '../elocnte-detail/elocnte-voice/elocnte-voice?url=/pages/music/周杰伦 - 默 .mp3'
    });
  },
  goToRecord() {
    wx.navigateTo({
      url: '../elocnte-detail/record/record?name=沁园春·雪'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(param) {
    console.log(param.name);
    wx.setNavigationBarTitle({
      title: '诗词朗诵'
    });
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