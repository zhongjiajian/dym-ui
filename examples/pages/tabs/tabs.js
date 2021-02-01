import CustomPage from '../../utils/page';
CustomPage({
  data:{
    example1Des:`tabs组件属性：
    tabs = [] (选项卡的标题数组)
    tabsScrollable = true | false (选项卡是否可滚动)
    tabsBackgroundColor = "#00A19C" (选项卡的背景色)
    tabsHeight = 40 (选项卡的高度，px)
    tabsStyle = "" (选项卡样式)
    tabsPanelStyle = "" (选项卡内容面板的样式)
    activeTextColor = "#fff" (选中项字体颜色)
    defaultTextColor = "#666" (未选中项字体颜色)
    indicatorColor = "#fff" (选中项下划线颜色)
    active = 0 (激活tab索引)

    tabs-panel组件属性：
    mark = 0，1，2... (标识)
    active = 0 (激活tab索引)
    
    事件：
    bindchangeTab (tab切换时触发)`,

    tabs1: ['微信', '通讯录', '发现', '我', '附近的人和直播', '朋友圈', '小程序', '视频号'],
    tabs2: ['微信', '通讯录', '发现',],
    active: 0,
    tabsPanelStyle: 'height: 150rpx'
  },
  changeTab(e){
    console.log(e);
  }
});