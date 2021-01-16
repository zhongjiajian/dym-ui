import { typeofIt } from '../utils/utils.js';
Component({
  properties: {
    focus: {
      type: Boolean,
      value: false
    },
    value: {
      type: String,
      value: ""
    },
    height: {
      type: String,
      optionalTypes: [Number],
      value: "98"
    },

    clear: {
      type: Boolean,
      value: true
    },

    groupSpacing: {
      type: String,
      optionalTypes: [Number],
      value: '20'
    },

    textStyle: {
      type: String,
      value: ''
    },
    bottomLineStyle: {
      type: String,
      value: 'background-color:#000;'
    },
    bottomLineActiveStyle: {
      type: String,
      value: 'background-color:#00A19c;'
    },
    cursorStyle: {
      type: String,
      value: 'color: #00A19C'
    },
    cursorActiveStyle: {
      type: String,
      value: ''
    },
    clearStyle: {
      type: String,
      value: ''
    },

    keyboardZIndex: {
      type: String,
      optionalTypes: [Number],
      value: 999997
    },
    keyboardFixBottom: {
      type: String,
      optionalTypes: [Number],
      value: '0'
    },

    keyboardAnimation: {
      type: Boolean,
      value: true
    },
    adjustPosition: { // 键盘弹起时，是否自动上推页面
      type: Boolean,
      value: true
    },
    cursorSpacing: { //页面自动上推时，指定输入框底部到键盘顶部的距离
      type: Number,
      value: 0
    },
  },
  data: {
    keyboardHeight: 226
  },
  lifetimes: {
    created() {
        wx.getSystemInfo({
            success: (result) => {
                this.windowHeight = result.windowHeight;
            }
        });

    },
   
    ready() {
        wx.createSelectorQuery().in(this).select('#d-keybord-1611026643897').boundingClientRect(rect => {
            this.data.keyboardHeight = rect.height;
        }).exec();
    }
},
  observers: {
    value: function (val) {
      if (val.length > 11) {
        this.setData({ value: val.slice(0, 11) });
      }
      if (!/^\d*$/.test(val)) {
        console.error('phoneNumberInput组件value属性必须是数字组合');
      }

    }
  },
  methods: {
    focus(e) {
      this.setData({
        focus: true
      });
      this.triggerEvent('focus');
      this.pageAdjust(e); //页面自动上推
    },
    pageAdjust(triggerEventObject){
      if (!this.properties.adjustPosition || !this.properties.focus) return;
      const teo = triggerEventObject;
      if (typeofIt(teo) != 'object') return;
      if (!Object.keys(teo).length) return;
      wx.createSelectorQuery().in(this).select('.d-phone-number-input').boundingClientRect(rect => {
          // 触发元素底部位于指定位置的下方则页面上推
          const triggerRect = rect;
          const adjustHeight = this.windowHeight - this.data.keyboardHeight - this.properties.cursorSpacing;
          if (adjustHeight < triggerRect.bottom) {
              const scrollTop = triggerRect.height + this.properties.cursorSpacing + teo.currentTarget.offsetTop - (this.windowHeight - this.data.keyboardHeight)
              wx.pageScrollTo({
                  scrollTop: scrollTop,
                  duration: 200
              })
          }

      }).exec();
  },
    addInput(e) {
      if (this.properties.value.length >= 11) return;
      let value = this.properties.value + e.detail.value
      this.setData({
        value
      });
      this.triggerEvent('input', value);
    },
    deleteInput(e) {
      if (!this.properties.value.length) return;
      let value = this.properties.value.slice(0, -1)
      this.setData({
        value
      });
      this.triggerEvent('input', value);
    },
    blur() {
      this.setData({
        focus: false
      });
      this.triggerEvent('blur', this.properties.value);
    },
    clear() {
      this.setData({
        value: ""
      });
      this.triggerEvent('input', '');
      this.triggerEvent('focus');
    }
  },
})