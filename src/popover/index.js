Component({
    externalClasses: [
        'custom-class'
    ],
    options: {
        multipleSlots: true
    },
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        disabled: {
            type: Boolean,
            value: false
        },
        placement: {
            type: String,
            options: ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'],
            value: 'top'
        },
        backgroundColor: {
            type: String,
            value: 'rgba(0,0,0,.65)'
        },
        text: {
            type: String,
            value: ''
        },
        disableAnimation: {
            type: Boolean,
            value: false
        },
        zIndex:{
            type: String,
            optionalTypes:[Number],
            value:999994
        }
    },
    data: {
        mainPlacement: 'top',
        subOffsetStyle: '',
        opacity: 0
    },
    lifetimes: {
        ready() {
            this.initComponent();
        }
    },
    methods: {
        initComponent() {

            Promise.all([this._getPopoverRect(),this._getPopoverSlotRect()])
            .then(res=>{
                this._setSubOffsetStyle(res[0].width,res[0].height,res[1].width,res[1].height);
            })
        },
        _getPopoverRect(){
            return new Promise(resolve=>{
                wx.createSelectorQuery().in(this).select('.d-popover-self').boundingClientRect(rect => {
                    resolve(rect);
                }).exec();
            })
        },
        _getPopoverSlotRect(){
            return new Promise(resolve=>{
                wx.createSelectorQuery().in(this).select('.d-popover-slot-wrap').boundingClientRect(rect => {
                    resolve(rect);
                }).exec();
            })
        },
        _setSubOffsetStyle(pw,ph,w, h) {
            const p = this.properties.placement;
            if((p.startsWith('top') || p.startsWith('bottom')) && (pw<=w)){
                this.setData({
                    subOffsetStyle: 'left:50%;transform:translateX(-50%);'
                })
                return;
            }
            if((p.startsWith('left') || p.startsWith('right')) && (ph<=h)){
                this.setData({
                    subOffsetStyle: `top:50%;transform:translateY(-50%);`

                })
                return;
            }
            if (p === 'top' || p === 'bottom') {
                this.setData({
                    subOffsetStyle: 'left:50%;transform:translateX(-50%);'
                })
            } else if (p === 'top-start' || p === 'bottom-start') {
                this.setData({
                    subOffsetStyle: `left:${w / 2}px;transform:translateX(-50%);`
                })
            } else if (p === 'top-end' || p === 'bottom-end') {
                this.setData({
                    subOffsetStyle: `right:${w / 2}px;transform:translateX(50%);`
                })
            } else if (p === 'left' || p === 'right') {
                this.setData({
                    subOffsetStyle: `top:50%;transform:translateY(-50%);`
                })
            } else if (p === 'left-start' || p === 'right-start') {
                this.setData({
                    subOffsetStyle: `top:${h / 2}px;transform:translateY(-50%);`
                })
            } else if (p === 'left-end' || p === 'right-end') {
                this.setData({
                    subOffsetStyle: `bottom:${h / 2}px;transform:translateY(50%);`
                })
            }
        },
        hidePopover() {
            if (!this.properties.disabled && this.properties.show) {
                this.setData({
                    show: false
                })
            }
        }
    },
    observers: {
        placement() {
            this.initComponent();
            this.setData({
                mainPlacement: this.properties.placement.split('-')[0]
            })
        },
        show(val) {
            wx.nextTick(()=>{
                this.setData({
                    opacity: this.properties.show ? 1 : 0
                })
            })
            
        }
    }
})