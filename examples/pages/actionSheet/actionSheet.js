import CustomPage from '../../utils/page';
CustomPage({
  data: {

    example1Des: `属性：
    itemColor = "#000000" (按钮文字的颜色)
    itemHeight = 80 (按钮的高度，rpx)
    cancelText = "取消" (取消按钮的文本)
    showCancel = true (是否显示取消按钮)
    zIndex = "901" (组件层级)

    方法：
      show(Object object) (显示操作菜单)
      参数
      Object object
      属性	    |  类型	           | 必填	| 说明
      itemList |	Array.<string>	|	是	|  按钮的文字数组
      success	 |  function	      |	否	|  接口调用成功的回调函数	
      fail	   |  function			  | 否	|	 接口调用失败的回调函数	
      complete |  function		    |	否	|	 接口调用结束的回调函数（成功、失败都会执行）	

      object.success 回调函数
      参数
      Object res
      属性	 	   |	 类型		 |	   说明
      tapIndex	|		number	|		点击的按钮序号，从上到下从0开始
    `

  },
  show(){
    if(!this.actionSheetComponent) this.actionSheetComponent = this.selectComponent('.d-action-sheet');
    this.actionSheetComponent.show({
      itemList:['星期一','星期二','星期三','星期四','星期五','星期六','星期天',],
      complete(res){
        this.setData({errMsg: res});
      }
    });
  }

});
