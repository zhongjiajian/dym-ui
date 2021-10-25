Component({
    properties:{
        checked:{
            type: Boolean,
            value: false
        },
        disabled:{
            type: Boolean,
            value: false
        },
        color: {
            type: String,
            value: 'rgba(0,0,0,0.25)'
        },
        activeColor: {
            type: String,
            value: '#00A19C'
        },
        size: {
            type: String,
            optionalTypes: [Number],
            value: '32'
        },
        hotAreaSize: {
            type: String,
            optionalTypes: [Number],
            value: '32'
        }
    },
    methods:{
        change(){
            if(this.properties.disabled) return;
            const val = !this.properties.checked;
            this.setData({checked:val});
            this.triggerEvent('change',{value:val});
        }
    }
})