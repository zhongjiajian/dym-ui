Component({
    properties: {
        value: {
            type: Number,
            optionalTypes: [String],
            value: 0
        },
        size: {
            type: Number,
            optionalTypes: [String],
            value: 32
        },
        max: {
            type: Number,
            optionalTypes: [String],
            value: 5
        },
        disabled: {
            type: Boolean,
            value: false
        },
        // color: {
        //     type: String,
        //     value: '#FFD000'
        // },
        // voidColor: {
        //     type: String,
        //     value: '#CCCCCC'
        // },
        showScore: {
            type: Boolean,
            value: false
        },
        gap: {
            type: Number,
            optionalTypes: [String],
            value: 10
        },
        allowHalf: {
            type: Boolean,
            value: false
        }
    },
    data: {
        eachFull: 1,
        dataList: [0, 0, 0, 0, 0],
        score:0

    },
    observers: {
        max(newVal) {
            this.setData({
                eachFull: this.properties.max / 5
            })
        },
        value(newVal) {
            let v = +newVal;
            const score = v.toFixed(1);
            const r = this.properties.max / 5;
            const dataList = Array(5);
            for (let i = 0; i < dataList.length; i++) {
                dataList[i] = (v >= r ? r : v > 0 ? v : 0)
                v -= r;
            }
            this.setData({
                dataList,
                score
            })
        }
    },
    methods: {
        _change(e) {
            if(this.properties.disabled) return;
            const eachFull = this.data.eachFull;
            const halfFull = eachFull / 2;
            const tapIndex = e.currentTarget.dataset.flag;
            let tapMember = this.data.dataList[tapIndex];
            const dataList = Array(5);
            for (let i = 0; i < dataList.length; i++) {
                dataList[i] = i < tapIndex ? eachFull : 0;
            }
            if (this.properties.allowHalf) {
                dataList[tapIndex] = tapMember ? (tapMember < halfFull ? halfFull : tapMember === eachFull ? 0 : eachFull) : halfFull
            } else {
                dataList[tapIndex] = tapMember ? (tapMember === eachFull ? 0 : eachFull) : eachFull;
            }
            let score = eachFull * tapIndex + dataList[tapIndex];
            score = score.toFixed(1);
            this.setData({
                dataList,
                score
            })
            this.triggerEvent(
                'change', score
            )
        }
    }

})