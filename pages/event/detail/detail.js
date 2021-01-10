// pages/event/detail/detail.js
Page({


  /**
   * 页面的初始数据
   */
  data: {
    name: "username",
    email: "email"
  },

  submit: function (e){
    this.setData({
      name: e.detail.value.name,
      email: e.detail.value.email
    })
    
    console.log(this.data.email)

    var that = this; //在success部分，this失效，需要先将this赋值给that，通过调用that代替this比如：that.setData({})
    wx.request({ //使用微信提供的wx.request完成信息交互
      url: "http://localhost:3000/user/detail", 
      header: {
      "Content-Type": "application/x-www-form-urlencoded" //使用form方式传递参数
      },
      method: "POST",
      dataType:"json",
      data: {"name": this.data.name, 
            "email":this.data.email}, //将要传递的数据使用util.js中的json2Form转为标注的form数据格式
      success: function (res) { //res是返回的数据，success是响应成功后执行部分
      console.log(res.data) //显示res中携带的数据
      },
      complete: function (res) { // complete类似finally，最后必然执行
      if (res == null || res.data == null) { //如果返回值为空，则提示网络请求失败
      console.error('网络请求失败');
      return;
      }
      }
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})