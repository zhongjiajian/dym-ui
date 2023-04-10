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