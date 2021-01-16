Component({
    
    properties: {
        name: String,
        color: {
            type: String,
            value: '#00A19C'
        },
        size: {
            type: String,
            optionalTypes: [Number],
            value: '40'
        },
    },
    lifetimes: {
        attached() {
            if (!this.properties.name) {
                console.error('icon组件的name属性不能为空');
            }
        }
    }

});



