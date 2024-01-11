import CustomPage from "../../utils/page";
CustomPage({
  data: {
    example1Des: `基于popup组件
    属性：
    maskStyle = ''
    customStyle = ''
    zIndex = 901
    
    事件：
    tapMask（点击蒙层时触发）

    方法：
    show(Object object) (显示模态框；支持promise)
    hide()
    show方法参数
    Object object
    属性	    |  类型	           | 必填	| 说明
    title    |	string          |	否	|  标题
    content  |	string          |	否	|  内容文本
    showCancel|	boolean         |	否	|  是否显示取消按钮，默认true
    cancelText|	string          |	否	|  取消按钮文本，默认“取消”
    cancelColor|	string        |	否	|  取消按钮文本颜色，默认“#000000”
    confirmText|	string        |	否	|  确定按钮文本，默认“确定”
    confirmColor|	string        |	否	|  确定按钮文本颜色，默认“#576B95”
    position   |	string        |	否	|  弹窗位置，"center"或"bottom"，默认"center"
    success	 |  function	      |	否	|  接口调用成功的回调函数	
    fail	   |  function			  | 否	|	 接口调用失败的回调函数	
    complete |  function		    |	否	|	 接口调用结束的回调函数（成功、失败都会执行）	

     插槽：
    slot  (title和content都为空时有效)

    `,
    show: false,
  },
  async showModal(e) {
    const position = e.currentTarget.dataset.position;
    try {
      const res = await this.selectComponent(".d-modal").show({
        title: "提示",
        content: "《狂飙》是最好看的电视剧？",
        position,
        complete(res) {
          console.log("conplte callback", res);
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  },
  tapMask() {
    // this.selectComponent(".d-modal").hide();
  },
});
