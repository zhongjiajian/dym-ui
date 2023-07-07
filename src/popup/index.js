Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    showMask: {
      type: Boolean,
      value: true
    },
    maskStyle: {
      type: String,
      value: ''
    },
    zIndex: {
      type: String,
      optionalTypes: [Number],
      value: 901
    },
    customStyle: {
      type: String,
      value: ''
    },
    position: {
      type: String,
      value: 'center',
      options:['center','bottom','top','left','right']
    },
  },
  data: {
    _show: false,
  },
  methods: {
    maskTouchMove() { },
    tapMask() {
      this.triggerEvent('tapMask');
    },
    animateShow() {
      this.animate('.d-popup .mask', [
        { offset: 0, opacity: 0, },
        { offset: 1, opacity: 1, ease: 'ease-out' },
      ], 300);
      let animateActions; 
      switch(this.properties.position){
      case 'bottom':
        animateActions =  [
          { offset: 0, scaleX: 1, scaleY: 0, transformOrigin: '50% 100%' },
          { offset: 1, scaleX: 1, scaleY: 1, transformOrigin: '50% 100%', ease: 'ease-out' },
        ];
        break;
      case 'top':
        animateActions =  [
          { offset: 0, scaleX: 1, scaleY: 0, transformOrigin: '50% 0%' },
          { offset: 1, scaleX: 1, scaleY: 1, transformOrigin: '50% 0%', ease: 'ease-out' },
        ];
        break;
      case 'left':
        animateActions =  [
          { offset: 0, scaleX: 0, scaleY: 1, transformOrigin: '0% 50%' },
          { offset: 1, scaleX: 1, scaleY: 1, transformOrigin: '0% 50%', ease: 'ease-out' },
        ];
        break;
      case 'right':
        animateActions =  [
          { offset: 0, scaleX: 0, scaleY: 1, transformOrigin: '100% 50%' },
          { offset: 1, scaleX: 1, scaleY: 1, transformOrigin: '100% 50%', ease: 'ease-out' },
        ];
        break;
      default:
        animateActions =  [
          { offset: 0, scaleX: 0, scaleY: 0, translateX: '-50%', translateY: '-50%', transformOrigin: '0% 0%' },
          { offset: 1, scaleX: 1, scaleY: 1, translateX: '-50%', translateY: '-50%', transformOrigin: '0% 0%', ease: 'ease-out' },
        ];
      }

      this.animate('.d-popup .content',animateActions, 300);
    },
    animateHide(callback) {
      this.animate('.d-popup .mask', [
        { offset: 0, opacity: 1, },
        { offset: 1, opacity: 0, ease: 'ease-out' },
      ], 300, callback.bind(this));
      let animateActions; 
      switch(this.properties.position){
      case 'bottom':
        animateActions =  [
          { offset: 0, scaleX: 1, scaleY: 1, transformOrigin: '50% 100%' },
          { offset: 1, scaleX: 1, scaleY: 0, transformOrigin: '50% 100%', ease: 'ease-out' },
        ];
        break;
      case 'top':
        animateActions =  [
          { offset: 0, scaleX: 1, scaleY: 1, transformOrigin: '50% 0%' },
          { offset: 1, scaleX: 1, scaleY: 0, transformOrigin: '50% 0%', ease: 'ease-out' },
        ];
        break;
      case 'left':
        animateActions =  [
          { offset: 0, scaleX: 1, scaleY: 1, transformOrigin: '0% 50%' },
          { offset: 1, scaleX: 0, scaleY: 1, transformOrigin: '0% 50%', ease: 'ease-out' },
        ];
        break;
      case 'right':
        animateActions =  [
          { offset: 0, scaleX: 1, scaleY: 1, transformOrigin: '100% 50%' },
          { offset: 1, scaleX: 0, scaleY: 1, transformOrigin: '100% 50%', ease: 'ease-out' },
        ];
        break;
      default:
        animateActions =  [
          { offset: 0, scaleX: 1, scaleY: 1, translateX: '-50%', translateY: '-50%', transformOrigin: '0% 0%' },
          { offset: 1, scaleX: 0, scaleY: 0, translateX: '-50%', translateY: '-50%', transformOrigin: '0% 0%', ease: 'ease-out' },
        ];
      }
      this.animate('.d-popup .content', animateActions, 300);
    }
  },
  observers: {

    show(val) {
      if (val == this.data._show) return;
      if (val) {
        this.setData({
          _show: true,
        }, () => {
          this.animateShow();
        });

      } else {
        this.animateHide(() => {
          this.setData({
            _show: false,
          });
        });
      }
    }
  }
});