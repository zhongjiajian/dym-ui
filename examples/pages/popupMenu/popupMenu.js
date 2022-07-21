import CustomPage from '../../utils/page';
CustomPage({
  data:{
    example1Des:`属性：
    width = 150 (弹窗宽度，px)
    height = 100 (弹窗的高度，px)
    style = '' (弹窗的样式)
    zIndex = 901 (层级)
    maskBackgroundColor = 'transparent' (蒙层的背景色)
    closeTapMask = true|false （点击蒙层的时，是否关闭弹窗）
    
    方法：
    show(event) (显示弹窗)
    hide() (关闭弹窗)

    `,

  },
  onLongpress(e){
    if(!this.popupMenuComponent) this.popupMenuComponent = this.selectComponent('.popupMenu');
    this.popupMenuComponent.show(e);
  },
  closePopup(){
    this.popupMenuComponent.hide();
  }

});