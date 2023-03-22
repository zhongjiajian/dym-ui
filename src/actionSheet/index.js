Component({
  properties: {
    sheetHeight: {
      type: String,
      value: ''
    },
    itemStyle: {
      type: String,
      value: ''
    },
    lineStyle: {
      type: String,
      value: ''
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    cancelStyle: {
      type: String,
      value: ''
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
      return new Promise((resolve, reject) => {
        const itemList = object.itemList;
        this.promiseResolve = resolve;
        this.promiseReject = reject;

        if (!itemList || !Array.isArray(itemList) || !itemList.length) {
          object.fail && object.fail({
            errMsg: 'error',
          });
          object.complete && object.complete({
            errMsg: 'error',
          });
          reject({
            errMsg: 'error',
          });
          return;
        }
        this.setData({
          show: true,
          itemList
        });
        this.success = object.success;
        this.fail = object.fail;
        this.complete = object.complete;
        this.animateShow();
      });
    },
    animateShow() {
      this.animate('.d-actionSheet .mask', [
        { offset: 0, opacity: 0, },
        { offset: 1, opacity: 1, ease: 'ease-out' },
      ], 300);
      if (this.properties.sheetHeight) {
        this.animate('.d-actionSheet .content', [
          { offset: 0, height: 0, opacity: 1 },
          { offset: 1, height: this.properties.sheetHeight, ease: 'ease-out' },
        ], 300);
      } else {
        this.animate('.d-actionSheet .content', [
          { offset: 0, opacity: 0, height: 'auto' },
          { offset: 1, opacity: 1, ease: 'ease-out' },
        ], 300);
      }
    },
    hide() {
      this.animateHide(function () {
        this.setData({ show: false });
        this.fail && this.fail({
          errMsg: 'cancel',
        });
        this.complete && this.complete({
          errMsg: 'cancel',
        });
        this.promiseReject({
          errMsg: 'cancel',
        });
      }.bind(this));

    },
    itemTap(e) {
      this.animateHide(function () {
        this.setData({ show: false });
        this.success && this.success({
          errMsg: 'ok',
          tapIndex: e.currentTarget.dataset.index
        });
        this.complete && this.complete({
          errMsg: 'ok',
          tapIndex: e.currentTarget.dataset.index
        });
        this.promiseResolve({
          errMsg: 'ok',
          tapIndex: e.currentTarget.dataset.index
        });
      }.bind(this));

    },
    animateHide(callback) {
      this.animate('.d-actionSheet .mask', [
        { offset: 0, opacity: 1, },
        { offset: 1, opacity: 0, ease: 'ease-out' },
      ], 300, callback);
      if (this.properties.sheetHeight) {
        this.animate('.d-actionSheet .content', [
          { offset: 0, height: this.properties.sheetHeight, opacity: 1 },
          { offset: 1, height: 0, ease: 'ease-out' },
        ], 300);
      } else {
        this.animate('.d-actionSheet .content', [
          { offset: 0, opacity: 1, height: 'auto', },
          { offset: 1, opacity: 0, ease: 'ease-out' },
        ], 300);
      }
    },
  }
});