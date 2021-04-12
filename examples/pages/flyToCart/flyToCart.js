import CustomPage from '../../utils/page';
CustomPage({
  data:{
    example1Des:`属性：
    style = "" 
    endPosition = ["0","100%"] (动画结束的位置)
    arcRate = 0.5 （飞行弧率，0到1，值越大弧度越明显）
    
    方法：
    add(event)`,
    endPosition: ["0","100%"],
    arcRate:0.5,
    cartLeft:0
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
  sliderChangeing(e){
    this.getCartPosition()
    this.setData({
      cartLeft: e.detail.value
    })
  }
});