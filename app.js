//app.js
App({
  onLaunch: function() {
    try {
      const res = wx.getSystemInfoSync();
      this.globalData.winWidth = res.windowWidth;
      this.globalData.winHeight = res.windowHeight;
    } catch (e) {
      console.log(e);
      throw (e)
    }
  },
  globalData: {
    domain: "https://www.yumeixi.cn",
    workfolder: "https://www.yumeixi.cn/demo/pettrade"
  }
})