const now = new Date();
const years = [];
const months = [];
const dates = [];
const hours = [];
const minutes = [];
for (let i = 2000; i <= now.getFullYear(); i++) {
    years.push(i)
}
for (let i = 1; i <= 12; i++) {
    months.push(i < 10 ? ('0' + i) : i)
}
for (let i = 1; i <= 31; i++) {
    dates.push(i < 10 ? ('0' + i) : i)
}
for (let i = 0; i <= 23; i++) {
    hours.push(i < 10 ? ('0' + i) : i)
}
for (let i = 0; i <= 59; i++) {
    minutes.push(i < 10 ? ('0' + i) : i)
}

Component({
    options: {
        multipleSlots: true
    },
    properties: {
        show: {
            type: Boolean,
            value: false
        },
        fixTop: {
            type: String,
            optionalTypes: [Number],
            value: 64
        },
        title: {
            type: String,
            value: '选择时间'
        },
        titleStyle:{
            type:String,
            value:''
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        cancelTextStyle: {
            type: String,
            value: ''
        },
        confirmText: {
            type: String,
            value: '确定'
        },
        confirmTextStyle: {
            type: String,
            value: ''
        },
        type: {
            type: String,
            options: ['year', 'year-month', 'year-month-date', 'time', 'year-month-date-time'],
            value: 'year-month-date-time'
        },
        timeValue: {
            type: String,
            optionalTypes: [Number],
            value: now.getTime()
        }
    },
    data: {
        years, months, dates, hours, minutes,
        innerVal: []
    },
    methods:{
        cancel(){
            this.triggerEvent('canel');
        },
        hidden(){
            this.triggerEvent('hidden');
        },
        confirm(){
            const innerVal = this.data.innerVal;
            const type = this.properties.type;
            let postVal = '';
            switch (type) {
                case 'year':
                    postVal = `${years[innerVal[0]]}`;
                    break;
                case 'year-month':
                    postVal = `${years[innerVal[0]]}-${months[innerVal[1]]}`;
                    break;
                case 'year-month-date':
                    postVal = `${years[innerVal[0]]}-${months[innerVal[1]]}-${dates[innerVal[2]]}`;
                    break;
                case 'time':
                    postVal = `${hours[innerVal[0]]}:${minutes[innerVal[1]]}`;
                    break;
                default:
                    postVal = `${years[innerVal[0]]}-${months[innerVal[1]]}-${dates[innerVal[2]]} ${hours[innerVal[3]]}:${minutes[innerVal[4]]}`;
                    break;
            }
            this.triggerEvent('confirm',postVal);
        },
        bindChange(e){
            const val = e.detail.value;
            const type = this.properties.type;
            if(type.includes('date')) this._resetMonths(years[val[0]],months[val[1]]);
            this.setData({
              innerVal: val
            });
          },
          //月份天数确定
        _resetMonths(year,month){
            const maxDate = new Date(year,month,0).getDate();
            const dates = [];
            for (let i = 1; i <= maxDate; i++) {
                dates.push(i < 10 ? ('0' + i) : i)
            }
            this.setData({dates});
        }
    },
    observers: {
        show() {
            if (this.properties.show) {
                const type = this.properties.type;
                const timeValue = new Date(+this.properties.timeValue);
                if(type.includes('date')) this._resetMonths(timeValue.getFullYear(),timeValue.getMonth() + 1);
                switch (type) {
                    case 'year':
                        this.setData({
                            innerVal: [
                                years.findIndex(item => (item == timeValue.getFullYear()))
                            ]
                        })
                        break;
                    case 'year-month':
                        this.setData({
                            innerVal: [
                                years.findIndex(item => (item == timeValue.getFullYear())),
                                months.findIndex(item => (item == timeValue.getMonth() + 1)),
                            ]
                        })
                        break;
                    case 'year-month-date':
                        this.setData({
                            innerVal: [
                                years.findIndex(item => (item == timeValue.getFullYear())),
                                months.findIndex(item => (item == timeValue.getMonth() + 1)),
                                dates.findIndex(item => (item == timeValue.getDate())),
                            ]
                        })
                        break;
                    case 'time':
                        this.setData({
                            innerVal: [
                                hours.findIndex(item => (item == timeValue.getHours())),
                                minutes.findIndex(item => (item == timeValue.getMinutes())),
                            ]
                        })
                        break;
                    default:
                        this.setData({
                            innerVal: [
                                years.findIndex(item => (item == timeValue.getFullYear())),
                                months.findIndex(item => (item == timeValue.getMonth() + 1)),
                                dates.findIndex(item => (item == timeValue.getDate())),
                                hours.findIndex(item => (item == timeValue.getHours())),
                                minutes.findIndex(item => (item == timeValue.getMinutes())),
                            ]
                        })

                }
            }
        }
    }
})