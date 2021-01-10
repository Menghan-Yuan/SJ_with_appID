Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#7A7E83",
    list: [{
      pagePath: "/pages/event/event",
      iconPath: "/image/event.png",
      selectedIconPath: "/image/event_hl.png",
      text: "活动"
    },{
      pagePath: "/pages/magazine/magazine",
      iconPath: "/image/magazine.png",
      selectedIconPath: "/image/magazine_hl.png",
      text: "杂志"
    },{
      pagePath: "/pages/radio/radio",
      iconPath: "/image/redio.png",
      selectedIconPath: "/image/redio_hi.png",
      text: "电台"
    },]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})