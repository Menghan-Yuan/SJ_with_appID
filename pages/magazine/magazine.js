Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
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
