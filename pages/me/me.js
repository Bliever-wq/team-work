// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yes:false,
    toforgive:false,
    tobackup:false,
    user_note:"",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: false
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
  
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },
  voteTitle: function (e) {
    if(e.detail.value<500&&e.value>0)
    this.setData({ day_task: e.detail.value })
    wx.setStorage({
      key: 'day_task',
      data: e.detail.value,
    })
  },
  my_collect(){
    wx.navigateTo({
      url: '../collect_card/collect_card',
    })
  },
  suggestion(){
    wx.navigateTo({
      url: '../suggestion/suggestion',
    })
  },
  forgive(){
    this.setData({toforgive:false})
  },
  toforgive(){
    this.setData({toforgive:true})
  },
  about_me(){
    wx.navigateTo({
      url: '../about/about',
    })
  },
  my_word_list(){
    wx.navigateTo({
      url: '../myword/myword',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})