/* eslint-disable indent */
Component({
    properties: {
        list: {
            type: Array,
            value: []
        },
        selected: {
            type: Number,
            optionalTypes: [String],
            value: 0
        },
        color: {
            type: String,
            value: '#D4F2F1'
        },
        selectedColor: {
            type: String,
            value: '#00A19C'
        },
        direction: {
            type: String,
            value: 'column', // icon与text的排列方向 row column
        },
        iconStyle: {
            type: String,
            value: ''
        },
        textStyle: {
            type: String,
            value: ''
        },
    },
    data: {
        safeAreaInsetBottom: 0,
    },
    lifetimes: {
        attached() {
            const systemInfo = wx.getSystemInfoSync();
            if (systemInfo.screenHeight && systemInfo.safeArea && systemInfo.safeArea.bottom) {
                const safeAreaInsetBottom = systemInfo.screenHeight - systemInfo.safeArea.bottom;
                if (safeAreaInsetBottom > 0) {
                    this.setData({
                        safeAreaInsetBottom
                    });
                }
            }
        }
    },
    methods: {
        nav(e) {
            const data = e.currentTarget.dataset;
            const url = data.path;
            if (this.properties.selected == data.index) return;
            const navType = data.navtype || 'switchTab';
            wx[navType]({ url });
            if (navType === 'switchTab') this.setData({
                selected: data.index
            });
        }
    }
});