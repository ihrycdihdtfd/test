const { features, steps, fateTags, dailyCards } = require('../../data/home')

Page({
  data: {
    features,
    steps,
    fateTags,
    dailyCards
  },
  handleRestart() {
    wx.showToast({ title: '命盘页即将开启', icon: 'none' })
  },
  handleDaily() {
    wx.showToast({ title: '今日命盘已预留', icon: 'none' })
  }
})
