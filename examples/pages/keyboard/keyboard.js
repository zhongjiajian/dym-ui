import CustomPage from '../../utils/page';
CustomPage({
  data: {
    example1Des: `属性：
    type = "number" "idcard" "digit" (数字输入键盘，身份证输入键盘，带小数点的数字输入键盘)
    vibrate = true | false (点击键盘按键是否震动)

    事件:
    hide (点击键盘上的下拉按钮触发)
    bindaddinput (点击键盘上的输入键触发)
    binddeleteinput (点击键盘上的回删键触发)`,
  },

  hideKeyboard() {
    wx.showToast({
      icon: 'none',
      title: 'close'
    });
  },
  addInput(e) {
    wx.showToast({
      icon: 'none',
      title: 'add ' + ': ' + e.detail.value
    })
  },
  deleteInput(e) {
    wx.showToast({
      icon: 'none',
      title: 'delete'
    })
  },
});
