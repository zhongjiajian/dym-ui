import CustomPage from "../../utils/page";
CustomPage({
  data: {
    example1Des: `属性：
    show = true | false
    showMask = true | false
    maskStyle = ''
    customStyle = ''
    zIndex = 901
    
    事件：
    tapMask（点击蒙层时触发）`,
    show: false,
  },
  toggle() {
    this.setData({
      show: !this.data.show,
    });
  },
  tapMask() {
    this.toggle();
    // this.selectComponent(".d-toast").show({
    //   title: "you clicked the mask",
    //   mask: false,
    // });
  },
});
