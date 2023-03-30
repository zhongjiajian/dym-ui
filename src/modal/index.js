/* eslint-disable indent */
import { typeofIt } from '../utils/utils.js';

const defaultOptions = {
    title: '',
    content: '',
    showCancel: true,
    cancelText: '取消',
    cancelColor: '#000',
    confirmText: '确定',
    confirmColor: '#576B95',
};
Component({
    properties: {
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
        show: false,
        ...defaultOptions,
    },
    methods: {
        show(options) {
            // options:{
            //     ...
            //     success,
            //     fail,
            //     complete,
            // }
            return new Promise((resolve, reject) => {
                if (this.data.show) return;
                if (typeofIt(options) !== 'object') options = {};
                const showOptions = Object.assign({}, defaultOptions, options);
                this.setData({
                    show: true,
                    ...showOptions,
                });
                this.promiseResolve = resolve;
                this.promiseReject = reject;
                this.success = options.success;
                this.fail = options.fail;
                this.complete = options.complete;
            });
        },
        _confirm() {
            this.hide();
            this.success && this.success({
                errMsg: 'ok',
            });
            this.complete && this.complete({
                errMsg: 'ok',
            });
            this.promiseResolve({
                errMsg: 'ok',
            });
        },
        _cancel() {
            this.hide();
            this.fail && this.fail({
                errMsg: 'cancel',
            });
            this.complete && this.complete({
                errMsg: 'cancel',
            });
            this.promiseReject({
                errMsg: 'cancel',
            });
        },
        _tapMask() {
            this.triggerEvent('tapMask');
        },
        hide() {
            this.setData({
                show: false,
            });

        }
    }
});