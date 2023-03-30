import { typeofIt } from '../utils/utils.js';

Component({
  properties: {
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
    show(options) {
      // options:{
      //     itemList,
      //     success,
      //     fail,
      //     complete,
      // }

      return new Promise((resolve, reject) => {
        if (this.data.show) return;
        if (typeofIt(options) !== 'object') options = {};
        const itemList = options.itemList;
        this.promiseResolve = resolve;
        this.promiseReject = reject;

        if (!itemList || !Array.isArray(itemList) || !itemList.length) {
          options.fail && options.fail({
            errMsg: 'error',
          });
          options.complete && options.complete({
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
        this.success = options.success;
        this.fail = options.fail;
        this.complete = options.complete;
        this.animateShow();
      });
    },
    getContentRect() {
      var query = wx.createSelectorQuery().in(this);
      return new Promise((resolve) => {
        query.select('.d-actionSheet .content').boundingClientRect(function (res) {
          resolve(res);
        }).exec();
      });
    },
    async animateShow() {
      this.animate('.d-actionSheet .mask', [
        { offset: 0, opacity: 0, },
        { offset: 1, opacity: 1, ease: 'ease-out' },
      ], 300);
      const contentRect = await this.getContentRect();
      this.animate('.d-actionSheet .content', [
        { offset: 0, height: 0, opacity: 1 },
        { offset: 1, height: `${contentRect.height}px`, ease: 'ease-out' },
      ], 300);

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
      this.animate('.d-actionSheet .content', [
        { offset: 0, opacity: 1 },
        { offset: 1, height: 0, ease: 'ease-out' },
      ], 300);
    },
  }
});