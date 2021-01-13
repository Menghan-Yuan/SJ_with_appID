Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#7A7E83",
    list: [{
      pagePath: "/pages/event/event",
      iconPath: "/image/home/event.png",
      selectedIconPath: "/image/home/event.png",
      text: "活动"
    },{
      pagePath: "/pages/magazine/magazine",
      iconPath: "/image/home/magazine.png",
      selectedIconPath: "/image/home/magazine.png",
      text: "杂志"
    },{
      pagePath: "/pages/radio/radio",
      iconPath: "/image/home/redio.png",
      selectedIconPath: "/image/home/redio.png",
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