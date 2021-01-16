import CustomPage from '../../utils/page';
CustomPage({
  data:{
    example1Des:`属性：
    title = "" 
    mask = true | false

    tip：效果类似于原生的wx.showLoading()。

    tip：既然有wx.showLoading，为什么还要再实现一遍？
    因为曾几何时，某个版本基础库，iOS下wx.chooseImage选取照片后调用wx.showLoading无效。不知现在修复了没有。
    `,
    showLoadingFullScreen: false
  },
  toogleLfS(){
    this.setData({
      showLoadingFullScreen: !this.data.showLoadingFullScreen
    })
  }
})