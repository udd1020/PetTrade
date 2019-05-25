// pages/search/search.js

//获取应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  staticData: {
    keyword: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getList();
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

  getList: function() {
    const that = this;
    wx.request({
      url: app.globalData.workfolder + "/?act=list",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        openid: "openid",
        keyword: that.staticData.keyword
      },
      success(res) {
        if (res.data.error == 0) {
          that.setData({
            list: res.data.data
          })
        }
      }
    })
  },

  input_onChange: function(e) {
    this.staticData.keyword = e.detail.value;
  },

  search_onClick: function() {
    this.getList();
  },

  item_onClick: function(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.id
    })
  }
})