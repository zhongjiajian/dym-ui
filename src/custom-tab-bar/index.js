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
    },
    methods: {
        switchTab(e) {
            const data = e.currentTarget.dataset;
            const url = data.path;
            wx.switchTab({ url });
            this.setData({
                selected: data.index
            });
        }
    }
});