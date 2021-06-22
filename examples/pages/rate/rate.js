import CustomPage from '../../utils/page';
CustomPage({
  data:{
    example1Des:`属性：
    value = 0
    size = 32(rpx)
    max = 5 (评分最大值)
    disabled = false（是否只读）
    showScore = false（是否显示分值）
    gap = 10（星星之间的距离，px）
    allowHalf = false（点击是否会出现半颗星）
    
    事件：
    change（分值改变时触发）`,

  },
  change(e){
    console.log(e);
  }
});