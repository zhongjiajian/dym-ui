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
      title: "庵中不见庵前物，\n水自茫茫花自红。",
    });
  },
  hideToast() {
    this.selectComponent(".d-toast").hide();
  },
});
