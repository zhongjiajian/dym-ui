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
    position: 'center', //options:['center','bottom']
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
                for (let key in showOptions) {
                    if (
                        defaultOptions[key] === undefined
                    ) {
                        delete showOptions[key];
                    }
                }
                this.setData({
                    show: true,
                    ...showOptions,
                });
                this.promiseResolve = resolve;
                this.promiseReject = reject;
                this._dy_custom_success = options.success;
                this._dy_custom_fail = options.fail;
                this._dy_custom_complete = options.complete;
            });
        },
        _confirm() {
            this.hide();
            this._dy_custom_success && this._dy_custom_success({
                errMsg: 'ok',
            });
            this._dy_custom_complete && this._dy_custom_complete({
                errMsg: 'ok',
            });
            this.promiseResolve({
                errMsg: 'ok',
            });
        },
        _cancel() {
            this.hide();
            this._dy_custom_fail && this._dy_custom_fail({
                errMsg: 'cancel',
            });
            this._dy_custom_complete && this._dy_custom_complete({
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