// pages/杂志/杂志.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
  methods: {
    volOne: function() {
      wx.navigateTo({
        url: '/pages/magazine/VOL1/VOL1',
      })
    },
    volTwo: function() {
      wx.navigateTo({
        url: '/pages/magazine/VOL2/VOL2',
      })
    },
    volThree: function() {
      wx.navigateTo({
        url: '/pages/magazine/VOL3/VOL3',
      })
    },
    volFour: function() {
      wx.navigateTo({
        url: '/pages/magazine/VOL4/VOL4',
      })
    },
    volFive: function() {
      wx.navigateTo({
        url: '/pages/magazine/VOL5/VOL5',
      })
    }
  }
})