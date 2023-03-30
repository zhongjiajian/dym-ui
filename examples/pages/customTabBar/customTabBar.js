import CustomPage from "../../utils/page";
CustomPage({
  data: {
    example1Des: `
    属性：
    selected = 0
    list =  [ ]      (类似于app.json中的tabBar.list)
    color = '#D4F2F1'
    selectedColor = '#00A19C'
    `,
    tabBarList: [
      {
        pagePath: "/index/index",
        iconPath: "/images/tab-component.png",
        selectedIconPath: "/images/tab-component-selected.png",
        text: "导航1",
      },
      {
        pagePath: "/index/index2",
        iconPath: "/images/tab-about.png",
        selectedIconPath: "/images/tab-about-selected.png",
        text: "导航2",
      },
    ],
  },
});
