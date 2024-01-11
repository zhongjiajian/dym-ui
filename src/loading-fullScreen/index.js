import { typeofIt } from '../utils/utils.js';
Component({

  properties: {
    show:{
      type:Boolean,
      value:false
    },
    type:{
      type: String,
      value: 'circle', // circle圈圈 flower菊花 
    },
    size:{
      type: String,
      optionalTypes:[Number],
      value: '120'
    },
    title: String,
    mask:{
      type:Boolean,
      value:false
    },
    zIndex:{
      type: String,
      optionalTypes: [Number],
      value: 1000
    }
  },

  methods: {
    catchtouchmove(){},
    show(option){
      if(typeofIt(option) === 'object'){
        option.show = true;
      }else{
        option = {
          show: true
        };
      }
      this.setData(option);
    },
    hide(){
      this.setData({
        show: false
      });
    }
  }
});
