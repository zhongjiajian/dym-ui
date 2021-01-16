Component({
    properties: {


        type: {
            type: String,
            value: 'number',
            options: ['number', 'idcard', 'digit'] //数字输入键盘 身份证输入键盘 带小数点的数字输入键盘
        },
        // 点击键盘是否震动
        vibrate: {
            type: Boolean,
            value: true
        },

    },

    lifetimes: {
        created() {
            wx.getSystemInfo({
                success: (result) => {
                    this.platform = result.platform;
                }
            });

        },

    },

    methods: {
        hide() {
            this.setData({
                show: false
            });
            this.triggerEvent('hide');
        },
        addInput(e) {
            if (this.properties.vibrate && this.platform != 'devtools') { //微信开发工具上震动效果太恶心
                wx.vibrateShort();
            }
            this.triggerEvent('addInput', {
                value: e.currentTarget.dataset.data
            });
        },
        deleteInput(e) {
            if (this.properties.vibrate && this.platform != 'devtools') {
                wx.vibrateShort();
            }
            this.triggerEvent('deleteInput');
        },

    }
})