Component({
   properties:{
       style:{
           type:String,
           value:""
       },
       endPosition:{
           type:Array,
           value:["0","100%"]
       },
       arcRate:{
           type:Number,
           optionalTypes:[String],
           value: 0.5
       }
   },
   data:{
       flyerId:0,
       flyersStack:[]
   },
   methods:{
    add(e){
        const touch = e.touches[0] || e.changedTouches[0];
        const endPosition = this.properties.endPosition;       
        const flyersStack = this.data.flyersStack;
        const index = this.data.flyerId;
        flyersStack.push({
            id:this.data.flyerId++,
            left: touch.clientX + 'px',
            top: touch.clientY + 'px',

        });
        this.setData({
            flyersStack
        });
        const leftKey = 'flyersStack['+index+'].left';
        const topKey = 'flyersStack['+index+'].top';
        setTimeout(()=>{
            this.setData({
                [leftKey]: endPosition[0],
                [topKey]: endPosition[1],
            });
        },200)
    },
   },
   observers:{
       arcRate(val){
           if(val<0) this.setData({arcRate:0});
           else if(val>1) this.setData({arcRate:1});
       }
   }
})