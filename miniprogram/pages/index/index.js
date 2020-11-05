//index.js
// 声明数据库
const db = wx.cloud.database()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    url: '',
    num: null,
    files: '',
    tempFileURL: '',
    loading: true
  },
  down(e) {
    this.setData({
      files: this.data.url[this.data.num].file
    })
    wx.cloud.downloadFile({
      fileID: '' + e.currentTarget.dataset.id,
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


  onLoad: function () {
    var that = this
    //数据请求
    db.collection('picture')
      .get()
      .then(res => {
        that.setData({
          url: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
    that.setData({
      num: Math.floor(Math.random() * 20),
      loading: false
    })
  },

  onGetUserInfo: function (e) {

  },

  onGetOpenid: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})