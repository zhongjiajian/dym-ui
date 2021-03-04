import CustomPage from '../../utils/page';
CustomPage({
  data:{
    imgs:[
      "/images/mm.jpeg",
      "/images/mm1.jpeg",
      "/images/mm2.jpeg",
      "/images/mm3.jpeg",
      "/images/mm4.jpg",
      "/images/mm5.jpg",
      "/images/mm6.jpg",
      "/images/mm7.jpg",
    ],
    example1Des: `属性：
    show = true | false
    zIndex = 999996
    fixTop = 64 (window顶部到组件顶部的距离，px)
    contentPostionTop = 116 (组件顶部到content顶部的距离，rpx)
    title = ""
    cancelText = "返回"
    confirmText = "确定"
    backgroundColor = "#f5f5f5"
    disableDraw = true | false
    disableMaskTap = true | false

    事件：
    bindcancel (点击返回触发)
    bindconfirm (点击确定触发)
    bindhidden（隐藏时触发）

    插槽：
    slot = "header" (头部)
    slot = "content" (内容)
    
    tip：下拉可关闭`,
    drawerShow1: false,
    drawerShow2: false,
    
  },
  toogleDrawer1(){
    this.setData({drawerShow1: !this.data.drawerShow1})
  },
  cancel(){
    wx.showToast({
      icon: 'none',
      title: '点击了返回~',
    })

  },
  confirm(){
    wx.showToast({
      icon: 'none',
      title: '点击了确定~',
    })
  },
  toogleDrawer2(){
    this.setData({drawerShow2: !this.data.drawerShow2})
  },

 
});
