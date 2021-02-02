import CustomPage from '../../utils/page';
CustomPage({
  data:{
    example1Des:`属性：
    title = "" 
    mask = true | false
    duration = 1500 (提示的延迟时间)

    方法：
    show(Object object)
    hide()`
  },
  showToast(){
    this.selectComponent('.d-toast').show({
      title: "去年今日此门中，人面桃花相映红。\n人面不知何处去，桃花依旧笑春风。"
    });
  },
  hideToast(){
    this.selectComponent('.d-toast').hide();
  }
});