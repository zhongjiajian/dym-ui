import CustomPage from "../../utils/page";
CustomPage({
  data: {
    example1Des: `属性：
    title = "" 
    mask = true | false
    duration = 1500 (提示的延迟时间)
    zIndex = "1000" (组件层级)
    customStyle = ""
    position = "center" | "bottom" | "top"  默认"center"
    type = "success" | "warning" | "error" | "info"  默认"info"
    icon = true | false（是否显示icon）
    color = "" (自定义颜色)

    方法：
    show(Object object) (显示message，参数同上述属性)
    hide()
    `,
  },
  showMessage() {
    const types = ["success", "warning", "error", "info"];
    const positions = ["center", "bottom", "top"];
    this.selectComponent(".d-message").show({
      //   color: "#409EFF",
      type: types[parseInt(Math.random() * 4)],
      //   position: positions[parseInt(Math.random() * 3)],
      position: "bottom",
      title: "《三大队》是最好看的电视剧",
      //   duration: 2000,
      mask: true,
    });
  },
  hideMessage() {
    this.selectComponent(".d-message").hide();
  },
});
