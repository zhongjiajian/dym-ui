import { typeofIt } from '../utils/utils.js';

Component({

  properties: {
    title: String,
    mask: {
      type: Boolean,
      value: false
    },
    zIndex: {
      type: String,
      optionalTypes: [Number],
      value: 1000
    },
    duration: {
      type: Number,
      optionalTypes: [String],
      value: 1500
    },
    customStyle: {
      type: String,
      value: '',
    },
    position: {
      type: String,
      value: 'center',
      options:['center','bottom','top']
    },
    type: {
      type: String,
      value: 'info',
      options:['success','warning','error','info',]
    },
    icon:{
      type: Boolean,
      value: true
    },
    color:{
      type: String,
      value: '',
    },

  },
  data: {
    show: false
  },

  methods: {
    show(option) {
      if (typeofIt(option) === 'object') {
        option.show = true;
      } else {
        option = {
          show: true
        };
      }
      let duration = this.properties.duration;
      if (typeofIt(option.duration) === 'number') {
        duration = option.duration;
      }
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => { this.hide(); }, duration);
      this.setData(option);
    },
    hide() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.setData({
        show: false
      });
    }
  }
});
