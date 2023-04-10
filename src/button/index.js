/* eslint-disable indent */
Component({
    externalClasses: [
        'd-hover-class',
        'custom-class'
    ],
    properties: {
        isCustomHoverClass: {
            type: Boolean,
            value: false
        },
        textColor: {
            type: String,
            value: '#000'
        },
        loading: {
            type: Boolean,
            value: false
        },
        loadingSize: {
            type: String,
            optionalTypes: [Number],
            value: '25'
        },
        icon: {
            type: String,
            value: ''
        },

        iconSize: {
            type: String,
            optionalTypes: [Number],
            value: '30'
        },

        // 保留的原生button属性
        size: {
            type: String,
            value: 'default'
        },
        type: {
            type: String,
            value: 'default'
        },
        plain: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        customStyle: {
            type: String,
            value: ''
        },
    },
});