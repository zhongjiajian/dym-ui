import CustomPage from '../../utils/page';
CustomPage({
  data:{
    example1Des:`属性：
    width (滑块容器的宽度，默认为屏幕宽度，px)
    height = 50 (滑块容器的高度，默认为50px)
    subWidth = 0 (滑块底部操作区的宽度，px)
    crisis = 0 (滑块关闭或打开的临界值，默认为subWidth/2，px)
    disabled = false|true （是否可滑动）
    autoClose = false|true （是否自动关闭）
    close = false|true （设置主动关闭）
    mainBackgroundColor = "" (滑块背景色)
    subBackgroundColor = "" (滑块底部操作区背景色)
    
    事件：
    bindslideStart (手指开始触摸滑块时触发)
    bindslideEnd (手指离开滑块时触发)
    bindchange (滑块位置变动时时触发)

    插槽：
    slot = "main" (滑块容器内slot)
    slot = "sub" (滑块底部操作区slot)
    `,
    close:false

  },
  onTouchStart(e) {
    console.log('start.....',e)
  },
  onTouchEnd(e) {
    console.log('end.....',e)
  },
  onTouchChange(e) {
    console.log('change',e)
  },
  close(){
    this.setData({
      close: true
    })
  }
});