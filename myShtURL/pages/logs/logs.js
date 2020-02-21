//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    getExpNum: "a",
    getExpInfo: "a",
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },

  bindKeyInput: function(m_viewinput){
    this.setData({getExpNum: m_viewinput});
  },

  btnChkExp: function(){
    wx.request({
      url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx008d9758abe466aa&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success (res) {
        console.log(res.data)
      }
    })
    //app.API_CheckExpInfo(this.data.getExpNum.detail.value);
  },  
})
