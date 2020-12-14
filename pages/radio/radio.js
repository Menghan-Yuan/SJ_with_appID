const myaudio = wx.createInnerAudioContext();
Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 3
        })
      }
    }
  },
  data: {
    tridPlay: true,// 播放的flag
    duration: '00:00',// 播放时长     时间格式
    current:'00:00',// 当前播放时长   时间格式
    durationNum:0,// 播放时长数字     数字格式
    currentNum:0// 当前播放时长数字   数字格式
  },
/**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let that = this
    myaudio.src = '/audio/8_26.mp3'
    myaudio.onTimeUpdate(function(){
      let durationnum = parseInt(myaudio.duration)
      let time = that.formatSeconds(myaudio.duration)
      that.setData({
        duration: time,
        durationNum: durationnum,
      })
      that.changeCurrent(myaudio.currentTime)
    })
  },
// 左侧补零
addZero(val){
  if(val<10){
    return 0+''+val
  }else{
    return val
  }
},
 // 时间格式化
 formatSeconds(value) {
  var secondTime = parseInt(value); // 秒
  var minuteTime = 0; // 分
  var hourTime = 0; // 小时
  if (secondTime > 60) {
    minuteTime = parseInt(secondTime / 60);
    secondTime = parseInt(secondTime % 60);
    if (minuteTime > 60) {
      hourTime = parseInt(minuteTime / 60);
      minuteTime = parseInt(minuteTime % 60);
    }
  }
  var result = "" + this.addZero(parseInt(secondTime)) + "";
  if (minuteTime > 0) {
    result = "" + this.addZero(parseInt(minuteTime)) + ":" + result;
  }else{
    result = "" + this.addZero(parseInt(minuteTime)) + ":" + result;
  }
  if (hourTime > 0) {
    result = "" + parseInt(hourTime) + ":" + result;
  }
  return result;
},
// 播放暂停
play() {
  let that = this;
  if (that.data.tridPlay) {
    myaudio.play();
    that.setData({
      tridPlay: false
    })
  } else {
    myaudio.pause()
    that.setData({
      tridPlay: true
    })
  }
  
},
// 快进
go() {
  myaudio.seek(parseInt(myaudio.currentTime) + 10)
  this.changeCurrent(parseInt(myaudio.currentTime) + 10)
},
// 快退
back() {
  myaudio.seek(parseInt(myaudio.currentTime) - 10)
  this.changeCurrent(parseInt(myaudio.currentTime) - 10)
},
// 滑块拖动快进，快退
changeValue(e){
  let val = e.detail.value
  let step = (val / 100) * this.data.durationNum
  myaudio.seek(parseInt(step))
  this.changeCurrent(step)
  // setTimeout(() => { myaudio.pause()},0)
  // setTimeout(() => { myaudio.play() }, 10)
  // myaudio.pause()
  // myaudio.play()
},
// 当前播放格式化
changeCurrent(step){
  let currentnum = parseInt(step)
  let currentt = this.formatSeconds(currentnum)
  this.setData({
    current: currentt,
    currentNum: currentnum*100
  })
}
})


