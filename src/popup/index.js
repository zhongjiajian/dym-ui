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
      this.animate('.d-popup .content', [
        { offset: 0, scaleX: 0, scaleY: 0, translateX: '-50%', translateY: '-50%', transformOrigin: '0% 0%' },
        { offset: 1, scaleX: 1, scaleY: 1, translateX: '-50%', translateY: '-50%', transformOrigin: '0% 0%', ease: 'ease-out' },
      ], 300);
    },
    animateHide(callback) {
      this.animate('.d-popup .mask', [
        { offset: 0, opacity: 1, },
        { offset: 1, opacity: 0, ease: 'ease-out' },
      ], 300, callback.bind(this));
      this.animate('.d-popup .content', [
        { offset: 0, scaleX: 1, scaleY: 1, translateX: '-50%', translateY: '-50%', transformOrigin: '0% 0%' },
        { offset: 1, scaleX: 0, scaleY: 0, translateX: '-50%', translateY: '-50%', transformOrigin: '0% 0%', ease: 'ease-out' },
      ], 300);
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