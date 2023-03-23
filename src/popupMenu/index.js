const _systemInfo = wx.getSystemInfoSync();
const _windowWidth = _systemInfo.windowWidth || 375, _windowHeight = _systemInfo.windowHeight || 603;
Component({
  properties: {

    customStyle: {
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

  methods: {
    maskTouchStart() {
      this.maskTap();
    },
    maskTouchMove() {
    },
    contentTouchMove() { },
    getContentRect() {
      var query = wx.createSelectorQuery().in(this);
      return new Promise((resolve) => {
        query.select('.d-popupMenu .content').boundingClientRect(function (res) {
          resolve(res);
        }).exec();
      });
    },
    show(e) {
      if (this.data._show) return;
      this.setData({
        _show: true
      }, async () => {
        const contentRect = await this.getContentRect();
        const touch = e.touches[0] || e.changedTouches[0];
        const cx = touch.clientX, cy = touch.clientY;
        const w = contentRect.width, h = contentRect.height;
        let left = this.data.left, top = this.data.top;
        let transformOriginX = '0%', transformOriginY = '0%';
        if ((cx + w) <= _windowWidth) {
          left = `${cx}px`;
        } else {
          left = `calc(${cx}px - ${w}px)`;
          transformOriginX = '100%';
        }
        if ((cy + h) <= _windowHeight) {
          top = `${cy}px`;
        } else {
          top = `calc(${cy}px - ${h}px)`;
          transformOriginY = '100%';
        }
        this.setData({
          left,
          top,
        });
        const transformOriginXY = `${transformOriginX} ${transformOriginY}`;
        this.animateShow(transformOriginXY);
      });
    },
    animateShow(transformOriginXY) {
      this.animate('.d-popupMenu .mask', [
        { offset: 0, opacity: 0, },
        { offset: 1, opacity: 1, ease: 'ease-out' },
      ], 200);
      this.transformOriginXY = transformOriginXY;
      this.animate('.d-popupMenu .content', [
        { offset: 0, scaleX: 0, scaleY: 0, opacity: 1, transformOrigin: transformOriginXY },
        { offset: 1, scaleX: 1, scaleY: 1, opacity: 1, transformOrigin: transformOriginXY, ease: 'ease-out' },
      ], 200);
    },
    hide() {
      if (!this.data._show) return;
      this.animateHide(() => {
        this.setData({
          _show: false
        });
      });

    },
    animateHide(callback) {
      this.animate('.d-popupMenu .mask', [
        { offset: 0, opacity: 1, },
        { offset: 1, opacity: 0, ease: 'ease-out' },
      ], 200, callback.bind(this));
      this.animate('.d-popupMenu .content', [
        { offset: 0, scaleX: 1, scaleY: 1, opacity: 1, transformOrigin: this.transformOriginXY },
        { offset: 1, scaleX: 0, scaleY: 0, opacity: 0, transformOrigin: this.transformOriginXY, ease: 'ease-out' },
      ], 200);
    },
    maskTap() {
      if (!this.properties.closeTapMask) return;
      this.animateHide(() => {
        this.setData({
          _show: false
        });
        this.triggerEvent('hidden');
      });
    }
  }
});