import CustomPage from '../../utils/page';
CustomPage({
  data: {
    example1Des: `基于本库的keyboard组件。

    tip：如果页面内容被键盘遮挡，需要在页面中维护，比如给页面根元素的padding-bottom动态加上一个键盘的高度值:
    <view style="padding-bottom: {{isShowKeyboard?452:0}}rpx;">
    </view>

    输入框属性：
    value = "" (输入框初始值)
    focus = true | false (是否聚焦)
    height = "98" (输入框高度，rpx)
    clear = true | false (是否显示清空按钮，默认输入11位时会显示)
    groupSpacing = "20" (号码分割的间隔距离，rpx，\n格式为153 1373 0597)
    textStyle = "" (数字文本的样式)
    bottomLineStyle = "" (底部横线的样式)
    bottomLineActiveStyle = "" (输入11位后底部横线的高亮样式)
    cursorStyle = "" (光标的样式)
    cursorActiveStyle = ""  (输入11位后光标的高亮样式)
    clearStyle = "" (清空按钮的样式)

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
    example2Des: `wxml:
    <d-phoneNumberInput focus="{{focus0}}" data-flag="0" bindinput="inputChange" bindfocus="inputFocus" bindblur="inputBlur" value='100861008610086' />
    
    <view style="width: 60%;">
      <d-phoneNumberInput focus="{{focus1}}" data-flag="1" bindinput="inputChange" bindfocus="inputFocus" bindblur="inputBlur" 
        value='10086100861' 
        height="58"
        textStyle="font-size: 24px;letter-spacing: 2rpx;font-family:fantasy,serif,monospace,cursive;"  
        groupSpacing = "40" 
        bottomLineStyle = "height:12rpx;border-radius:6rpx;background-color:#E1DEF6;"                 
        bottomLineActiveStyle = "background-color:#443AAD;"
        cursorStyle = "color:#E1DEF6;height:24px;width:6rpx;border-radius: 4rpx;"
        cursorActiveStyle = "color:#443AAD"
        clearStyle="background-color: #E1DEF6;font-size: 13px;color: #443AAD;border-radius: 50%;width: 36rpx;line-height: 36rpx;"/>
    </view>`,

    focus0: false,
    focus1: false,
    isShowKeyboard: false
  },
  inputChange(e) {
    console.log(e);
  },
  inputFocus(e){
    const flag = e.currentTarget.dataset.flag;
    for(let i = 0;i<2;i++){
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
