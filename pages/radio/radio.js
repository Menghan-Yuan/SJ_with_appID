const DATA = [{
  id: 1,
  title: '8月26日 墨尔本 8-15℃ 多云转晴⛅️',
  
  src: 'https://www.joy127.com/url/78163.mp3'
}, {
  id: 2,
  title: '9月2日 墨尔本 10-19℃ 阴转小雨 ☔️',
 
  src: 'https://www.joy127.com/url/78158.mp3'
}, {
  id: 3,
  title: '9月9日 墨尔本 6-19℃ 多云转晴 ⛅️',
 
  src: 'https://www.joy127.com/url/78159.mp3'
}, {
  id: 4,
  title: '9月16日 墨尔本 7-25℃ 阴转小雨 ⛅️',
 
  src: 'https://www.joy127.com/url/78160.mp3'
}, {
  id: 5,
  title: '9月23日 墨尔本 7-13℃ 阴转小雨 ☔️ ',
 
  src: 'https://www.joy127.com/url/78161.mp3'
}, {
  id: 6,
  title: 'SJ x Hubo 9月刊人物专访 ',
 
  src: 'https://www.joy127.com/url/78162.mp3'
}]
Page({

  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2
        })
      }
    }
  },

  data: {
    list: DATA,
    audioId: ''
  },
  toggleAudioId(obj) {
    this.setData({
      audioId: obj.detail
    })
  }
})
