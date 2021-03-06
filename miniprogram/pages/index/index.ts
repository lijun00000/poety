// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '测试'
  },
  search() {
    console.log(this.data.value);
  },
  inputChange(e: any) {
    let value: string = e.detail.value;
    //'aaa'.indexOf('b')  返回-1 说明'aaa'中不包含'b'
    if(value.indexOf('\n') >= 0) {
      value = value.replace('\n', '');
      this.setData({
        value: value
      });
    } else {
      this.setData({
        value: value
      });
    }
    console.log(this.data.value);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    
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
