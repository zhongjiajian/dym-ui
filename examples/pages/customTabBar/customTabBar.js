import CustomPage from "../../utils/page";
CustomPage({
  data: {
    example1Des: `
    属性：
    selected = 0
    list =  [ ]      (类似于app.json中的tabBar.list)
    color = '#D4F2F1'
    selectedColor = '#00A19C'
    direction = 'direction' || 'row'(icon与text的排列方向)
    iconStyle = ''(icon样式)
    textStyle = ''(按钮文字样式)
      list属性:
      pagePath	页面路径
      text	按钮文字
      iconPath	图片路径
      selectedIconPath	选中时的图片路径
      navType 导航方式 switchTab、reLaunch、redirectTo、navigateTo 默认为switchTab

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
        navType: "navigateTo",
      },
    ],
  },
});
