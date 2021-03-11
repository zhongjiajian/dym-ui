import { typeofIt } from '../utils/utils.js';
Component({

  properties: {
    show:{
      type:Boolean,
      value:false
    },
    title: String,
    mask:{
      type:Boolean,
      value:false
    },
    zIndex:{
      type: String,
      optionalTypes: [Number],
      value: 999999
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
        }
      }
      this.setData(option);
    },
    hide(){
      this.setData({
        show: false
      });
    }
  }
})
