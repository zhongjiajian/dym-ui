Component({

  properties: {
    itemColor: {
      type: String,
      value: '#000000'
    },
    itemHeight: {
      type: Number,
      optionalTypes: [String],
      value: 80
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    showCancel: {
      type: Boolean,
      value: true,
    },
    zIndex: {
      type: String,
      optionalTypes: [Number],
      value: 901
    },
  },
  data: {
    show: false,
    itemList: []
  },
  methods: {
    maskTouchMove() { },
    show(object) {
      // object:{
      //     itemList,
      //     success,
      //     fail,
      //     complete,
      // }
      const itemList = object.itemList;
      if (!itemList || !Array.isArray(itemList) || !itemList.length) return;
      this.setData({
        show: true,
        itemList
      });
      this.success = object.success;
      this.fail = object.fail;
      this.complete = object.complete;
    },
    hide() {
      this.setData({ show: false });
      this.fail && this.fail({
        errMsg:'cancel',
      });
      this.complete && this.complete({
        errMsg:'cancel',
      });
    },
    itemTap(e){
      this.setData({ show: false });
      this.success && this.success({
        errMsg:'ok',
        tapIndex: e.currentTarget.dataset.index
      });
      this.complete && this.complete({
        errMsg:'ok',
        tapIndex: e.currentTarget.dataset.index
      });
    }
  }
});