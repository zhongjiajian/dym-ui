import CustomPage from '../../utils/page';
CustomPage({
  data:{
    example1Des:`属性：
    show = true | false
    fixTop = 64 (drawer组件属性)
    title = '选择时间' (drawer组件属性)
    titleStyle = ""  (drawer组件属性)
    cancelText = "取消"  (drawer组件属性)
    cancelTextStyle = ""  (drawer组件属性)
    confirmText = "确定"  (drawer组件属性)
    confirmTextStyle = ""  (drawer组件属性)
    type = 'year-month-date-time' (选择器类型)
    timeValue = Date.now().getTime() (选择器初始值，默认为当前时间戳)

    事件：
    bindcancel (点击取消触发)
    bindconfirm (点击确定触发)
    bindhidden（隐藏时触发）
    bindchange（值变化时触发）

    插槽：
    slot = "before"
    slot = "after"
    `,
    show: false,
    type: 'year-month-date-time',
    timeValue: Date.now().get
  },
  changePickerType(e){
    this.setData({
      show:true,
      type:e.currentTarget.dataset.type
    });
  },
  changeTimeValue(e){
    this.setData({
      show:true,
      timeValue:new Date(e.currentTarget.dataset.value).getTime() || Date.now()
    });
  },
  change(val){
    console.log(val);
  }
});