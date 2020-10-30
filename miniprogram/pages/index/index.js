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
    url: ''
  },
  down() {
    wx.saveImageToPhotosAlbum({
      filePath: '',
      complete() {
        console.log(111);

      }
    })
  },
  onLoad: function () {
    var that = this
    //数据请求
    db.collection('picture')
      .get()
      .then(res => {
        console.log(res.data);
        that.setData({
          url: res.data
        })
      })
      .catch(err => {
        console.log(err);
      });
    // 每24小时更换一张图片
    var date = new Date().getTime()
    console.log(date);
    if (date == date + 86400000) {

    }
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