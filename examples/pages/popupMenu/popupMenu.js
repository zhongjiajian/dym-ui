import CustomPage from "../../utils/page";
CustomPage({
  data: {
    example1Des: `属性：
    customStyle = '' (弹窗的样式)
    zIndex = 901 (层级)
    maskBackgroundColor = 'transparent' (蒙层的背景色)
    closeTapMask = true|false （点击蒙层的时，是否关闭弹窗）
    
    方法：
    show(event) (显示弹窗，event为点击等事件，支持promise)
    hide() (关闭弹窗)

    `,
  },
  onLongpress(e) {
    if (!this.popupMenuComponent)
      this.popupMenuComponent = this.selectComponent(".popupMenu");
    this.popupMenuComponent.show(e);
  },
  closePopup() {
    this.popupMenuComponent.hide();
  },
});
