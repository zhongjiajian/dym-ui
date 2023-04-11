/* eslint-disable indent */
Component({
    externalClasses: [
        'd-hover-class'
    ],
    properties: {
        showLine: {
            type: Boolean,
            value: true
        },
        lineType: {
            type: String,
            value: 'right'
        },
        lineStyle: {
            type: String,
            value: ''
        },
        showArrow: {
            type: Boolean,
            value: true
        },
        disabledHover: {
            type: Boolean,
            value: false
        },
        customStyle: {
            ype: String,
            value: ''
        }
    },

});