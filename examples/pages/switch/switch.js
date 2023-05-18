import CustomPage from "../../utils/page";
CustomPage({
  data: {
    example1Des: `属性：
    openText = "是" 
    openColor = "#00A19C"
    closeText = "否" 
    closeColor = "#999999"
    value = false | true
    disabled = false | true

    事件：
    bindchange`,
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
