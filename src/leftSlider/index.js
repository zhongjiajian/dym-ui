const _windowWidth = wx.getSystemInfoSync().windowWidth;
Component({
  options: {
    multipleSlots: true
  },
  properties: {
    width: {
      type: Number,
      value: _windowWidth?_windowWidth:375
    },
    height: {
      type: Number,
      value: 50
    },
    crisis: {
      type: Number,
      value: 0
    },
    subWidth: {
      type: Number,
      value: 0
    },
    disabled: {
      type: Boolean,
      value: false
    },
    autoClose: {
      type: Boolean,
      value: false
    },
    close: {
      type: Boolean,
      value: false,
      observer: function (newVal) {
        if (newVal) {
          if(!this.data.x) this.triggerEvent('slideClose');
          this.setData({
            x: this.properties.subWidth
          },()=>{
            this.setData({close: false});
          });
        }
      }
    },
    mainBackgroundColor:{
      type: String,
      value: '#00A19C'
    },
    subBackgroundColor:{
      type: String,
      value: '#cccccc'
    },
  },
  data: {
    x: 0,
  },
  lifetimes: {
    attached() {
      this.setData({
        x: this.properties.subWidth,
        crisis: this.properties.subWidth / 2,
      });
    }

  },
  methods: {
    onTouchStart(e) {
      if(this.properties.disabled) return;
      this.moving = true;
      this.triggerEvent('slideStart',e.detail);
    },
    onTouchEnd(e) {
      if(this.properties.disabled) return;
      this.moving = false;
      if(this.properties.autoClose){ //自动关闭
        this.setData({
          x: this.properties.subWidth
        });
      }else{ // 根据临界值判断关闭或打开
        if(!this.moveX) return;
        const crisis = this.properties.crisis;
        if(this.data.x && this.moveX <= crisis) this.triggerEvent('slideOpen');
        else if(!this.data.x && !(this.moveX <= crisis)) this.triggerEvent('slideClose');
        this.setData({
          x: this.moveX <= crisis ? 0 : this.properties.subWidth
        });
      }

      this.moveX = 0;
      this.triggerEvent('slideEnd',e.detail);
    },
    onTouchChange(e) {
      if(this.properties.disabled) return;
      if (this.moving) this.moveX = e.detail.x;
      this.triggerEvent('change',e.detail);
    },

  }
});