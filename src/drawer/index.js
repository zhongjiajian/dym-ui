Component({
    options: {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        zIndex: {
            type: String,
            optionalTypes: [Number],
            value: 999996
        },
        fixTop: {
            type: String,
            optionalTypes: [Number],
            value: 64
        },
        contentPostionTop: {
            type: String,
            optionalTypes: [Number],
            value: 116
        },
        backgroundColor: {
            type: String,
            value: '#f5f5f5'
        },
        title: {
            type: String,
            value: ''
        },
        cancelText: {
            type: String,
            value: '返回'
        },
        confirmText: {
            type: String,
            value: '确定'
        },
        disableDraw:{
            type: Boolean,
            value: false
        },
        disableMaskTap:{
            type: Boolean,
            value: false
        }
    },
    data: {
        windowHeight: 900,
        animation: true,
        translateY: 0,
        startY: 0,
        moveY: 0,
        endY: 0
    },
    lifetimes:{
        attached(){
            const systemInfo = wx.getSystemInfoSync();
            this.setData({
                windowHeight: systemInfo.windowHeight
            })
        }
    },
    methods: {
        maskTouchMove() { },
        maskTap() {
            if(this.properties.disableMaskTap) return;
            this.setData({
                show: false
            },()=>{
                this.triggerEvent('hidden');
            });
        },
        cancel() {
            this.triggerEvent('cancel');
        },
        confirm() {
            this.triggerEvent('confirm');
        },
        touchMove(event) {
            if(this.properties.disableDraw) return;
            var touch = event.touches[0] || event.changedTouches[0];
            if (!this.data.startY) {
                this.data.startY = touch.clientY || touch.pageY;
            } else {
                this.data.moveY = touch.clientY || touch.pageY;
                if (this.data.moveY < this.data.startY){
                    this.data.startY = this.data.moveY;
                    return;
                }
                this.setData({
                    animation: false,
                    translateY: this.data.moveY - this.data.startY
                })
            }

        },
        touchEnd(event) {
            if(this.properties.disableDraw) return;
            if(!this.data.startY) return;
            var touch = event.changedTouches[0] || event.touches[0];
            this.data.endY = touch.clientY || touch.pageY;
            if (this.data.endY - this.data.startY >= 160) {
                this.setData({
                    animation: true,
                    translateY: 0, 
                    show: false
                },()=>{
                    this.triggerEvent('hidden');
                })
            }else{
                this.setData({
                    animation: true,
                    translateY: 0, 
                    show: true
                })
            }
            this.data.startY = this.data.moveY = this.data.endY = 0;
        },


    },


})

Function.prototype.bindLike = function (that) {
    return function () {
        this.apply(that)
    }
}