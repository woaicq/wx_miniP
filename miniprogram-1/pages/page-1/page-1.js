Page({

  /**
   * 页面的初始数据
   */
  data: {
    pri_button_name: "属性是高亮绿色按钮的名字by data",
    below_button_text: "“a text”",
    mysum: 0,
    itemx:[""],
    news:["a","b","c"],
    foot1_str:"foot1 in page",
    myheader:"h in p"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  },

  /*
  一个简单的按钮相应事件
  */
 btnClick: function(){
   var a = this.data.mysum;
   var alhpabeta = this.data.news;
   alhpabeta.shift();
   this.setData({below_button_text: "mysum", mysum: a+1, news: alhpabeta});
  console.log(this.data.news)
 },

v1c: function(event){
  console.log("v1")
  console.log(event)
  console.log("v1end")
},

v2c: function(event){
  console.log("v2")
  console.log(event)
  console.log("v2end")
},

v3c: function(event){
  console.log("v3")
  console.log(event)
  console.log("v3end")
},
})

