Component({
    properties: {
        openText: {
            type: String,
            value: '是',
        },
        openColor: {
            type: String,
            value: '#00A19C',
        },
        closeText: {
            type: String,
            value: '否',
        },
        closeColor: {
            type: String,
            value: '#999999',
        },
        value: {
            type: Boolean,
            optionalTypes: [Number], //0 or 1
            value: false,
        },
        disabled: {
            type: Boolean,
            value: false,
        },
    },
    data: {
        _value: false,
    },
    observers: {
        value(val) {
            if (val != undefined) {
                this.setData({
                    _value: !!val,
                });
            }
        },
    },
    methods: {
        change() {
            if (this.properties.disabled) return;
            const _value = !this.data._value;
            this.setData({
                _value,
            });
            this.triggerEvent('change', {
                value: _value,
            });
        },
    },
});
