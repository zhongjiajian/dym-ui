import CustomPage from '../../utils/page';
CustomPage({
  data:{
    example1Des:`属性：
    style = "" 
    endPosition = ["0","100%"] (动画结束的位置)
    arcRate = 0.5 （飞行弧率，0到1，值越大弧度越明显）
    
    事件：
    transitionend（动画结束时触发）
    
    方法：
    add(event)`,
    endPosition: ["0","100%"],
    arcRate:0.5,
    cartLeft:0,
    shake:false
  },
  onLoad(){
    this.setData({
      cartPosition: this.getCartPosition()
    })
  },
  getCartPosition(){
    this.createSelectorQuery().select('.cart').boundingClientRect(rect=>{
      this.setData({
        cartPosition:[rect.left+rect.width/2+'px',rect.top+rect.height/2+'px']
      })
    }).exec();
  },
  addToCart(e){
    if(!this.flyToCartComponent) this.flyToCartComponent = this.selectComponent('.flyToCart');
    this.flyToCartComponent.add(e);
    this.setData({
      shake: false
    })
  },
  addArcRate(){
    this.setData({
      arcRate: (Number(this.data.arcRate)+0.1).toFixed(1)
    })
  },
  reduceArcRate(){
    this.setData({
      arcRate: (Number(this.data.arcRate)-0.1).toFixed(1)
    })
  },
  sliderChange(e){
    this.setData({
      cartLeft: e.detail.value
    },this.getCartPosition)
  },
  transitionend(){
    this.setData({
      shake: true
    })
  },
});