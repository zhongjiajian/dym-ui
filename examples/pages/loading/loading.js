import CustomPage from "../../utils/page";
CustomPage({
  data: {
    exampleDes: `type=""时有效
    使用时，需设置居中css或者定义合适的size属性：
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);`,

    example1Des: `属性：
    show = true | false
    title = "" 
    mask = true | false
    size = 120 (使用插槽时有效)

    方法：
    show(Object object)
    hide()

    插槽：
    type=""时有效
    使用时，需设置居中css或者定义合适的size属性：
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);

    tip：效果类似于原生的wx.showLoading()。

    tip：既然有wx.showLoading，为什么还要再实现一遍？
    因为曾几何时，某个版本基础库，iOS下wx.chooseImage选取照片后调用wx.showLoading无效。不知现在修复了没有。
    类似的问题还有，iOS下调用wx.showToast，icon为"none"时，过量文本显示不全。类似的问题后面不再赘述。
    `,
    showLoadingFullScreen: false,
  },
  toogleLfS() {
    const lfs = this.selectComponent(".d-loading-fullScreen");
    if (lfs.data.show) {
      lfs.hide();
    } else {
      lfs.show({
        type: "flower",
        title: "加载中",
      });
    }
  },
  toogleLfS2() {
    const lfs = this.selectComponent(".d-loading-fullScreen");
    if (lfs.data.show) {
      lfs.hide();
    } else {
      lfs.show({
        type: "",
      });
    }
  },
});
