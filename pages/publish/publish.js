// pages/publish/publish.js

//获取应用实例
const app = getApp()
const strAddress = "点击选择，要钩选哟~"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: strAddress,
    success: false
  },

  staticData: {
    orderType: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  /**
   * 地址选择事件
   */
  txtAddress_onClick: function() {
    const that = this;

    wx.chooseLocation({
      success: function(res) {
        that.setData({
          address: res.address ? res.address : that.strAddress
        });

        Object.assign(that.staticData, {
          latitude: res.latitude,
          longitude: res.longitude
        });

      },
    })
  },

  /**
   * 交易类型选择事件
   */
  orderType_onChange: function(e) {
    this.staticData.orderType = e.detail.value;
  },

  /**
   * 说明编辑事件
   */
  txtInfo_onChange: function(e) {
    this.staticData.info = e.detail.value;
  },

  txtContact_onChange: function(e) {
    this.staticData.contact = e.detail.value;
  },

  /**
   * 提交事件
   */
  btnSubmit_onClick: function() {
    if (!this.data.address || this.data.address == this.strAddress) {
      wx.showToast({
        title: '请填写地址',
        icon: 'loading',
        duration: 1500
      })
      return;
    }

    if (!this.staticData.info) {
      wx.showToast({
        title: '请填写说明',
        icon: 'loading',
        duration: 1500
      })
      return;
    }

    if (!this.staticData.contact) {
      wx.showToast({
        title: '请填写联系方式',
        icon: 'loading',
        duration: 1500
      })
      return;
    }

    const data = Object.assign({}, this.staticData, {
      address: this.data.address,
      openid: "openid"
    })

    const that = this;
    wx.request({
      url: app.globalData.workfolder + '/?act=add',
      method: "POST",
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if (res.data.error === 0) {
          that.setData({
            success: true
          })
        } else {
          wx.showToast({
            title: res.data.remsg,
            icon: 'warn',
            duration: 2000
          })
        }
      }
    })
  },

  btnBackHome_onClick: function() {
    wx.navigateBack()
  }

})