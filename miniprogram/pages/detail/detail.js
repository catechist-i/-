// pages/detail/detail.js
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isId: null,
    isUrl: null,
    show: false,
  },
  // showPopup() {
  //   this.setData({
  //     show: true
  //   });
  // },

  // onClose() {
  //   this.setData({
  //     show: false
  //   });
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isId: options.id
    })
    var that = this
    //数据请求
    db.collection('picture').where({
        _id: that.data.isId
      })
      .get()
      .then(res => {
        that.setData({
          isUrl: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  },
  down(e) {
    wx.cloud.downloadFile({
      fileID: '' + this.data.isUrl[0].file,
      success: res => {
        // get temp file path
        wx.saveImageToPhotosAlbum({
          filePath: '' + res.tempFilePath,
          success: function (res1) {
            console.log(res1)
          }
        })
      },
    })
  },
  // long() {
  //   this.setData({
  //     show: true
  //   });
  // },
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