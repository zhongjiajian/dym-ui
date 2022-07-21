const _systemInfo = wx.getSystemInfoSync();
const _windowWidth = _systemInfo.windowWidth || 375, _windowHeight = _systemInfo.windowHeight || 603;
Component({
  properties: {
    width: {
      type: Number,
      value: 150
    },
    height: {
      type: Number,
      value: 100
    },
    style: {
      type: String,
      value: ''
    },
    zIndex: {
      type: String,
      optionalTypes: [Number],
      value: 901
    },
    maskBackgroundColor: {
      type: String,
      value: 'transparent'
    },
    closeTapMask: {
      type: Boolean,
      value: true
    }
  },
  data: {
    _show: false,
    left: '',
    top: '',
  },
  lifetimes: {
    attached() {
      const w = this.properties.width, h = this.properties.height;
      this.setData({
        left: `calc(${_windowWidth / 2}px - ${w / 2}px)`,
        top: `calc(${_windowHeight / 2}px - ${h / 2}px)`
      });
    }
  },
  methods: {
    maskTouchMove(e) { 
      if(!this.properties.closeTapMask) return;
      this.hide();
    },
    contentTouchMove(){

    },
    show(e) {
      const touch = e.touches[0] || e.changedTouches[0];
      const cx = touch.clientX, cy = touch.clientY;
      const w = this.properties.width, h = this.properties.height;
      let left = this.data.left, top = this.data.top;
      if ((cx + w) <= _windowWidth) left = `${cx}px`;
      else left = `calc(${cx}px - ${w}px)`;
      if ((cy + h) <= _windowHeight) top = `${cy}px`;
      else top = `calc(${cy}px - ${h}px)`;
      this.setData({
        left,
        top,
        _show: true
      });

    },
    hide() {
      const w = this.properties.width, h = this.properties.height;
      this.setData({
        left: `calc(${_windowWidth / 2}px - ${w / 2}px)`,
        top: `calc(${_windowHeight / 2}px - ${h / 2}px)`,
        _show: false
      });
    },
    maskTap(){
      if(!this.properties.closeTapMask) return;
      this.hide();
    }
  }
});