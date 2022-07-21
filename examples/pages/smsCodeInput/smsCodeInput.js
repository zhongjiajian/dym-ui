import CustomPage from '../../utils/page';
CustomPage({
  data:{
    example1Des:`基于本库的keyboard组件。

    tip：如果页面内容被键盘遮挡，需要在页面中维护，比如给页面根元素的padding-bottom动态加上一个键盘的高度值:
    <view style="padding-bottom: {{isShowKeyboard?452:0}}rpx;">
    </view>

    输入框属性：
    value = "" (输入框初始值)
    focus = true | false (是否聚焦)
    type = "box", "line", "snap" (输入框类型)
    smsCodeLength = 6 (验证码长度)
    textStyle = "" (数字文本的样式)
    inputWidth = "4" (输入框边框宽度，rpx)
    inputColor = "#000" (输入框边框颜色)
    inputRadius = "4" (输入框/输入框边框圆角半径，rpx)
    inputActiveColor = "#00A19c" (输入框边框高亮颜色)
    justify = 'between', 'around', 'center' (验证码行排齐方式)
    showCursor = true | false (是否显示光标)
    cursorStyle = "color: #00A19C" (光标的样式)
    password = true | false 

    键盘属性
    keyboardZIndex = "901" (键盘的定位层级)
    keyboardFixBottom = "0" (键盘定位的bottom值，rpx)
    keyboardAnimation = true | false (键盘显示隐藏是否使用过度)
    adjustPosition = true | false (键盘弹起时，是否自动上推页面)
    cursorSpacing = 0 (页面自动上推时，指定输入框底部到键盘顶部的距离，px)
    
    事件：
    bindfocus (输入框获得焦点时触发)
    bindblur (输入框失去焦点时触发)
    bindinput (输入内容变化时触发)`,
    isShowKeyboard: false,
    focus0:false,
    focus1:false,
    focus2:false,
    focus3:false,
    focus4:false,
    focus5:false,
    focus6:false,
    focus7:false,
    focus8:false,
    focus9:false,
    focus10:false,
    focus11:false,
    focus12:false,
    focus13:false,
    focus14:false,
    focus15:false,
    focus16:false,
    focus17:false,
    focus18:false,
    focus19:false,
    focus20:false,
  },
  inputChange(e){
    console.log(e.detail);
  },
  inputFocus(e){
    const flag = e.currentTarget.dataset.flag;
    for(let i = 0;i<21;i++){
      const k = 'focus' + i;
      if (flag == i) {
        this.setData({
          [k]: true
        });
      } else {
        this.setData({
          [k]: false
        });
      }
    }
    this.setData({
      isShowKeyboard: true,
    });

  },
  inputBlur(e) {
    const flag = e.currentTarget.dataset.flag;
    const k = 'focus' + flag;
    this.setData({
      isShowKeyboard: false,
      [k]: false
    });
  },

});