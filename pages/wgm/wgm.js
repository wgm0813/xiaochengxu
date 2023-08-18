// pages/wgm/wgm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'hello world',
    movies:['电影1','电影2', '电影3'],
    counter: 0,
  },

// 减少事件
decrement(){
    // 不同于vue写法，不单纯具备数据双向绑定，所以想要渲染修改后的数据要使用this.setData的方法

    this.setData({
        counter:this.data.counter-=1
    })
    // this.data.counter-=1;
    // console.log('点击减少',this.data.counter);
},
// 增加事件
increment() {
    this.setData({
        counter:this.data.counter+=1
    })
    // this.data.counter+=1;
    // console.log('点击增加',this.data.counter);
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})