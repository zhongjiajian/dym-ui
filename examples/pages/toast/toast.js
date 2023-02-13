import CustomPage from "../../utils/page";
CustomPage({
  data: {
    example1Des: `属性：
    title = "" 
    mask = true | false
    duration = 1500 (提示的延迟时间)

    方法：
    show(Object object)
    hide()`,
  },
  showToast() {
    this.selectComponent(".d-toast").show({
      title:
        // "去年今日此门中，人面桃花相映红。\n人面不知何处去，桃花依旧笑春风。",
        "该车辆已有2个待提货运单24230210490948,24230210376323，无法接单！",
    });
  },
  hideToast() {
    this.selectComponent(".d-toast").hide();
  },
});
