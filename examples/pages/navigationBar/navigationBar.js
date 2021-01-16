import CustomPage from '../../utils/page';
CustomPage({
  data:{
    example1Des: `属性：
    backgroundColor = "#00A19C" (导航背景色)
    title = "" (导航标题，如果不提供，则名为center的slot有效)
    back = true | false (是否显示返回按钮)
    home = true | false (是否显示home按钮)
    iconTheme = "white", "black" (返回和home按钮的颜色)
    homePagePath = "" (点击home按钮需要跳转的页面路径)
    navToHomeType = "switchTab", "reLaunch", "redirectTo", "navigateTo" (点击home按钮的跳转方式)
    delta = 1 (点击返回按钮navigateBack的delta参数)
    
    事件：
    bindback (点击返回按钮触发)
    bindhome (点击home按钮触发)
    
    插槽：
    slot = "left" (左侧slot，当back和home都为false时有效)
    slot = "center" (标题slot，当title为空的时候有效)
    slot = "right" (右侧slot)`,
    backgroundColor: "#00A19C",
    iconTheme: "white",
    back: true,
    home: true
  },
  setBackgroundColor(e){
    this.setData({
      backgroundColor: e.currentTarget.dataset.flag
    })
  },
  toogleBack(){
    this.setData({
      back: !this.data.back
    })
  },
  toogleHome(){
    this.setData({
      home: !this.data.home
    })
  },

  setIconTheme(e){
    this.setData({
      iconTheme: e.currentTarget.dataset.flag
    })
  }
});