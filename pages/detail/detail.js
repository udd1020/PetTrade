// pages/detail/detail.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getDetailInfo(options.id);
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

  getDetailInfo: function(id) {
    const that = this;

    wx.request({
      url: app.globalData.workfolder + "/?act=get",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        id: id,
        openid: "openid"
      },
      success(res) {
        var data = res.data.data;
        if (res.data.error == 0) {
          that.setData({
            id: data.id,
            address: data.address,
            type: data.type,
            info: data.info,
            contact: data.contact
          })
        }
      }
    })
  }
})