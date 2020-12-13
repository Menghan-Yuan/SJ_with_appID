
  
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
  data: {indicatordots: true,/*加入图标指示点*/
    autoplay: true,/*自动切换图片开关*/
    interval: 1000,   
  /*切换时间属性1000=1秒*/}
})
