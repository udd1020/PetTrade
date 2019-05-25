//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    longitude: "",
    latitude: "",
    controls: [{
        id: 1, //始终保持在屏幕中心，地图移动，此图标不动。
        iconPath: "/res/ico_important.png",
        position: {
          left: (app.globalData.winWidth / 2) - 16,
          top: ((app.globalData.winHeight - 32) / 2) - 32,
          width: 32,
          height: 32
        },
        clickable: false
      },
      {
        id: 2, //始终保持在屏幕中心，地图移动，此图标不动。
        iconPath: "/res/ico_focus.png",
        position: {
          left: 8,
          top: app.globalData.winHeight - 80,
          width: 32,
          height: 32
        },
        clickable: true
      }
    ],
    markers: []
  },

  onShow: function() {
    this.getLocation();
    this.getMessage();
  },

  onLoad: function() {

  },

  onReady: function() {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext("map", this);
  },

  controltap: function(e) {
    //重新定位地图回到中心点
    this.mapCtx.moveToLocation();
  },

  getLocation: function() {
    const that = this;
    wx.getLocation({
      type: 'gcj02', //'wgs84'
      success: function(res) {
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
  },

  getMessage: function() {
    const that = this;
    wx.request({
      url: app.globalData.workfolder + "/?act=list",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        openid: "openid"
      },
      success(res) {
        if (res.data.error == 0) {
          var markers = res.data.data.map((value, index) => {
            return {
              iconPath: "/res/pet" + value.type + ".png",
              id: value.id,
              latitude: value.latitude,
              longitude: value.longitude,
              width: 48,
              height: 48
            }
          })
          that.setData({
            markers: markers
          })
        }
      }
    })
  },

  markers_onClick: function(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.markerId
    })
  }
})