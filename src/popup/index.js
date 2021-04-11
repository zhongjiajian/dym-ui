Component({
    properties:{
        show:{
            type: Boolean,
            value: false
        },
        showMask:{
            type: Boolean,
            value: true
        },
        zIndex:{
            type: String,
            optionalTypes: [Number],
            value: 999996
        },
    },
    methods:{
        maskTouchMove(){},
        tapMask(){
            this.triggerEvent('tapMask');
        }
    }
})