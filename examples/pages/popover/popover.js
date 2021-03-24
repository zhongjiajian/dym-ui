import CustomPage from '../../utils/page';
CustomPage({
  data:{
    example1Des:`属性：
    show = true | false
    disabled = true | false (点击气泡是否可关闭)
    placement = 'top' （气泡位置）
    backgroundColor = 'rgba(0,0,0,0.65)'
    text = ''（气泡文本）
    disableAnimation = true | false
    zIndex = 999994 (定位层级)

    时间：
    bindhidden (点击汽包隐藏时触发)

    拓展class
    custom-class（设置气泡框的根节点样式）

    插槽：
    solt = 'content' (自定义气泡内容，text为空时有效)
    `,
    example2Des:`placement = 'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'
    
    placement属性值为：方向-对齐位置；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。如placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。`,
    show1:true,
    placement:'top'
  },
  showOrHide(){
    this.setData({
      show1:!this.data.show1
    })
  },
  changePlacement(e){
    console.log(e);
    this.setData({
      placement:e.currentTarget.dataset.placement
    })
  }
});