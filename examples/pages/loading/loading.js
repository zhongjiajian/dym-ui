import CustomPage from '../../utils/page';
CustomPage({
  data:{
    example1Des:`属性：
    show = true | false
    title = "" 
    mask = true | false

    方法：
    show(Object object)
    hide()

    tip：效果类似于原生的wx.showLoading()。

    tip：既然有wx.showLoading，为什么还要再实现一遍？
    因为曾几何时，某个版本基础库，iOS下wx.chooseImage选取照片后调用wx.showLoading无效。不知现在修复了没有。
    类似的问题还有，iOS下调用wx.showToast，icon为"none"时，过量文本显示不全。类似的问题后面不再赘述。
    `,
    showLoadingFullScreen: false
  },
  toogleLfS(){
    const lfs = this.selectComponent('.d-loading-fullScreen');
    if(lfs.data.show){
      lfs.hide();
    }else{
      lfs.show({
        title: "加载中"
      });
    }
  }
})