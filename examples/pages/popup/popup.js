import CustomPage from "../../utils/page";
CustomPage({
  data: {
    example1Des: `属性：
    show = true | false
    showMask = true | false
    maskStyle = ""
    customStyle = ""
    zIndex = 901
    position = "center" | "bottom" | "top" | "left" | "right"

    事件：
    tapMask（点击蒙层时触发）`,
    show: false,
    show2: false,
  },
  toggle() {
    this.setData({
      show: !this.data.show,
    });
  },
  toggle2() {
    this.setData({
      show2: !this.data.show2,
    });
  },
  tapMask() {
    this.toggle();
  },
  tapMask2() {
    this.toggle2();
  },
});
