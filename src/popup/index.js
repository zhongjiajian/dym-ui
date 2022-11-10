Component({
  properties:{
    show:{
      type: Boolean,
      value: false
    },
    showMask:{
      type: Boolean,
      value: true
    },
    maskStyle:{
      type: String,
      value: ''
    },
    zIndex:{
      type: String,
      optionalTypes: [Number],
      value: 901
    },
    customStyle:{
      type: String,
      value: ''
    },
  },
  methods:{
    maskTouchMove(){},
    tapMask(){
      this.triggerEvent('tapMask');
    }
  }
});